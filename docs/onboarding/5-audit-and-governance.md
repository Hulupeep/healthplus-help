---
title: "5. Technical and Audit-Level Detail"
layout: default
parent: Clinician Onboarding
nav_order: 5
---

# Technical and Audit-Level Detail
{: .no_toc }

**Who this is for:** Clinical leads, quality reviewers, and auditors who need to understand the system's governance model.

---

## Overview

This document covers the technical foundations that make the platform auditable, defensible, and suitable for clinical governance. It assumes familiarity with the concepts introduced in the previous documents.

---

## Named Range Set Versioning

Every Named Range Set is versioned and immutable once published.

**Lifecycle States:**

| State | Description |
|:------|:------------|
| **Draft** | Under development. Can be modified. Not available for clinical use. |
| **Published** | Locked and immutable. Available for clinic selection. |
| **Deprecated** | No longer recommended. Historical results still reference it. |

When a Named Range Set is published, its contents are frozen. No one can alter the range definitions, boundaries, or metadata after publication.

If updates are needed, a new version is created and published separately. Clinics can then choose whether to adopt the new version.

**Why This Matters:**

Immutability ensures that historical results are reproducible. A result processed six months ago will show the same classification today, because the Named Range Set version it references cannot change.

---

## Deterministic Range Definition Selection

Within a Named Range Set, the platform selects range definitions deterministically.

**Selection Criteria (in order of specificity):**

1. Menstrual cycle phase (if recorded)
2. Pregnancy status (recorded as a yes/no requirement on the range definition)
3. Age band (age minimum and maximum)
4. Biological sex

The system searches for the most specific match first. If no exact match exists, it falls back to progressively broader definitions.

> **What the matcher does — and does not — key on.** Range selection is driven by these four demographic dimensions only. A patient's **pregnancy trimester/stage** and the **specimen type** of a test are recorded on the profile and the test definition respectively, but they are **not** selection keys — the matcher does not use them to choose a range. (Pregnancy is matched as a boolean; trimester is descriptive context.)

**Example:**

For a 32-year-old pregnant female:

1. Look for: female, pregnant, age 30-35
2. If not found: female, pregnant
3. If not found: female, age 30-35
4. If not found: female (general adult)

This hierarchy is fixed. It does not vary based on the analyte or clinical context. The same patient context always produces the same selection path.

---

## Conflict Resolution

When multiple range definitions could apply, the most specific definition wins.

The platform does not average ranges, blend boundaries, or apply heuristics. It selects one definition — the most specific match — and applies it.

**What "Most Specific" Means:**

A range definition for "female, pregnant, age 30-35" is more specific than one for "female, pregnant," which is more specific than one for "female."

Specificity is determined by how many context criteria the definition includes, not by which criteria they are.

---

## Alternative Ranges Are Logged, Not Applied

During range selection, the platform considers multiple candidate definitions before selecting the most specific one.

These alternative candidates are logged but not applied. The audit trail shows:

- Which definitions were considered
- Why each was or was not selected
- The final selection and its justification

This transparency allows reviewers to verify that the correct definition was applied.

---

## Audit Trail Structure

Every result classification generates an audit record containing:

| Field | Description |
|:------|:------------|
| **Result ID** | Unique identifier for the lab result |
| **Patient Context** | Demographics at time of collection |
| **Named Range Set** | Name and version of the active range set |
| **Range Definition ID** | The specific definition that was applied |
| **Selection Rationale** | Why this definition was chosen |
| **Alternatives Considered** | Other definitions that were evaluated |
| **Numeric Boundaries** | The actual low/high thresholds used |
| **Classification** | The resulting band (normal, low, high, critical low, or critical high) |
| **Timestamp** | When the classification was performed |
| **Interpretation ID** | Link to any AI interpretation generated |

This audit record is immutable. It cannot be altered after creation.

---

## Clinic-Specific Overrides

When an override exists, it takes precedence over the Named Range Set.

**Override Hierarchy (highest to lowest priority):**

1. **Patient-Specific Override** — A range that applies to one specific patient
2. **Persona Override** — A range defined for a patient cohort (e.g., a "Hashimoto's patients" persona)
3. **Named Range Set** — The clinic's selected default framework

> **How overrides come to exist.** The application does **not** offer a "create patient override" screen. Overrides are introduced through the **Promote Range Override** flow (the Pending Promotions card, which promotes a patient-level override to a persona or the active range set), and in test/seed environments through seed data. The Explain dialog's only patient-level authoring action is **Add clinician note** — a commentary, not a range override. The precedence and audit behavior below applies however the override was introduced. Cohort/persona names such as "Hashimoto's patients" are illustrative.

When an override exists, it is applied instead of the Named Range Set definition. The audit trail records:

- That an override was applied
- Who created the override
- When it was created
- The override boundaries
- The Named Range Set definition that would have been used otherwise

Overrides are explicit and logged. They are never applied silently.

---

## Detailed Processing Flow

The following diagram shows the complete processing flow including override handling:

```mermaid
flowchart TD
    subgraph Input
        A[Lab Result]
        B[Patient Context]
    end

    subgraph OverrideCheck["Override Evaluation"]
        C{Patient Override Exists?}
        D{Persona Override Exists?}
    end

    subgraph RangeSetSelection["Named Range Set Selection"]
        E[Identify Clinic's Active Range Set]
        F[Load Range Definition Library]
    end

    subgraph ContextResolution["Context Resolution"]
        G[Evaluate Candidate Definitions]
        H[Select Most Specific Match]
        I[Log Alternatives Considered]
    end

    subgraph Classification
        J[Apply Numeric Boundaries]
        K{Compare Value}
        L[Classify into Band]
    end

    subgraph Interpretation["Interpretation Layer"]
        M[Analyze Patterns]
        N[Consider Symptoms]
        O[Generate Interpretation]
    end

    subgraph Audit["Audit Trail"]
        P[Record All Decisions]
        Q[Store Immutable Log]
    end

    A --> C
    B --> C
    C -->|Yes| J
    C -->|No| D
    D -->|Yes| J
    D -->|No| E
    E --> F
    F --> G
    B --> G
    G --> H
    H --> I
    I --> J
    J --> K
    K --> L
    L --> M
    M --> N
    N --> O
    L --> P
    O --> P
    P --> Q

    style OverrideCheck fill:#fff3e0,stroke:#ef6c00
    style RangeSetSelection fill:#f3e5f5,stroke:#7b1fa2
    style ContextResolution fill:#e8f4e8,stroke:#2e7d32
    style Interpretation fill:#e3f2fd,stroke:#1565c0
    style Audit fill:#fce4ec,stroke:#c2185b
```

---

## Governance Implications

**For Quality Reviews:**

- Every classification can be traced to a specific Named Range Set version
- The selection rationale is documented for each result
- Alternative definitions are logged for comparison
- Overrides are explicit and attributed

**For Regulatory Compliance:**

- Published Named Range Sets are immutable
- Audit trails are immutable
- Versioning ensures reproducibility
- The system does not make diagnostic claims

**For Clinical Accountability:**

- Clinicians can verify which framework was applied
- AI interpretation is clearly labeled as decision support
- Overrides require explicit clinician action
- No silent changes occur to patient classifications

---

## Key Takeaways

- Named Range Sets are versioned and immutable once published.
- Range definition selection is deterministic and based on fixed specificity rules.
- Alternative candidates are logged but not applied.
- Overrides are explicit, logged, and attributed.
- Complete audit trails exist for every classification.
- The system is designed for reproducibility and clinical governance.
