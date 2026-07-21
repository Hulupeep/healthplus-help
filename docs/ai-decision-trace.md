---
title: AI Decision Trace
layout: default
nav_order: 10
---

# AI Decision Trace
{: .no_toc }

How AI-assisted interpretations explain their inputs, classifications, limits, and guardrails.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What the Decision Trace Is

The decision trace is the audit-friendly explanation behind an AI-assisted interpretation.

It records:

- Which results were included.
- Which symptoms were active.
- Which conventional and functional ranges were available.
- Which results were normal, borderline, abnormal, or unclassified.
- Which source or citation supported each range.
- Which guardrails shaped the wording.

The AI summary should be readable, but the decision trace should be inspectable.

---

## Classification Before Narrative

HealthPlus classifies results before asking AI to write a narrative.

This prevents the AI from guessing range status from raw values alone.

The pre-classification step should identify:

| Classification | Meaning |
|:---------------|:--------|
| **Normal** | The result is inside the applied range. |
| **Borderline low or high** | The result is outside the boundary but close enough that it should not be overstated. |
| **Clear abnormal low or high** | The result is meaningfully outside the applied range. HealthPlus grades how far out the value sits, from a plain low/high through marked to critical. |
| **Unknown range** | No matching range was configured. |
| **Unit mismatch** | A range exists, but the units cannot be safely compared. |
| **Data conflict** | The available data or sources disagree, so the result cannot be trusted as classified. |

`Unknown range`, `Unit mismatch`, and `Data conflict` are the three reasons a result is treated as **unclassified** — it is never counted as normal.

---

## Symptoms Are Context, Not Range Rules

Symptoms should appear in the interpretation when they are recorded for the patient.

Symptoms can:

- Guide which patterns the clinician reviews first.
- Provide context for why a finding may matter.
- Limit or strengthen clinical relevance.

Symptoms should not:

- Change the numeric range boundaries.
- Make a normal result abnormal.
- Replace missing range curation.

---

## Borderline Results

Borderline results need careful wording.

Example:

```
HDL cholesterol: 49.5 mg/dL
Functional lower boundary: 50 mg/dL
Distance from boundary: 0.5 mg/dL, about 1%
```

The interpretation should describe this as **borderline below functional target**, not as a strong abnormality in isolation.

The decision trace should show:

- The applied range.
- The source or version of that range.
- The distance from the boundary.
- The guardrail that prevents overstating the finding.

---

## Unclassified Results

Unclassified results are results that cannot be fully compared for one of three reasons:

- **No matching range was configured** (unknown range).
- **A range exists, but the units cannot be safely compared** (unit mismatch).
- **The available data or sources disagree** (data conflict).

They should be handled explicitly:

- Do not count them as normal.
- List them under range coverage gaps, grouped by reason — missing configured ranges, unit mappings needed, and data conflicts.
- Explain why they are unclassified.
- Recommend curation when clinically relevant.

This matters because a report can otherwise look falsely reassuring.

---

## What Good Output Looks Like

A strong AI interpretation should include:

1. A clinical summary with counts for clear abnormal, borderline, normal, and unclassified results.
2. Active symptom context when symptoms are available.
3. Key findings with values, ranges, and boundary distance.
4. Range coverage gaps.
5. Decision trace entries for important or unresolved markers.
6. Confidence language when coverage is limited.
7. Recommendations that reflect the classification strength.

---

## Guardrail Examples

| Situation | Guardrail |
|:----------|:----------|
| HDL is 0.5 mg/dL below the functional target | Say borderline; do not imply a major abnormality in isolation. |
| HSCRP has no configured range | Say unclassified; do not count as normal. |
| A marker's sources disagree on the value or range | Say unclassified due to a data conflict; do not classify it as normal. |
| Several lipid markers have no matching range | Lower interpretation confidence and recommend range curation. |
| Symptoms are present but related markers are unclassified | State that symptom-linked interpretation is limited. |

---

## Clinician Review

AI-assisted interpretations are drafts.

Before using one clinically:

1. Review the decision trace.
2. Confirm that symptoms and patient context are current.
3. Check source and citation status for important ranges.
4. Resolve material range gaps before treating the output as comprehensive.
5. Edit and attribute the final interpretation.

For range provenance, see [Range Sources and Citations]({% link docs/range-sources-and-citations.md %}).

