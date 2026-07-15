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

{: .warning }
> **Every numeric range on this page is an illustrative example, not a value HealthPlus ships or applies.** The platform only ever applies ranges that come from a **configured, sourced** reference set (a conventional catalog, an active functional Named Range Set, or a patient/persona override) — each with its own citation. The example bounds below (TSH, ferritin, vitamin D, thyroid panel, age/pregnancy modifiers) are teaching aids to explain the *concept*; they are not clinic defaults and must not be read as recommended thresholds. Always confirm the actual applied range and its source in the app's range explainability trail.

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

{: .note }
> The bounds in the tables below are **illustrative** — chosen to show how a functional range can be tighter than a conventional one. They are not values HealthPlus ships; the app shows the actual applied bounds and their citation per result.

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

## Where the Two Ranges Come From

Conventional and functional ranges are resolved separately.

| Column | Source | Purpose |
|:-------|:-------|:--------|
| **Conventional Range** | Uploaded report interval, provider catalog, or conventional reference range catalog | Shows how the result compares to standard lab reference intervals |
| **Functional Range** | Active functional Named Range Set, patient override, or persona override | Shows how the result compares to the clinic's functional target |

{: .important }
> Activating a functional Named Range Set does not activate conventional ranges. Conventional ranges are maintained in their own workflow so provider-specific intervals can remain visible and auditable.

---

## The Functional Range Precedence System

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
│    From clinic's selected Named Range Set              │
└────────────────────────────────────────────────────────┘
```

{: .note }
> The precedence chain above applies to functional ranges. Conventional ranges are shown beside functional ranges for comparison and are explained through their own source trail.

### What Happens When One Range Is Missing?

| Available data | What the result means |
|:---------------|:----------------------|
| Both conventional and functional ranges exist | The result can show both conventional and functional status. |
| Conventional exists, functional is missing | The result can show conventional status, but functional classification is unavailable. |
| Functional exists, conventional is missing | The result can show functional status, but conventional comparison is unavailable. |
| Neither range exists | The result is unclassified and should not be treated as normal. |

---

## Context Modifiers

A range's bounds can vary with patient context (age, sex, pregnancy, menstrual phase). HealthPlus's range model **supports** these dimensions, but a given result only ever has a context-specific range applied **when that stratification is actually configured in the sourced range set** for that analyte. Where a range set does not stratify a dimension, the same bounds apply across it.

{: .warning }
> **Important honesty note.** The example schedules below are *illustrative only*. HealthPlus does **not** ship a built-in age- or trimester-specific TSH schedule, and the currently seeded functional ranges are **not** yet stratified by age, pregnancy, or menstrual phase — they display Age = "All" with identical male/female values (tracked in app issue [`healthplus#38`](https://github.com/Hulupeep/healthplus/issues/38)). Do not treat any number here as a threshold the platform applies. The applied range and its source are always shown in the result's explainability trail.

### Age
Range sets *may* define different bounds for different age brackets (e.g. a tighter functional TSH ceiling in younger adults). Whether that stratification exists depends entirely on the configured, sourced range set — it is not a platform default.

### Sex
Range sets commonly differ by sex where clinically appropriate (ferritin, sex hormones, hemoglobin). Again, the specific values come from the sourced set, not from HealthPlus.

### Pregnancy & menstrual phase
The model can carry pregnancy- and menstrual-phase-specific ranges (e.g. trimester-adjusted thresholds), but these apply only when a sourced range set provides them for the analyte. HealthPlus invents no trimester or cycle-phase values of its own.

---

## Why This Matters: Case Study

**Patient:** 42-year-old female
**Symptoms:** Fatigue, weight gain, brain fog, cold hands
**Conventional Labs:** All "normal"

{: .note }
> Illustrative scenario. The values below are teaching examples, not applied clinic ranges.

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
- [Review Range Sources and Citations →]({% link docs/range-sources-and-citations.md %})
- [Manage Conventional Reference Ranges →]({% link docs/conventional-reference-ranges.md %})
- [Understand the Explainability System →]({% link docs/explainability.md %})
