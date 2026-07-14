---
title: Patient Context & Personas
layout: default
nav_order: 5
---

# Patient Context & Personas
{: .no_toc }

How patient-specific factors dynamically adjust reference range interpretation.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Understanding Patient Context

Patient context includes all demographic and clinical factors that influence biomarker interpretation:

### Demographic Context
The patient profile captures:

- **Date of Birth** - drives age-based interpretation (pediatric, adult, geriatric considerations)
- **Sex at Birth** - `Male` or `Female`; sets baseline reference ranges and reveals the reproductive fields below when `Female`

{: .note }
Ethnicity is not a field in the current patient profile form. Only add context the app actually collects.

### Reproductive Context (female patients)
When Sex at Birth is `Female`, the profile form exposes reproductive context. The fields shown depend on the **Currently Pregnant** toggle:

- **Pregnancy Status** - `Not pregnant`, `Trying to conceive`, `Pregnant`, `Postpartum`
- **Currently Pregnant** toggle - switches the form between pregnancy fields and menstrual-cycle fields

When **pregnant**, the form adds:

- **Pregnancy Stage** - Preconception, Very early, First trimester (early / late), Second trimester, Third trimester, Postpartum
- **Gestational Age (weeks)**, **Pregnancy Confirmed Date**, **Estimated Due Date**, **Gestation Tracking Method**, **Gravida**, **Para**, and **Pregnancy Notes**

When **not pregnant**, the form shows menstrual-cycle context:

- **Menstrual Phase** - Menstruation, Follicular, Ovulation, Luteal, Postmenopausal (or Unknown)
- **Last Period Start Date**, **Typical Cycle Length (days)**, **Ovulation Confirmed Date**, **Cycle Phase Override**
- **On hormonal contraception** toggle (with **Contraception Type** and **Last Stop Date**), and **Cycle Notes**

---

## Pregnancy Context

{: .important }
Pregnancy is the most significant context modifier in the platform. Nearly every biomarker shifts during pregnancy.

### Setting Up Pregnancy Context

| Field | Description | Example |
|:------|:------------|:--------|
| Currently Pregnant | Toggle on/off | Yes |
| Pregnancy Status | Current status | Confirmed |
| Pregnancy Stage | Trimester | Second (14-27 weeks) |
| Gestational Age | Weeks pregnant | 20 weeks |
| Confirmed Date | When confirmed | 2024-03-01 |
| Estimated Due Date | EDD | 2024-11-15 |
| Tracking Method | How tracked | Ultrasound dating |

### Pregnancy-Adjusted Ranges

{: .warning }
The trimester and example values in the tables below are **illustrative only** — they are teaching examples, not values HealthPlus ships. The app never invents ranges: it applies the conventional and functional ranges configured for your clinic, each with its own source/citation. Treat the numbers here as a concept demonstration, and confirm actual thresholds against the configured range sets and their sources.

#### TSH by Trimester (illustrative)

| Trimester | Conventional | Pregnancy-Adjusted | Notes |
|:----------|:-------------|:-------------------|:------|
| First | 0.5-5.0 | 0.1-2.5 mIU/L | hCG suppresses TSH |
| Second | 0.5-5.0 | 0.2-3.0 mIU/L | TSH normalizing |
| Third | 0.5-5.0 | 0.3-3.5 mIU/L | Near non-pregnant |

#### Example: Pregnant Patient Interpretation

**Patient:** 32-year-old, 22 weeks pregnant (2nd trimester)

| Test | Value | Standard | Pregnancy-Adjusted | Flag |
|:-----|:------|:---------|:-------------------|:-----|
| TSH | 2.8 mIU/L | 0.5-2.0 | 0.2-3.0 | **Normal** |
| Ferritin | 35 ng/mL | 50-150 | 30-150 | **Normal** |
| Hemoglobin | 11.2 g/dL | 12.5-14.5 | 10.5-13.5 | **Normal** |

{: .note }
Without pregnancy context, all three would flag as abnormal. With context, they're appropriate for gestational age.

---

## Menstrual Cycle Context

Hormone levels vary dramatically across the menstrual cycle:

### Cycle Phases

