---
title: Functional Range Source Requirements
layout: default
parent: Admin Guides
nav_order: 3
---

# Admin Guide: Functional Range Source Requirements
{: .no_toc }

What source or citation information is required before a functional range set can be published.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Why Sources Are Required

HealthPlus is designed so clinicians can trace a displayed functional range back to its basis.

A numeric range without source context can still display in a draft, but it should not be published for clinical use until reviewers can see where it came from or why the clinic accepts it.

{: .important }
Publishing a functional range set is blocked when member ranges do not have acceptable source support.

---

## What Counts as Source Support

For each functional range member, HealthPlus accepts any one of these source supports:

| Accepted support | What it means |
|:-----------------|:--------------|
| **Range version citation** | The resolved range version has a linked citation. |
| **Functional range citation** | The underlying functional range has a linked source citation. |
| **Clinic protocol note** | An active clinic protocol note documents the clinic rationale for this range. |

The goal is not only to store a number. The goal is to leave enough provenance for a later reviewer to understand why that number is in the set.

---

## What Does Not Count

These are not enough by themselves:

| Not enough | Why |
|:-----------|:----|
| A range value only | A reviewer can see the boundary but not the basis. |
| A vague note such as "expert" | It does not identify the source or clinic rationale. |
| A conventional lab interval | Conventional ranges are a separate workflow and do not automatically justify a functional target. |
| An uploaded patient result | The result value is evidence of the patient's measurement, not evidence for a functional target. |

---

## Publishing Behavior

When an administrator tries to publish a draft functional range set, HealthPlus checks each member.

If all members have acceptable source support:

- The set can be published.
- The set becomes available for activation.
- Published members become locked.

If one or more members are missing source support:

- Publishing is rejected.
- HealthPlus lists the affected member analytes.
- The draft remains editable.
- Administrators should add a citation or clinic protocol note before retrying.

---

## Reading Source States on Lab Results

After a range set is active, each lab result row shows a functional range badge, and the same state is mirrored in the Explain dialog. The text below is exactly what the app renders: both the Lab Results table and the Explain dialog read the same presentation logic, so the badge and the Explain view never disagree.

| Shown as | Meaning | Curation action |
|:---------|:--------|:----------------|
| **Applied** / **Available** | The functional range is resolved and has a linked citation. `Applied` = used for this result's status; `Available` = resolved but not the comparison currently applied. | None — fully sourced. |
| **Applied - citation needed** / **Available - citation needed** | The range has provenance (an active range set or a citation record) but the underlying citation still needs curation. | Add citation. |
| **Applied - source needed** / **Available - source needed** | The range is shown but has no identifiable provenance yet. | Add source. |
| **Available - not active** (status *Not in active set*) | A functional range exists for this analyte but is not a member of the active set. | Review active set. |
| **Blocked - no active set** (status *No active set*) | No functional range set is active for the clinic. | Activate a range set. |
| **Blocked - unit mismatch** | The result unit cannot be compared to the range's unit. | Review units. |
| **Missing** (status *No range*) | No functional range is configured for this result context. | Add functional range. |

{: .note }
`Not in active set` and `No active set` are **functional-only** states — they describe range-set membership and never appear for a conventional reference range. Conventional rows carry their own separate source states.

Anything other than a plain `Applied` / `Available` should be handled as a curation task, not as a normal result. Note that "citation needed" and "source needed" are distinct: *source needed* means no provenance is known yet, while *citation needed* means provenance exists (an applied range set) but its underlying citation is still uncurated.

---

## Recommended Source Notes

Use clear source notes that identify where the range came from or why the clinic accepts it.

Examples:

- `Clinic protocol: optimal wellness CMP review, approved 2026-06-01.`
- `Cited from internal thyroid range protocol v2.1.`
- `Proxied from conventional catalog seed pending provider-specific functional citation.`

Avoid notes that cannot be audited later:

- `Looks right`
- `Old value`
- `Functional`

---

## Relationship to Conventional Ranges

Functional source requirements do not replace conventional range management.

| Workflow | Source expectation |
|:---------|:-------------------|
| **Functional range set** | Citation or clinic protocol explaining the functional target. |
| **Conventional reference range** | Lab report interval, provider catalog, or clinic conventional source. |

A lab result can have a sourced conventional range and no functional range, or a sourced functional range and no conventional range. The Explain dialog should show both states separately.

---

## Admin Checklist Before Publishing

Before publishing a functional range set:

1. Review common analytes for missing functional coverage.
2. Confirm units match the analyte and expected lab result units.
3. Check sex and age filters for accidental duplicates or gaps.
4. Add citations or clinic protocol notes for each member.
5. Confirm change reasons are meaningful.
6. Publish only after the set is ready for clinical use.

---

## Related Topics

- [Editing Functional Ranges →]({% link docs/guides/admin/editing-functional-ranges.md %})
- [Named Range Sets →]({% link docs/named-range-sets.md %})
- [Range Sources and Citations →]({% link docs/range-sources-and-citations.md %})
- [Explainability System →]({% link docs/explainability.md %})
