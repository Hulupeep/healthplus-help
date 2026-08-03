---
title: Philosophy vs Methodology
layout: default
parent: Platform Architecture
nav_order: 1
---

# Clinical Philosophy vs Testing Methodology
{: .no_toc }

Understanding the fundamental distinction between Named Range Sets (clinical philosophy) and testing methodologies (specimen types).
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The Core Distinction

The platform separates two distinct concepts that are often confused:

| Concept | What It Represents | Examples |
|:--------|:-------------------|:---------|
| **Named Range Set** | Clinical philosophy / worldview | Optimal Wellness, Athletic Performance, Standard Reference |
| **Testing Methodology** | Specimen type and laboratory procedure | DUTCH (dried urine), ZRT (serum), NutrEval (urine + blood) |

{: .important }
> **Key Insight**: A single Named Range Set contains ranges for ALL testing methodologies. DUTCH, NutrEval, and ZRT are NOT separate Named Range Sets — they are properties of individual range definitions WITHIN a Named Range Set.

---

## Named Range Sets: The "Worldview"

A Named Range Set represents your clinic's interpretive framework — how you define "optimal" for your patient population.

### What a Named Range Set IS

- A complete reference library covering hundreds of analytes
- A clinical philosophy (functional medicine, athletic optimization, conventional care)
- A choice your clinic makes at setup that applies to all patients
- A container that holds ranges for ALL specimen types and methodologies

### What a Named Range Set is NOT

- A testing methodology (like DUTCH or NutrEval)
- A specimen type (like serum or urine)
- A laboratory (like ZRT or Genova)

### Valid Named Range Set Names

These are examples of names that correctly express a *philosophy* rather than a methodology. They illustrate valid naming — they are **not** a menu of installable range sets.

| Name | Philosophy |
|:-----|:-----------|
| **Optimal Wellness Functional** | Optimized ranges for general wellness |
| **Athletic Performance** | Calibrated for trained athletes |
| **Standard Reference Ranges** | Traditional laboratory intervals |
| **Reproductive Health** | Focused on fertility and cycle-specific ranges |
| **Conservative Clinical** | Conventional-aligned functional approach |

{: .note }
> **What actually ships today:** one seeded functional set — **"Optimal Wellness Functional"** — alongside the conventional reference catalog. The other names above are *illustrative philosophy names* (the app cites "Athletic Performance" only as an example in its name-validation copy), not additional sets you can select. Creating them is an authoring task, not a built-in option.

### Invalid Named Range Set Names

These would violate the architecture because they conflate methodology with philosophy:

| Invalid Name | Why It's Wrong |
|:-------------|:---------------|
| ~~DUTCH Functional Ranges~~ | DUTCH is a methodology, not a philosophy |
| ~~NutrEval Ranges~~ | NutrEval is a testing methodology |
| ~~ZRT Serum Panel~~ | ZRT is a laboratory/methodology |
| ~~Urine Hormone Ranges~~ | Urine is a specimen type |

---

## Testing Methodologies: Properties of Range Definitions

Testing methodologies describe HOW a test was performed, not WHAT optimal means.

### How Methodologies Are Represented

Each range definition within a Named Range Set carries descriptive properties. `specimen_type` and `range_framework` are **stored, descriptive** fields — they record how the test was performed and where the range came from. They are *not* keys the platform uses to select which range to apply (selection is by demographics — see below).

```
┌────────────────────────────────────────────────────────────────┐
│ Range Definition (within "Optimal Wellness Functional")        │
├────────────────────────────────────────────────────────────────┤
│ Analyte:        Estradiol (E2)                                 │
│ specimen_type:  urine          ← descriptive (how tested)      │
│ range_framework: DUTCH          ← descriptive (source/origin)  │
│ Lower Bound:    0.5 ng/mg      ← illustrative values only      │
│ Upper Bound:    2.5 ng/mg      ← illustrative values only      │
│ Sex:            Female         ← matching dimension            │
│ Cycle Phase:    Luteal         ← matching dimension            │
└────────────────────────────────────────────────────────────────┘
```

{: .note }
> Numeric bounds shown here and below are **illustrative placeholders**, not authoritative reference values. HealthPlus only applies the configured, sourced ranges present in your active range set.

### What This Enables

**One Named Range Set can hold ranges for any methodology:**

The data model lets a single Named Range Set contain range definitions spanning every specimen type and framework — so a clinic makes ONE philosophy choice rather than juggling a separate set per methodology:

| Methodology | Specimen Type | Example Analytes |
|:------------|:--------------|:-----------------|
| **Standard serum panels** | Serum | TSH, Free T4, metabolic markers |
| **DUTCH hormone testing** | Dried urine | Estrogen metabolites, cortisol patterns |
| **NutrEval nutritional** | Urine + blood | Organic acids, toxic elements |
| **Saliva panels** | Saliva | Cortisol awakening response |

You never "also activate DUTCH" as a separate set — any DUTCH-sourced ranges live inside your chosen set.