The Menstrual Phase selector offers the phases below (plus **Unknown** when uncertain). The hormone directions are general physiology shown for orientation, not app-provided reference values.

| Phase (as shown in app) | Approx. cycle days | FSH | LH | Estradiol | Progesterone |
|:------------------------|:-------------------|:----|:---|:----------|:-------------|
| Menstruation | 1-5 | Low | Low | Low | Low |
| Follicular | 6-13 | Rising | Low | Rising | Low |
| Ovulation | 14-15 | Peak | Peak | Peak | Rising |
| Luteal | 15-28 | Low | Low | Moderate | Peak |
| Postmenopausal | n/a | High | High | Low | Low |

### Setting Cycle Context

The cycle fields appear when Sex at Birth is `Female` and **Currently Pregnant** is off:

- **Menstrual Phase** - Choose the best-fit phase, or leave Unknown
- **Last Period Start Date** - First day of last menstruation
- **Typical Cycle Length (days)** - Used to estimate cycle day (form allows 20-60)
- **Ovulation Confirmed Date** - If known (BBT, OPK, etc.)
- **Cycle Phase Override** - Override the calculated phase when clinician assessment differs
- **On hormonal contraception** - Reveals Contraception Type and Last Stop Date when enabled

---

## Personas: Cohort-Specific Ranges

**Personas** are reusable range profiles for patient cohorts that share clinical characteristics.

### What is a Persona?

A persona represents a clinical phenotype with specific range requirements:
- Athletic patients with different iron/ferritin thresholds
- Patients on thyroid medication with adjusted TSH targets
- Post-menopausal women with modified hormone ranges

### Example Personas

{: .warning }
The personas and their numeric ranges below are **illustrative examples** to show the concept — they are not preset ranges HealthPlus provides. Any persona-level range you use must come from a configured range set with its own source/citation.

#### Athletic Female 25-40

```yaml
Name: athletic-female-25-40
Description: Endurance athletes with high training volume

Adjusted Ranges:
- Ferritin: 80-200 ng/mL (higher for performance)
- Iron: 80-170 mcg/dL (higher demands)
- Hemoglobin: 13.5-15.5 g/dL (training adaptation)
- CK: 100-400 U/L (muscle turnover normal)
```

#### Hashimoto's on Medication

```yaml
Name: hashimotos-treated
Description: Hashimoto's thyroiditis on levothyroxine

Adjusted Ranges:
- TSH: 0.5-2.5 mIU/L (medication target)
- Free T4: 1.0-1.8 ng/dL (may run higher)
- TPO Antibodies: <500 IU/mL (trending down is success)
```

#### Post-Menopausal, No HRT

```yaml
Name: postmenopausal-no-hrt
Description: Post-menopausal women not on HRT

Adjusted Ranges:
- FSH: 25-135 mIU/mL (elevated is normal)
- Estradiol: <50 pg/mL (low is expected)
- LH: 15-60 mIU/mL (elevated is normal)
```

---

## Persona Promotion Workflow

When a patient override could benefit other similar patients:

```
┌─────────────────────────────────────────────────────────────────┐
│ PATIENT-LEVEL OVERRIDE                                          │
│ "For THIS patient, TSH optimal is 0.5-1.5 mIU/L"               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ (Clinician reviews & promotes)
┌─────────────────────────────────────────────────────────────────┐
│ PERSONA PROMOTION DIALOG                                        │
│ Target Scope: ● Persona  ○ Global                               │
│ Persona ID: hashimotos-treated                                  │
│ Reviewer: Dr. Smith                                              │
│ Rationale: Patients on thyroid med need tighter TSH             │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ PERSONA-LEVEL RANGE                                             │
│ All patients assigned to "hashimotos-treated" use this range   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Best Practices

{: .tip }
> Always verify context is up-to-date before interpreting results.

### Always Verify Context
- Confirm pregnancy status at each visit
- Update menstrual phase for hormone panels
- Review persona assignments periodically

### Document Context Changes
- Use pregnancy notes for complications
- Track cycle irregularities in cycle notes
- Note reason for persona assignment

---

## Next Steps

- [Deep dive into Explainability System →]({% link docs/explainability.md %})
- [Learn Range Override Workflow →]({% link docs/range-overrides.md %})
