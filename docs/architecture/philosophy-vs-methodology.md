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

| Name | Philosophy |
|:-----|:-----------|
| **Optimal Wellness Functional** | Optimized ranges for general wellness |
| **Athletic Performance** | Calibrated for trained athletes |
| **Standard Reference Ranges** | Traditional laboratory intervals |
| **Reproductive Health** | Focused on fertility and cycle-specific ranges |
| **Conservative Clinical** | Conventional-aligned functional approach |

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

Each range definition within a Named Range Set has two key properties:

```
┌────────────────────────────────────────────────────────────────┐
│ Range Definition (within "Optimal Wellness Functional")        │
├────────────────────────────────────────────────────────────────┤
│ Analyte:        Estradiol (E2)                                 │
│ specimen_type:  urine          ← Methodology property          │
│ range_framework: DUTCH          ← Source/provenance property   │
│ Lower Bound:    0.5 ng/mg                                      │
│ Upper Bound:    2.5 ng/mg                                      │
│ Sex:            Female                                         │
│ Cycle Phase:    Luteal                                         │
└────────────────────────────────────────────────────────────────┘
```

### What This Enables

**One Named Range Set serves all methodologies:**

When your clinic selects "Optimal Wellness Functional", you automatically get:

| Methodology | Specimen Type | Example Analytes |
|:------------|:--------------|:-----------------|
| **Standard serum panels** | Serum | TSH, Free T4, metabolic markers |
| **DUTCH hormone testing** | Dried urine | Estrogen metabolites, cortisol patterns |
| **NutrEval nutritional** | Urine + blood | Organic acids, toxic elements |
| **Saliva panels** | Saliva | Cortisol awakening response |

You do NOT need to "also activate DUTCH" or "add NutrEval ranges" — they're already included.

---

## How Range Selection Works

When a lab result is processed:

### Step 1: Identify the Clinic's Named Range Set (Philosophy)

The system checks which Named Range Set your clinic has activated. This is your "worldview."

### Step 2: Filter by Specimen Type and Methodology

Within that Named Range Set, the system filters to ranges matching:
- The specimen type of the result (serum, urine, saliva, etc.)
- The laboratory/framework source if specified

### Step 3: Match Patient Demographics

Among the filtered ranges, the system selects the best match for:
- Sex
- Age
- Pregnancy status
- Menstrual cycle phase

### Step 4: Apply the Range

The most specific matching range definition is applied to classify the result.

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

**Key Point**: All these ranges live INSIDE the same Named Range Set. The clinic made ONE choice (philosophy), and all methodologies are included.

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

**Wrong.** If your clinic uses "Optimal Wellness Functional", you already have DUTCH ranges included. The system automatically applies them when it sees urine specimens with DUTCH framework markers.

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
> - Properties of individual range definitions
> - Automatically filtered when results are processed
> - Examples: DUTCH (urine), ZRT (serum), NutrEval (multi-specimen)

{: .highlight }
> **One selection gives you everything.**
> When you select a Named Range Set, you get ranges for all the testing methodologies your clinic uses — serum, urine, saliva, and more.

---

## Next Steps

- [How Named Range Sets Work →]({% link docs/how-named-range-sets-work.md %})
- [Testing Methodologies Overview →]({% link docs/testing-methodologies/index.md %})
- [Admin: Range Set Management →]({% link docs/guides/admin/range-set-management.md %})
