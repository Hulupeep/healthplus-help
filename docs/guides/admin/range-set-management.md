---
title: Range Set Management
layout: default
parent: Step-by-Step Guides
nav_order: 1
---

# Admin Guide: Range Set Management
{: .no_toc }

Complete guide for administrators managing Named Range Sets in HealthPlus.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

As an administrator, you can manage functional range sets:
- View and compare available range sets
- Select the active range set for your clinic
- Browse individual ranges within a set
- Create draft range sets (with appropriate permissions)
- Manage the range set lifecycle

{: .important }
Range Set Management controls functional ranges. Conventional lab/provider reference intervals are managed separately in [Conventional Reference Ranges]({% link docs/conventional-reference-ranges.md %}).

---

## Accessing Range Set Administration

1. Navigate to **Admin** in the main menu
2. Open **Functional Range Sets**
3. You'll see the Functional Range Sets catalog

The catalog header carries three actions: **History** (selection history), **Import**, and **Create Custom**. A **Source** filter lets you narrow the grid to Built-in, Vendor, Custom, or Imported sets.

---

## The Range Sets Catalog

The catalog displays all available range sets as cards. It is read live from the
range-set catalog, so the names and versions shown match the current active
data. The built-in functional set is **Optimal Wellness Functional**;
clinic-created sets appear alongside it as additional cards. (Conventional
reference-range catalogs are filtered out here and managed separately.)

{: .note }
Names and versions below reflect the current catalog. Range counts are
illustrative — the real count is shown per card in the app.

