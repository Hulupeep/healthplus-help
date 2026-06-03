---
title: Conventional Reference Ranges
layout: default
nav_order: 8
---

# Conventional Reference Ranges
{: .no_toc }

How HealthPlus manages standard lab reference intervals from providers, uploaded reports, and clinic-maintained catalogs.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What Conventional Ranges Are

Conventional reference ranges are the intervals a laboratory uses to decide whether a result is inside or outside its expected population range.

They are different from functional ranges:

| Range type | Managed where | Used for |
|:-----------|:--------------|:---------|
| **Conventional reference range** | Conventional reference range admin workflow | Baseline lab comparison and conventional status |
| **Functional range** | Functional Range Sets catalog | Clinic functional targets and functional status |

{: .important }
The Functional Range Sets catalog does not replace the conventional reference range catalog. Both workflows are needed because a lab result can show both conventional and functional comparisons.

---

## Where Conventional Ranges Come From

HealthPlus can use conventional ranges from several places:

| Source | Example | When it applies |
|:-------|:--------|:----------------|
| **Uploaded lab report** | A PDF or CSV includes `0.2 - 1.2 mg/dL` beside bilirubin | The report provides a reference interval and the upload parser captures it |
| **Provider catalog** | Quest Diagnostics or Labcorp reference intervals | The lab source is known and a matching provider-specific range exists |
| **Clinic catalog** | A clinic-maintained conventional interval | The clinic has curated a conventional range for an analyte |
| **Manual entry** | A clinician enters a value and range | The result is entered outside an automated upload |

If more than one conventional range could apply, the system should prefer the most specific match for the result source and patient context.

---

## Matching Rules

Conventional ranges are matched using the information available on the result.

Common matching fields include:

- Analyte code and name
- Unit
- Specimen type
- Lab source or provider
- Biological sex, when the provider publishes sex-specific intervals
- Age band, when the provider publishes age-specific intervals
- Effective dates, when a provider updates its intervals over time

When any of these fields are missing, the app may still show a range, but the explanation should disclose what was missing.

---

## Editing Conventional Ranges

Administrators can use the conventional reference range page to search, review, and maintain conventional ranges.

Typical workflow:

1. Open **Admin** -> **Conventional Reference Ranges**.
2. Search by analyte name or code.
3. Filter by specimen type and lab source.
4. Review the lower bound, upper bound, unit, demographics, source, and citation.
5. Edit the range only when you have the provider source or clinical rationale.
6. Save with a reason so the change is auditable.

Published or provider-derived ranges should retain their source note. If a clinic changes a provider range for local use, that should be saved as a clinic-maintained range rather than silently overwriting the provider source.

---

## Uploading Provider Range Catalogs

A provider range catalog upload is useful when a clinic receives reports from a specific lab source such as Quest or Labcorp.

An upload should identify:

- Provider or lab source
- Analyte code or mapped analyte name
- Specimen type
- Unit
- Lower and upper bounds
- Demographic rules
- Effective date
- Source document or citation

After upload, review a sample set of common analytes to confirm that the provider ranges appear correctly on the lab results page.

---

## Uploaded Report Ranges

Many standard blood reports include reference ranges on the report itself.

When a report includes its own conventional interval, the app should preserve that interval for that specific result. That interval may also be offered as a candidate for provider catalog curation if the lab source is clear.

{: .note }
Replacing prior provider ranges should be a deliberate admin action. A single uploaded report should not silently overwrite a provider catalog without confirmation.

---

## What Users Should See on Lab Results

For each result, the Conventional Range column should show one of:

| Display | Meaning |
|:--------|:--------|
| A numeric range | A matching conventional range was found. |
| `N/A` or no configured range | No matching conventional range was found. |
| Unit mismatch message | A range exists but cannot be compared safely. |
| Source warning | A range exists but provenance is incomplete. |

Click **Explain** to see where the range came from and whether a source or citation is linked.

---

## Relationship to AI Interpretations

AI-assisted interpretations should not treat missing conventional ranges as normal.

If a conventional range is missing, the interpretation should:

- List the result under range coverage gaps.
- Avoid reassurance based on missing data.
- Recommend curation when the analyte is clinically relevant.
- Show confidence as limited when several important results cannot be classified.

For more detail, see [AI Decision Trace]({% link docs/ai-decision-trace.md %}).