{: .note }
> **What ships vs. what the model supports.** The multi-methodology coverage above describes what a fully authored set *can* contain. The seeded "Optimal Wellness Functional" set ships general adult functional ranges (unstratified, adult 18–100 — see healthplus#38); comprehensive DUTCH / NutrEval / saliva coverage is an authoring task, not pre-populated content. Don't assume every methodology already has ranges present just because the set can hold them.

---

## How Range Selection Works

When a lab result is processed:

### Step 1: Identify the Clinic's Active Named Range Set (Philosophy)

The system checks which Named Range Set your clinic has activated. This is your "worldview," and it scopes which range definitions are candidates.

### Step 2: Match Patient Demographics

Among the candidate ranges for the analyte, the platform selects the best match on **demographics only**, in this specificity order (`RangeMatchingService.sortBySpecificity`):

1. Menstrual cycle phase
2. Pregnancy status (a boolean requirement)
3. Age (min / max bounds)
4. Sex

The most specific range whose demographic requirements the patient satisfies wins.

### Step 3: Apply the Range

The winning range definition is applied to classify the result.

{: .important }
> **Specimen type and range framework do NOT route selection.** They are stored, descriptive properties (recording how a test was performed and where its range originated) — not matching keys. The matcher never branches on `specimen_type` or `range_framework`; it ranks candidates purely by the demographic dimensions above. (Those fields *do* power display filters in the admin UI — see the next section — which is a viewing convenience, not the selection mechanism.)

---

## Visual: How One Named Range Set Contains All Methodologies

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     NAMED RANGE SET                                      │
│                  "Optimal Wellness Functional"                           │
│                     (Clinical Philosophy)                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────────────┐   ┌──────────────────────┐                    │
│  │   SERUM RANGES       │   │   URINE RANGES       │                    │
│  │   (ZRT framework)    │   │   (DUTCH framework)  │                    │
│  ├──────────────────────┤   ├──────────────────────┤                    │
│  │ TSH: 1.0-2.5 mIU/L   │   │ E2: 0.5-2.5 ng/mg   │                    │
│  │ Free T4: 1.0-1.5     │   │ 2-OH-E1: 2.0-8.0    │                    │
│  │ Estradiol: 50-200    │   │ Cortisol: varies    │                    │
│  │ Testosterone: varies │   │ Testosterone: 40-100│                    │
│  └──────────────────────┘   └──────────────────────┘                    │
│                                                                         │
│  ┌──────────────────────┐   ┌──────────────────────┐                    │
│  │   SALIVA RANGES      │   │   ORGANIC ACIDS     │                    │
│  │   (ZRT framework)    │   │   (NutrEval/Genova) │                    │
│  ├──────────────────────┤   ├──────────────────────┤                    │
│  │ Cortisol AM: 3-8     │   │ MMA: 0.0-1.9        │                    │
│  │ Cortisol PM: 0.5-2   │   │ Methylmalonic acid  │                    │
│  │ DHEA: varies         │   │ Citric acid cycle   │                    │
│  └──────────────────────┘   └──────────────────────┘                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Key Point**: When ranges for these methodologies exist, they live INSIDE the same Named Range Set — the clinic made ONE philosophy choice rather than one per methodology. (The numeric bounds above are illustrative placeholders, and which methodologies are actually populated depends on how the set was authored — the seeded set is not comprehensive across all specimen types.)

---

## Filtering Ranges by Methodology in the UI

When viewing ranges within a Named Range Set, you can filter by:

### By Specimen Type
- Show only serum ranges
- Show only urine ranges
- Show only saliva ranges

### By Range Framework
- Show only DUTCH-sourced ranges
- Show only ZRT-sourced ranges
- Show only custom clinic ranges

This filtering helps you focus on specific methodologies while understanding that they all belong to the same philosophical framework.

---

## Why This Architecture Matters

### Consistency Across Methodologies

When a clinic chooses "Optimal Wellness", they get optimized ranges for ALL their testing — not just serum panels. Their DUTCH results, their NutrEval results, and their standard blood work all use the same clinical philosophy.

### Simplified Administration

Clinic administrators make ONE selection (the Named Range Set), not multiple selections for each testing methodology. This reduces configuration complexity and ensures consistency.

### Clear Auditability

Every result is tied to:
1. Which Named Range Set was active (the philosophy)
2. Which specific range definition was applied (filtered by specimen type and demographics)

### Proper Separation of Concerns

- **Philosophy** (Named Range Set) answers: "What does optimal mean for our patients?"
- **Methodology** (specimen_type, range_framework) answers: "How was this test performed?"

These are different questions with different answers.

---

## Common Misconceptions

### "We need to activate DUTCH separately"

**Wrong.** DUTCH is not a separate set to activate — any DUTCH-sourced ranges are just definitions inside your chosen set (assuming they've been authored into it). When a result is processed, the platform picks the matching range for that analyte by patient demographics; it does not route on the DUTCH framework tag or the specimen type.

### "DUTCH Functional Ranges is a Named Range Set"

**Wrong.** DUTCH is a testing methodology. The correct model is:
- Named Range Set: "Optimal Wellness Functional"
- Ranges within that set tagged with: `specimen_type: urine`, `range_framework: DUTCH`

### "Different labs need different Named Range Sets"

**Wrong.** Different labs produce different specimen types, which map to different range definitions WITHIN your chosen Named Range Set. You don't need to change your clinical philosophy because a patient had blood drawn at LabCorp vs Quest.

---

## Summary

{: .highlight }
> **Named Range Set** = Clinical philosophy / worldview
> - Chosen by the clinic
> - Contains ranges for ALL specimen types and methodologies
> - Examples: Optimal Wellness, Athletic Performance, Standard Reference

{: .highlight }
> **Testing Methodology** = Specimen type + laboratory procedure
> - Stored, descriptive properties of individual range definitions
> - Do **not** route range selection (demographics do); they power admin display filters
> - Examples: DUTCH (urine), ZRT (serum), NutrEval (multi-specimen)

{: .highlight }
> **One selection sets your philosophy.**
> Selecting a Named Range Set fixes the interpretive framework for every result. Its ranges span whatever specimen types and methodologies have been authored into it — the seeded set ships general adult functional ranges, and broader per-methodology coverage is added by authoring, not automatically populated.

---

## Next Steps

- [How Named Range Sets Work →]({% link docs/how-named-range-sets-work.md %})
- [Testing Methodologies Overview →]({% link docs/testing-methodologies/index.md %})
- [Admin: Range Set Management →]({% link docs/guides/admin/range-set-management.md %})
