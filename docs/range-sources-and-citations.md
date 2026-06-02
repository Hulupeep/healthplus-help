---
title: Range Sources and Citations
layout: default
nav_order: 7
---

# Range Sources and Citations
{: .no_toc }

How to read where each displayed range came from, why it was applied, and what to do when a source is missing.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## The Three Things on a Lab Result Row

Each lab result row is made from three separate pieces of information:

| Item | What it means | Typical source |
|:-----|:--------------|:---------------|
| **Result value** | The patient's measured value | Uploaded lab report, manual entry, or lab integration |
| **Conventional range** | The laboratory reference interval for baseline comparison | Uploaded report interval, provider catalog such as Quest or Labcorp, or clinic conventional catalog |
| **Functional range** | The clinic's target range for functional interpretation | Active functional range set, patient override, or persona override |

{: .important }
Missing range data does not mean the patient result is normal. It means the result could not be classified against that range type.

---

## Conventional and Functional Are Separate

HealthPlus shows both conventional and functional information because they answer different questions.

| Range type | Question answered | How it is selected |
|:-----------|:------------------|:-------------------|
| **Conventional** | How would the lab or provider compare this value to its reference population? | Matched by analyte, unit, specimen, lab source, and patient demographics where available |
| **Functional** | How does this value compare to the clinic's functional target? | Matched from the active functional range set, then refined by patient or persona overrides |

A clinic activates one functional range set at a time. That activation does not activate conventional ranges. Conventional ranges are managed in the conventional reference range workflow.

---

## What the Source Labels Mean

| Label or state | Meaning | What to do |
|:---------------|:--------|:-----------|
| **Applied** | This range was used for the displayed classification. | Review the source, version, and citation before relying on the classification. |
| **Available** | This range matched the analyte but was not the selected range. | Use it for comparison or audit context. |
| **Source missing** | A range exists but the source, citation, or provenance is incomplete. | Treat the classification as usable but incomplete for audit until the source is curated. |
| **No reference range configured** | No conventional or functional range matched this result. | Curate a conventional range, functional range, or both before calling the result normal. |
| **No active range set selected** | The clinic has not selected an active functional range set. | Ask an administrator to activate a functional range set. |
| **Unit mismatch** | A range exists, but its unit cannot be safely compared to the result value. | Review the result unit and range unit before interpreting. |
| **Expert opinion** | The range is based on clinician or system expert review rather than a stronger citation. | Accept only with appropriate clinical judgment and documentation. |
| **Citation linked** | The range has supporting source material attached. | Open the citation when you need to verify the basis for the range. |

---

## Reading the Explain Dialog

Click **Explain** on a lab result row to open the explanation panel.

The panel should answer:

1. What result value was measured?
2. Which conventional range was found, if any?
3. Which functional range was found, if any?
4. Which range was applied for classification?
5. Why did that range win over other available ranges?
6. What source, citation, version, or note supports the range?
7. What gaps prevent a stronger conclusion?

The goal is not just to show the final label. The goal is to make the decision traceable.

---

## Example: Missing Range Coverage

If HSCRP shows `N/A` for both conventional and functional range:

- The result value was recorded.
- No matching conventional range was found.
- No matching functional range was found.
- The result should be listed as unclassified, not normal.
- The explanation should say that a range needs to be curated before classification is possible.

This is a curation gap, not a patient reassurance.

---

## Example: Borderline Functional Finding

If HDL is 49.5 mg/dL and the functional range starts at 50 mg/dL:

- The result is just below the functional lower boundary.
- The interpretation should describe it as borderline unless other rules make it more severe.
- The decision trace should show the distance from the boundary.
- The AI summary should not overstate it as a strong abnormality in isolation.

This is why range source and boundary distance are shown together.

---

## When You Need to Curate a Range

Curate the range when:

- A commonly ordered analyte has no conventional or functional range.
- The result value has units that do not match the configured range.
- A provider-specific report includes a reference interval that is not in the catalog.
- The source or citation is missing for a range used in clinical interpretation.

For conventional range maintenance, see [Conventional Reference Ranges]({% link docs/conventional-reference-ranges.md %}).

For functional range set selection, see [Named Range Sets]({% link docs/named-range-sets.md %}).

