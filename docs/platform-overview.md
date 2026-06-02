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
2. **Context-Aware Analysis** - Adjusts interpretations based on patient demographics, pregnancy status, and clinical context
3. **Explainable AI** - Transparent reasoning for every flag and recommendation
4. **Treatment Protocol Generation** - AI-assisted clinical interpretations and intervention suggestions
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

### 2. Context-Sensitive Adjustments

The platform automatically adjusts reference ranges based on:
- **Age** - Pediatric, adult, and geriatric ranges
- **Sex** - Sex-specific reference intervals
- **Pregnancy** - Trimester-specific adjustments
- **Menstrual Phase** - Cycle-dependent hormone ranges
- **Clinical Personas** - Custom cohort-specific ranges

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
- Suggest evidence-based interventions
- Provide patient-friendly explanations (optional mode)

---

## Unified Patient Dashboard

The platform uses a tabbed interface for comprehensive patient management:

| Tab | Purpose |
|:----|:--------|
| **Patient** | Demographics, pregnancy context, clinical history |
| **Lab Results** | All test results with dual-range interpretation |
| **Interpretations** | AI-generated clinical summaries |
| **Protocol** | Treatment recommendations and interventions |
| **Side Effects** | Tracking and management |
| **Follow-up** | Scheduling and monitoring |

---

## User Roles

### Clinicians
- Full access to all interpretation features
- Can create and promote range overrides
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