```
┌─────────────────────────────────────────────────────────────────┐
│ FUNCTIONAL RANGE SETS                     [History][Import][Create Custom]
│ Choose the functional range set used for functional interpretation
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ ┌──────────────────────────────────────────────────────────────┐│
│ │ Optimal Wellness Functional                     [✓ Active]   ││
│ │ Optimized functional ranges for general wellness assessment  ││
│ │ 1.0.1   Built-in   (n) ranges   (n) refs   published         ││
│ │                                                              ││
│ │ [View Ranges] [Preview] [Export] [Create Editable Version]  ││
│ └──────────────────────────────────────────────────────────────┘│
│                                                                  │
│ ┌──────────────────────────────────────────────────────────────┐│
│ │ Clinic Custom Ranges (example)                               ││
│ │ Example clinic-created draft set                             ││
│ │ 0.1     Custom     (n) ranges   (n) refs   draft             ││
│ │                                                              ││
│ │ [View Ranges] [Preview] [Export] [Edit Draft]               ││
│ └──────────────────────────────────────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Catalog Card Information

Each card shows a set of badges plus action buttons:

| Field | Description |
|:------|:------------|
| **Name** | The range set's display name |
| **Version** | Current version badge |
| **Source** | One of **Built-in**, **Vendor**, **Custom**, **Imported**, or **Shared** |
| **Ranges** | Number of ranges in the set (`N ranges` badge) |
| **Refs** | Number of source references (`N refs` badge) |
| **Status** | `draft`, `published`, or `deprecated` badge |
| **Active** | A green **Active** badge marks the set currently used for interpretation |

The card buttons depend on status:

- **Published** set: **View Ranges**, **Preview**, **Export**, **Activate** (when not already active), and **Create Editable Version**.
- **Draft** set: **View Ranges**, **Preview**, **Export**, and **Edit Draft**.

Conventional reference range catalogs are managed separately and should not be activated as functional range sets.

---

## Viewing a Range Set

There is no separate "details" screen. From a card you have three ways to look
into a set:

- **View Ranges** — opens the set's ranges page (the header shows the set name, version badge, status badge, range count, and — for drafts — a pending-changes count).
- **Preview** — opens a modal with the set's member count, reference count, and a sample of ranges (Analyte / Range / Unit / Sex). The modal also offers **Activate This Set**.
- **Export** — downloads the set (JSON).

For the clinic's activation record, use the catalog's top-level **History**
button — see [Version History and Selection History](#version-history-and-selection-history).

{: .note }
The bounds, units, and page counts in the illustrations below are examples for
layout only — the real values are shown per set in the app.

---

## Browsing Individual Ranges

### From the Catalog

1. Click **View Ranges** on any range set
2. Browse the searchable, paginated list (search by analyte code or name)

### Range List View

```
┌─────────────────────────────────────────────────────────────────┐
│ ← Optimal Wellness Functional   1.0.1  published   [n] ranges    │
├─────────────────────────────────────────────────────────────────┤
│ [Search by analyte code or name...]                              │
├──────────────────────┬───────┬──────┬─────┬──────────────┬──────┤
│ Analyte              │ Range │ Unit │ Sex │ Applicability │ Age  │
├──────────────────────┼───────┼──────┼─────┼──────────────┼──────┤
│ TSH  Thyroid Stim.   │0.5-2.0│mIU/L │ All │ All          │ All  │  [View]
│ FT4  Free Thyroxine  │1.0-1.5│ng/dL │ All │ All          │ All  │  [View]
│ FERR Ferritin        │50-150 │ng/mL │ Fem │ All          │ All  │  [View]
│ ...                  │ ...   │ ...  │ ... │ ...          │ ...  │
├─────────────────────────────────────────────────────────────────┤
│         Showing 1 to 50 of [n]         [< Previous] [Next >]     │
└─────────────────────────────────────────────────────────────────┘
```

The **Applicability** column shows the reproductive context that applies to a
row — a menstrual-phase badge, a **Context required** badge, or **All**. Each
row's action is **View** (published) or **Edit** (draft).

### Individual Range Details

Click a range's **View** / **Edit** action to open its detail page. The
read-only **Analyte Information** card shows:

- **Analyte Code**, **Analyte ID**, and **Full Name**
- **Framework** — the range's `range_framework` descriptor tag (for example, `functional`); this is a stored label, **not** an "optimal / suboptimal / borderline" classification (HealthPlus does not assign within-range "optimal/suboptimal" bands)
- **Evidence Level** — the evidence-level tag on the range, when present
- **Analyte Class** — when present
- **Reproductive Context** — "Required for safe resolution" or "Not required"
- **Notes** — clinical guidance and rationale, when present
- **Version ID**, plus a link to the analyte's **Interpretation Guidance**

The editable range values (bounds, unit, sex, age) sit in the left card and can
only be changed on a **draft** version — see
[Editing Functional Ranges]({% link docs/guides/admin/editing-functional-ranges.md %}).

---

## Activating a Functional Range Set

### Current Active Set

Your clinic's active functional range set is shown with an **Active** badge.

### Changing the Active Set

1. Find the desired **published** range set in the catalog (only published sets show **Activate**)
2. Click **Activate** (or **Activate This Set** from the Preview modal)
3. A confirmation dialog names the set and version and notes it will become the default set for patient interpretations
4. Click **Activate** to confirm

{: .warning }
> Changing your range set affects how future results are interpreted. Review the differences carefully before switching.

### Activation Impact

| What Changes | What Stays the Same |
|:-------------|:--------------------|
| Global functional ranges from the active set | Patient-specific overrides |
| Default functional classification thresholds | Persona-specific ranges |
| Future functional interpretation baseline | Provider conventional reference ranges |
| Functional source labels shown in Explain | Historical interpretations |

---

## Managing Draft Range Sets

{: .note }
> Creating and editing draft range sets requires administrator permissions.

### Creating a New Custom Set

1. Click **Create Custom** in the catalog header
2. On the **Create Custom Range Set** page, fill in:
   - **Name** (required)
   - **Description**
   - **Source Type** (Clinic Custom, Imported, or Shared)
   - **Initial Version** (defaults to `1.0.0`)
   - **Maintainer**
3. Use the **Select Ranges** picker on the right to choose which ranges to include (search, then check rows; ranges without a valid source appear as non-selectable diagnostic rows)
4. Click **Create Range Set**

{: .note }
To make an editable copy of an existing **published** set instead of building
one from scratch, use **Create Editable Version** on that set's card — this
creates (or resumes) a draft version you can edit.

### Adding Ranges to a Draft

1. Open the draft range set
2. Click **Add Range**
3. Select the analyte from the dropdown
4. Enter:
   - Lower bound
   - Upper bound
   - Unit
   - Sex applicability (All, Male, Female)
   - Age range (optional)
   - Framework
   - Source citation or source note, when available
   - Change reason
5. Click **Add Range**

{: .important }
> Each analyte can only appear once per demographic combination (same sex + age range) in a range set.

For the detailed workflow, see [Editing Functional Ranges]({% link docs/guides/admin/editing-functional-ranges.md %}).

### Editing Ranges in a Draft

1. Navigate to the range in the draft
2. Click **Edit**
3. Modify the desired fields
4. Enter a change reason
5. Click **Save Changes**

Editing does not overwrite the original range row. HealthPlus creates a new immutable range version and replaces the member in the draft set.

### Validation Rules

When editing ranges:

| Rule | Validation |
|:-----|:-----------|
| **Bounds** | Lower must be less than upper |
| **Non-negative** | Both bounds must be ≥ 0 |
| **Uniqueness** | No duplicate analyte + sex + age combinations |
| **Unit** | Must match analyte's standard unit |

### Deleting Ranges from a Draft

1. Navigate to the range
2. Click **Delete**
3. Enter or confirm the audit reason
4. Confirm the removal

{: .warning }
> Removing a member from a draft does not erase historical range data. Published ranges cannot be removed from the published version.

---

## Publishing a Draft

Publishing and activating are a single step in the app. On the draft's **View
Ranges** page:

1. Fill in the **Publish Reference** panel — a set-level source or review note for this draft version, required before it can go live. Provide at least a **Title** or a **Provenance note** (the panel also takes a Reference type, Identifier, and URL).
2. Click **Publish and Activate**

This publishes the draft version and immediately makes it the active set for the
clinic. (The set-level Publish Reference is separate from individual range
citations, which are checked per member — see Source Requirements below.)

### What Happens on Publish

- The version becomes **published** and locked (a banner marks it locked for auditability)
- All range members in the version become immutable — further changes require a new editable draft
- The published version is activated for the clinic in the same action

### Source Requirements on Publish

Before publish, every functional range member must have acceptable source support.

HealthPlus accepts at least one of:

- A linked citation on the range version.
- A linked source citation on the functional range.
- An active clinic protocol note.

If a member is missing source support, publish is blocked and the affected analytes are listed.

For details, see [Functional Range Source Requirements]({% link docs/guides/admin/functional-range-source-requirements.md %}).

---

## Range Set Lifecycle and Deprecation

A range set version moves through **draft → published → deprecated** as its
lifecycle status. Draft and published are exposed by the actions above.

{: .note }
There is no in-app "Deprecate" button today. `deprecated` is a lifecycle status
the platform records; the API prevents editing or deleting ranges in a
published or deprecated version. In practice you retire a set by publishing and
activating a replacement — the previously active set stays in the catalog and
in the selection history but is no longer the active set.

Historical data always remains accessible: published range versions are
immutable and are never deleted, so past interpretations keep resolving against
the version that was active at the time.

---

## Version History and Selection History

### Selection History

The catalog's top-level **History** button opens the **Selection History**
modal — the record of which range set has been activated for the clinic:

| Column | Meaning |
|:-------|:--------|
| **Range Set** | The activated set's name |
| **Version** | The activated version |
| **Activated** | When it was selected |
| **By** | Who activated it |
| **Status** | **Active** for the current set, **Inactive** for prior ones |

### Range-Level Audit

Individual range changes are audited as they happen rather than in a browsable
per-set timeline: every add, edit, and delete on a draft requires a
**change/audit reason**, and each edit creates a new immutable range version
instead of overwriting the previous one. Published versions are locked, so the
version that was live for any interpretation is always recoverable.

{: .note }
The app does not currently provide a side-by-side "compare two versions" view.

---

## Best Practices

### Before Changing Range Sets

{: .tip }
1. Review the target set's ranges thoroughly
2. Compare key analytes between current and new set
3. Identify patients who may be significantly affected
4. Consider creating patient overrides for edge cases
5. Document your rationale for the change

### When Creating Custom Range Sets

{: .tip }
1. Start by copying an existing set as a base
2. Make incremental, documented changes
3. Have clinical team review before publishing
4. Test with sample patients before clinic-wide rollout
5. Keep the original set available for comparison

### For Multi-Clinic Organizations

{: .tip }
1. Standardize on common range sets where possible
2. Document clinic-specific variations
3. Use personas for cohort-specific needs
4. Maintain clear governance for custom sets

---

## Troubleshooting

### "Cannot edit range" Error

**Cause**: The range set version is published (immutable).

**Solution**: Click **Create Editable Version** to make an editable draft, then edit there.

### "Change reason is required" Error

**Cause**: Add, edit, and remove actions need audit rationale.

**Solution**: Enter a clear reason for the change before saving.

### "Cannot publish version with uncited member ranges" Error

**Cause**: One or more functional range members are missing source support.

**Solution**: Add a citation, source citation, or clinic protocol note for each listed analyte, then publish again.

### "Duplicate analyte" Error

**Cause**: The analyte + sex + age combination already exists.

**Solution**: Edit the existing range instead of adding a new one.

### "Lower bound must be less than upper bound" Error

**Cause**: Invalid range bounds entered.

**Solution**: Ensure lower bound < upper bound.

### Range Set Not Appearing for Selection

**Cause**: The set is still in draft or has been deprecated.

**Solution**: Publish the draft, or select a non-deprecated alternative.

---

## Related Topics

- [Named Range Sets Overview →]({% link docs/named-range-sets.md %})
- [Editing Functional Ranges →]({% link docs/guides/admin/editing-functional-ranges.md %})
- [Functional Range Source Requirements →]({% link docs/guides/admin/functional-range-source-requirements.md %})
- [Range Override Workflow →]({% link docs/range-overrides.md %})
- [Explainability System →]({% link docs/explainability.md %})
