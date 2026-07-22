---
title: Platform Overview
layout: default
nav_order: 3
---

# Platform Overview
{: .no_toc }

Understanding the architecture and capabilities of the HealthPlus Lab Results Dashboard.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Purpose

The HealthPlus Lab Results Dashboard serves as a bridge between conventional laboratory medicine and functional medicine practice. It provides:

1. **Intelligent Range Interpretation** - Automatically applies functional reference ranges to conventional lab results
2. **Context-Aware Analysis** - Surfaces patient demographics, reproductive context, and clinical persona so range selection and interpretation reflect the available context
3. **Explainable AI** - Transparent reasoning for every flag and recommendation
4. **AI-Assisted Interpretation Summaries** - Generated clinical summaries with generic, bounded (non-dosing) next-step recommendations; the platform never generates dosing or specific treatment protocols
5. **Audit Trail** - Complete version history and citation tracking for clinical documentation

---

## How It Works

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        PATIENT LAB RESULTS                               │
│                    (Conventional Reference Ranges)                       │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      CONTEXT LAYER                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                   │
│  │ Demographics │  │  Pregnancy   │  │   Clinical   │                   │
│  │  Age / Sex   │  │   Status     │  │   Persona    │                   │
│  └──────────────┘  └──────────────┘  └──────────────┘                   │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                   RANGE RESOLUTION ENGINE                                │
│                                                                          │
│   Functional Priority Chain:                                             │
│   1. Patient-specific functional overrides                               │
│   2. Persona-specific functional ranges                                  │
│   3. Active clinic functional range set                                  │
│                                                                          │
│   Conventional ranges resolve separately by lab/provider source.         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    INTERPRETED RESULTS                                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                   │
│  │   Flagged    │  │ Explainability│  │  Treatment   │                   │
│  │   Values     │  │   Context    │  │   Protocols  │                   │
│  └──────────────┘  └──────────────┘  └──────────────┘                   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Named Range Sets

The platform uses **Named Range Sets**—versioned, curated collections of functional ranges that clinics can select and customize.

### What's in a Range Set?

| Component | Description |
|:----------|:------------|
| **Functional Ranges** | Optimized ranges for wellness assessment |
| **Version History** | Complete audit trail of all changes |
| **Checksum** | Integrity verification for published sets |

### Range Set Lifecycle

```
DRAFT → PUBLISHED → DEPRECATED
  │         │            │
  │         │            └─ Historical reference only
  │         └─ Active, immutable, selectable
  └─ Editable, not yet available
```

Clinics select which published functional range set to use. Patient-specific overrides always take precedence over the selected set. Conventional ranges are maintained separately in the conventional reference range workflow.

[Learn more about Named Range Sets →]({% link docs/named-range-sets.md %})

---

## Key Features

### 1. Dual-Range Display

Every lab result shows both conventional and functional ranges side-by-side:

| Analyte | Value | Conventional Range | Functional Range | Status |
|:--------|:------|:-------------------|:-----------------|:-------|
| TSH | 3.2 mIU/L | 0.5 - 5.0 | 0.5 - 2.0 | **Functional High** |
| Ferritin | 45 ng/mL | 12 - 150 | 50 - 150 | **Functional Low** |

*The values above are illustrative only. HealthPlus applies only configured, sourced ranges and does not invent range values.*

### 2. Range Selection by Available Context

Reference-range selection can key on the dimensions defined in a range:
- **Age** - Age-bounded ranges (the functional set shipped today uses an adult 18–100 bound)
- **Sex** - Sex-specific reference intervals where defined
- **Clinical Personas** - Custom cohort-specific ranges

Range authoring additionally supports **pregnancy status** and **menstrual phase** dimensions, and patient reproductive context is captured on the profile. However, the functional ranges seeded today are **not** stratified by trimester or menstrual phase—they apply the adult range regardless. Trimester-specific and cycle-dependent ranges are therefore a supported authoring capability, not out-of-the-box behavior.

### 3. Explainability at Every Level

Click "Explain" on any result to see:
- Which range was applied and why
- Where the conventional and functional ranges came from
- The precedence chain that determined the range
- Citations and evidence supporting the range
- Version history of range modifications
- Clinician annotations and comments

### 4. AI-Assisted Interpretations

Generate clinical summaries that:
- Synthesize multiple flagged results
- Identify patterns across biomarkers
- Offer generic, bounded next-step recommendations (e.g. resolve missing range coverage before drawing stronger conclusions, review symptoms against relevant marker groups, compare with prior results)—**never dosing or specific treatment protocols**
- Provide patient-friendly explanations (optional mode)

Interpretation narratives are guardrailed and grounded in clinic-authored, sourced guidance; the platform does not invent medical values, dosing, or interventions.

---

## Unified Patient Dashboard

The platform uses a tabbed interface for comprehensive patient management:

| Tab | Purpose |
|:----|:--------|
| **Patient** | Demographics, reproductive context, clinical history |
| **Symptoms** | Patient-reported and clinician-entered symptoms |
| **Lab Results** | All test results with dual-range interpretation |
| **Interpretations** | AI-generated clinical summaries |
| **Protocol** | Treatment planning (clinician-authored) |
| **Side Effects** | Tracking and management |
| **Follow-up** | Scheduling and monitoring |

---

## User Roles

### Clinicians
- Full access to all interpretation features
- Can review pending range-override promotions and promote overrides to persona or global scope (the app does not currently expose an in-app screen to *create* a patient override)
- Can edit AI interpretations with attribution
- Access to explainability and audit trails

### Patients (Read-Only Mode)
- View their own lab results
- Access patient-friendly AI interpretations
- No access to clinical decision-making tools

---

## Next Steps

- [Learn about Conventional to Functional Range Logic →]({% link docs/conventional-to-functional.md %})
- [Review Range Sources and Citations →]({% link docs/range-sources-and-citations.md %})
- [Understand Patient Context & Personas →]({% link docs/patient-context.md %})
- [Jump to Step-by-Step Guides →]({% link docs/guides/index.md %})
