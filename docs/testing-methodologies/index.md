---
title: Testing Methodologies
layout: default
nav_order: 4
has_children: true
---

# Testing Methodologies
{: .no_toc }

How the platform manages different laboratory tests, specimen types, and testing methodologies.
{: .fs-6 .fw-300 }

---

## Overview

The platform supports multiple testing methodologies from different laboratories. Each methodology has its own specimen requirements, analyte panels, and reference ranges.

This flexibility allows your clinic to use the testing approaches that best fit your practice philosophy — whether that means comprehensive urine hormone metabolite testing, standard serum panels, or organic acid profiles.

---

## Supported Specimen Types

The platform handles all major clinical specimen types:

| Specimen | Common Uses | Example Tests |
|:---------|:------------|:--------------|
| **Serum** | Most chemistry panels | Thyroid, metabolic, lipids |
| **Whole Blood** | CBC, some hormone tests | Dried blood spot panels |
| **Plasma** | Coagulation, some hormones | Specialty panels |
| **Urine** | Hormone metabolites, organic acids | DUTCH, NutrEval organic acids |
| **Saliva** | Cortisol, some hormones | Cortisol awakening response |
| **Stool** | GI health, microbiome | Comprehensive stool analysis |

---

## Testing Methodologies

Different laboratories offer different testing approaches. The platform records which laboratory methodology produced each result and keeps that methodology as provenance on the range definitions it stores.

| Methodology | Laboratory | Specimen | Primary Focus |
|:------------|:-----------|:---------|:--------------|
| [**DUTCH**](dutch-test) | Precision Analytical | Urine | Hormone metabolites |
| [**ZRT Serum**](zrt-serum) | ZRT Laboratory | Serum | Standard chemistry |
| [**NutrEval**](nutreval) | Genova Diagnostics | Urine + Blood | Nutritional status |

---

## How Methodology Affects Interpretation

The same hormone can be measured in different ways, and each method has different reference ranges.

**Example: Testosterone** *(illustrative only — the platform applies only the configured, sourced ranges in your active Named Range Set, not the values shown here)*

| Method | Specimen | Unit | Male Reference (illustrative) |
|:-------|:---------|:-----|:------------------------------|
| ZRT Serum | Serum | ng/dL | 400–1000 |
| DUTCH | Urine | ng/mg | 40–100 |

Each range definition records the methodology it came from, and the platform keeps serum and urine measurements of the same analyte separate so a result is never compared against a specimen-inappropriate reference. Which stored range *applies* to a given result, however, is decided by the patient's **demographics** — sex, age, pregnancy, and menstrual phase — matched against the ranges in your active Named Range Set. The methodology tag is descriptive provenance; it does not by itself select the range. See [Range Framework](#range-framework) below for what that tag does and does not do.

---

## Range Framework

`range_framework` is a **stored, descriptive tag** on each range definition that records where the range came from:

- **DUTCH** — Ranges attributed to Precision Analytical for urine metabolites
- **ZRT** — Ranges attributed to ZRT Laboratory for serum panels
- **Genova** — Ranges attributed to Genova Diagnostics
- **user_custom** — Ranges defined by your clinic

This tag is provenance metadata, used for display and record-keeping. It is **not** a selection key — the platform does not route range selection by framework or by specimen type.

When your clinic views a result, the platform:

1. Takes the ranges in your clinic's **active Named Range Set**
2. Keeps only those whose demographics match the patient (sex, age, pregnancy, menstrual phase)
3. Picks the most specific match
4. Applies it, and shows the range's methodology and source as provenance

{: .note }
> `range_framework` (like `specimen_type`) is a real stored field on a range definition, but it is descriptive — it is not one of the dimensions the platform matches on. Range *selection* is demographic.

---

## The Documents

| Document | Focus |
|:---------|:------|
| [DUTCH Test](dutch-test) | Comprehensive hormone metabolite testing |
| [ZRT Serum Panels](zrt-serum) | Standard serum chemistry and hormones |
| [NutrEval](nutreval) | Comprehensive nutritional assessment |
| [Specimen Types](specimen-types) | Technical details on specimen handling |

---

## Key Concept

Different testing methodologies measure different things, even when they share analyte names.

A serum testosterone measures circulating hormone. A urine testosterone metabolite measures what the body produced and processed over time.

Neither is "better" — they answer different clinical questions. The platform keeps them separate so a urine metabolite result is never compared against a serum range, and records each range's methodology as provenance.

---

## Relationship to Named Range Sets

{: .important }
> **Testing methodologies are NOT separate Named Range Sets.**
>
> DUTCH, NutrEval, and ZRT are properties of individual range definitions that live INSIDE your clinic's selected Named Range Set.

A Named Range Set (like "Optimal Wellness Functional") is a single collection of range definitions that can span methodologies and specimen types. You do not "activate" DUTCH, NutrEval, or ZRT separately — whatever ranges your set contains are simply the ranges it contains, across:

- Serum ranges for standard blood panels
- Urine ranges for DUTCH hormone metabolites
- Multi-specimen ranges for NutrEval assessments
- Saliva ranges for cortisol panels

What a set actually covers depends on what has been authored into it. The seeded starter ranges are unstratified adult ranges (roughly ages 18–100) and do not yet include vendor- or specimen-specific variants for every methodology above — those are authoring-supported but not pre-populated. Treat the list above as what a Named Range Set *can* hold once authored, not a guarantee of what ships seeded.

For more detail on this distinction, see [Philosophy vs Methodology →]({% link docs/architecture/philosophy-vs-methodology.md %})

