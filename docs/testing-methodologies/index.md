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

Different laboratories offer different testing approaches. The platform tracks which laboratory methodology produced each result and applies the appropriate reference ranges.

| Methodology | Laboratory | Specimen | Primary Focus |
|:------------|:-----------|:---------|:--------------|
| [**DUTCH**](dutch-test.md) | Precision Analytical | Urine | Hormone metabolites |
| [**ZRT Serum**](zrt-serum.md) | ZRT Laboratory | Serum | Standard chemistry |
| [**NutrEval**](nutreval.md) | Genova Diagnostics | Urine + Blood | Nutritional status |

---

## How Methodology Affects Interpretation

The same hormone can be measured in different ways, and each method has different reference ranges.

**Example: Testosterone**

| Method | Specimen | Unit | Male Reference |
|:-------|:---------|:-----|:---------------|
| ZRT Serum | Serum | ng/dL | 400-1000 |
| DUTCH | Urine | ng/mg | 40-100 |

The platform tracks which methodology was used and applies the correct reference range automatically. This is managed through the **Range Framework** system.

---

## Range Framework

Each reference range in the platform is tagged with its source methodology:

- **DUTCH** — Ranges from Precision Analytical for urine metabolites
- **ZRT** — Ranges from ZRT Laboratory for serum panels
- **Genova** — Ranges from Genova Diagnostics
- **user_custom** — Ranges defined by your clinic

When your clinic receives a result, the platform:

1. Identifies the specimen type (urine, serum, etc.)
2. Identifies the laboratory source
3. Matches to the appropriate range framework
4. Applies the correct reference ranges

---

## The Documents

| Document | Focus |
|:---------|:------|
| [DUTCH Test](dutch-test.md) | Comprehensive hormone metabolite testing |
| [ZRT Serum Panels](zrt-serum.md) | Standard serum chemistry and hormones |
| [NutrEval](nutreval.md) | Comprehensive nutritional assessment |
| [Specimen Types](specimen-types.md) | Technical details on specimen handling |

---

## Key Concept

Different testing methodologies measure different things, even when they share analyte names.

A serum testosterone measures circulating hormone. A urine testosterone metabolite measures what the body produced and processed over time.

Neither is "better" — they answer different clinical questions. The platform keeps them separate and applies methodology-appropriate reference ranges.

