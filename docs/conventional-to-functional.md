---
title: Conventional to Functional
layout: default
nav_order: 4
---

# Conventional to Functional Range Logic
{: .no_toc }

The core concept of the HealthPlus platform—understanding the difference between conventional and functional ranges.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What Are Conventional Ranges?

**Conventional reference ranges** (also called "normal ranges" or "reference intervals") are statistical constructs derived from population sampling.

### How They're Determined
1. Blood samples collected from a "healthy" reference population
2. Results plotted on a distribution curve
3. The central 95% of values become the "normal range"
4. Values in the outer 2.5% on either end are flagged as abnormal

### The Problem

{: .warning }
The reference population often includes individuals with subclinical conditions, poor diets, sedentary lifestyles, and undiagnosed health issues.

**Result:** Conventional ranges are wide enough to include suboptimal health states.

---

## What Are Functional Ranges?

**Functional reference ranges** represent optimal physiological function, not merely the absence of disease.

### How They're Determined
1. Evidence from clinical research on optimal health outcomes
2. Studies correlating biomarker levels with disease risk
3. Practitioner experience with symptomatic patients
4. Population studies of genuinely healthy individuals

### The Advantage

{: .note }
Functional ranges identify imbalances before pathology develops, enabling preventive intervention.

Functional ranges:
- Identify imbalances before pathology develops
- Enable preventive intervention
- Align with patient symptoms when conventional labs are "normal"
- Support root-cause investigation

---

## Side-by-Side Comparison

### Example: TSH (Thyroid Stimulating Hormone)

| Range Type | Lower Bound | Upper Bound | Interpretation |
|:-----------|:------------|:------------|:---------------|
| Conventional | 0.5 mIU/L | 5.0 mIU/L | "Normal" = no thyroid disease |
| Functional | 0.5 mIU/L | 2.0 mIU/L | "Optimal" = full thyroid function |

{: .important }
> A TSH of 3.5 mIU/L is "normal" conventionally but flagged as **Functional High** in our system. This patient may have subclinical hypothyroidism with symptoms like fatigue, weight gain, and cold intolerance.

### Example: Ferritin (Iron Storage)

| Range Type | Lower | Upper | Context |
|:-----------|:------|:------|:--------|
| Conventional | 12 ng/mL | 150 ng/mL | Female |
| Functional | 50 ng/mL | 150 ng/mL | Female |
| Conventional | 12 ng/mL | 300 ng/mL | Male |
| Functional | 75 ng/mL | 150 ng/mL | Male |

{: .important }
> A ferritin of 25 ng/mL is "normal" conventionally but flagged as **Functional Low**—associated with hair loss, fatigue, and restless legs.

### Example: Vitamin D (25-OH)

| Range Type | Lower | Upper | Notes |
|:-----------|:------|:------|:------|
| Conventional | 30 ng/mL | 100 ng/mL | Sufficiency threshold |
| Functional | 50 ng/mL | 80 ng/mL | Optimal range |

---

## Interpreting Flags

The platform uses a color-coded flagging system:

| Flag | Meaning | Action |
|:-----|:--------|:-------|
| **Normal** | Within both ranges | No immediate concern |
| **Conv. Normal** | Within conventional, outside functional | Monitor, consider intervention |
| **Functional High** | Above functional upper bound | Investigate cause |
| **Functional Low** | Below functional lower bound | Investigate cause |
| **Conventional High** | Above conventional range | Immediate attention |
| **Conventional Low** | Below conventional range | Immediate attention |

---

## The Range Precedence System

Not all functional ranges are created equal. The platform applies ranges in order of specificity:

```
┌────────────────────────────────────────────────────────┐
│ 1. PATIENT-SPECIFIC OVERRIDE                           │ ← Highest Priority
│    Clinician created for this specific patient         │
├────────────────────────────────────────────────────────┤
│ 2. PERSONA-SPECIFIC RANGE                              │
│    Defined for a patient cohort/phenotype              │
├────────────────────────────────────────────────────────┤
│ 3. GLOBAL FUNCTIONAL RANGE                             │
│    Default functional range for all patients           │
├────────────────────────────────────────────────────────┤
│ 4. CONVENTIONAL RANGE                                  │ ← Fallback
│    Standard laboratory reference interval              │
└────────────────────────────────────────────────────────┘
```

---

## Context Modifiers

### Age Adjustments
| Age Group | TSH Upper Bound |
|:----------|:----------------|
| 18-50 | 2.0 mIU/L |
| 51-70 | 2.5 mIU/L |
| 71+ | 3.0 mIU/L |

### Sex Adjustments
- Ferritin ranges differ significantly by sex
- Hormone ranges are sex-specific
- Hemoglobin has sex-based thresholds

### Pregnancy Adjustments
- First trimester: Lower TSH threshold (0.1 - 2.5 mIU/L)
- All trimesters: Higher ferritin requirements
- Gestational-age specific ranges for many markers

---

## Why This Matters: Case Study

**Patient:** 42-year-old female
**Symptoms:** Fatigue, weight gain, brain fog, cold hands
**Conventional Labs:** All "normal"

| Test | Value | Conventional | Functional | Flag |
|:-----|:------|:-------------|:-----------|:-----|
| TSH | 3.8 mIU/L | 0.5-5.0 ✓ | 0.5-2.0 | **High** |
| Free T4 | 0.9 ng/dL | 0.7-1.8 ✓ | 1.0-1.5 | **Low** |
| Free T3 | 2.3 pg/mL | 2.0-4.4 ✓ | 3.0-4.0 | **Low** |

**Conventional Interpretation:** "Your thyroid is fine."

**Functional Interpretation:** Pattern suggests suboptimal thyroid conversion. TSH elevation with low-normal T4 and T3 indicates the pituitary is working harder to maintain hormone levels.

{: .tip }
> This pattern often precedes overt hypothyroidism by years. Early intervention can prevent progression.

---

## Next Steps

- [Learn about Patient Context & Personas →]({% link docs/patient-context.md %})
- [Understand the Explainability System →]({% link docs/explainability.md %})
