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

### Unlocking a Published Set: Create Editable Version

When you open the ranges for a **published** or **active** set, the page is read-only: rows show a **View** action (not **Edit**), and there is **no Add Range button**. To make changes you first click **Create Editable Version** at the top of the ranges page.

Clicking **Create Editable Version** creates (or resumes) a draft version and takes you to that draft's ranges page. Only there do the **Add Range** button and the per-row **Edit** action appear. A blue banner confirms *"This editable version is a draft and is not active for interpretation."*

{: .note }
This is the step to remember when a published set's rows look uneditable — you are not stuck, you just need to create the editable draft version first.

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
2. Click **View Ranges** on the set you want to change.
3. If the set is **published or active**, click **Create Editable Version** first — this creates or resumes a draft and opens its ranges page. (If you are already on a **draft** version, skip this step.)
4. Click **Add Range**. (This button only appears on a draft version.)
5. Select the analyte.
6. Enter lower bound, upper bound, unit, sex filter, and age filter where applicable.
7. Enter a **Change Reason**.
8. Add a **Source Citation ID** or a short source note when available.
9. Save the range.

The change reason explains why this range belongs in the draft. It is stored in the audit trail.

---

## Editing a Functional Range

1. Open the range set and click **View Ranges**. If it is published or active, click **Create Editable Version** first (see above) so the rows become editable.
2. On the draft version, click **Edit** on the range row you want to change. (Published rows show **View** only and cannot be edited.)
3. Update the bounds, unit, sex filter, age filter, source citation, or source note.
4. Enter a **Change Reason**.
5. Save.

After save, the page may navigate to a new range version. That is expected because the edit created a new immutable range member.

---

## Removing a Functional Range

1. On the draft version, open the range row you want to remove. (Removal is only available on a draft — create an editable version first if needed.)
2. Open the **Delete Range** section.
3. Enter an **Audit Reason**.
4. Type `DELETE` to confirm, then click **Delete**.

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
