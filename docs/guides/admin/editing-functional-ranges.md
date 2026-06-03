---
title: Editing Functional Ranges
layout: default
parent: Admin Guides
nav_order: 2
---

# Admin Guide: Editing Functional Ranges
{: .no_toc }

How to safely add, edit, and remove functional ranges without losing audit history.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What This Page Covers

This guide applies to **functional ranges** inside a functional Named Range Set.

Functional ranges are different from conventional lab reference intervals:

| Range type | Managed where | Purpose |
|:-----------|:--------------|:--------|
| **Functional range** | **Admin** -> **Functional Range Sets** | Clinic functional targets and functional status |
| **Conventional range** | **Admin** -> **Conventional Reference Ranges** | Lab/provider baseline comparison |

Use this page when you need to adjust the clinic's functional target range for an analyte.

---

## Drafts Can Be Changed. Published Sets Are Locked.

Functional range sets have lifecycle states.

| Status | What you can do |
|:-------|:----------------|
| **Draft** | Add, edit, or remove functional range members. |
| **Published** | View and activate only. Published members are locked. |
| **Active** | Used for functional interpretation. Active sets are published and locked. |

{: .important }
Published functional range sets are immutable. To change a published set, create or work from a draft version, then publish the new version after review.

---

## Editing Creates a New Version

When you edit a range member in a draft set, HealthPlus does **not** overwrite the old functional range row.

Instead, HealthPlus:

1. Keeps the existing range row for audit history.
2. Creates a new functional range row with the updated values.
3. Replaces the member in the draft range set.
4. Records the edit event with the reason you entered.

This is why the save message may say that the range was updated as a new immutable version.

---

## Adding a Functional Range

1. Open **Admin** -> **Functional Range Sets**.
2. Open the draft range set.
3. Click **View Ranges**.
4. Click **Add Range**.
5. Select the analyte.
6. Enter lower bound, upper bound, unit, sex filter, and age filter where applicable.
7. Enter a **Change Reason**.
8. Add a **Source Citation ID** or a short source note when available.
9. Save the range.

The change reason explains why this range belongs in the draft. It is stored in the audit trail.

---

## Editing a Functional Range

1. Open the draft range set.
2. Open the range row you want to change.
3. Update the bounds, unit, sex filter, age filter, source citation, or source note.
4. Enter a **Change Reason**.
5. Save.

After save, the page may navigate to a new range version. That is expected because the edit created a new immutable range member.

---

## Removing a Functional Range

1. Open the draft range set.
2. Open the range row you want to remove.
3. Click **Delete**.
4. Enter or confirm the audit reason.
5. Confirm removal.

Removing a member from a draft set does not delete the historical range row. It removes that member from the draft version and records an audit event.

---

## Required Audit Reasons

Add, edit, and remove actions require a reason.

Good reasons are specific:

| Weak reason | Better reason |
|:------------|:--------------|
| Updated | Adjusted HDL functional lower bound after clinical review of clinic wellness target. |
| Fix | Corrected unit from mg/L to mg/dL to match analyte preferred unit. |
| Delete | Removed duplicate female age-band ferritin member from draft set. |

Audit reasons should help another reviewer understand the change without asking the original editor.

---

## Validation Rules

HealthPlus validates functional ranges before saving.

| Rule | Meaning |
|:-----|:--------|
| Lower bound must be below upper bound | The range has to describe a usable interval. |
| Bounds must be non-negative | Negative values are rejected for range bounds. |
| Draft status required | Published range sets cannot be changed. |
| Member must belong to the draft set | Edits and removals only apply to members in the selected draft. |
| Functional member required | This workflow edits functional ranges, not conventional ranges. |

---

## What Users See Later

Once a functional set is published and activated, the lab result page can show:

- Functional range value.
- Functional source name and version.
- Citation or source state.
- Explain dialog trace showing why the functional range applied.

If the source is missing or incomplete, users should see that gap rather than a hidden or generic status.

---

## Related Topics

- [Functional Range Source Requirements →]({% link docs/guides/admin/functional-range-source-requirements.md %})
- [Range Set Management →]({% link docs/guides/admin/range-set-management.md %})
- [Range Sources and Citations →]({% link docs/range-sources-and-citations.md %})
- [Conventional Reference Ranges →]({% link docs/conventional-reference-ranges.md %})
