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
2. Click **Functional Range Sets**
3. You'll see the Functional Range Sets catalog

---

## The Range Sets Catalog

The catalog displays all available range sets with key information:

```
┌─────────────────────────────────────────────────────────────────┐
│ FUNCTIONAL RANGE SETS                                            │
│ Choose the functional range set used for interpretation           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ ┌──────────────────────────────────────────────────────────────┐│
│ │ Default Functional Ranges                    [PUBLISHED]     ││
│ │ Optimized functional ranges for general wellness assessment  ││
│ │                                                              ││
│ │ Source: system    Ranges: 156    Version: 2.1                ││
│ │                                                              ││
│ │ [View Ranges] [Preview] [Activate]                          ││
│ └──────────────────────────────────────────────────────────────┘│
│                                                                  │
│ ┌──────────────────────────────────────────────────────────────┐│
│ │ Optimal Wellness                             [PUBLISHED]     ││
│ │ Tighter ranges for proactive health optimization             ││
│ │                                                              ││
│ │ Source: system    Ranges: 142    Version: 1.0                ││
│ │                                                              ││
│ │ [View Ranges] [Preview] [Activate]                          ││
│ └──────────────────────────────────────────────────────────────┘│
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Catalog Information

| Field | Description |
|:------|:------------|
| **Name** | The range set's display name |
| **Status** | Draft, Published, or Deprecated |
| **Source** | `system` (built-in) or `clinic` (custom) |
| **Ranges** | Total number of ranges in the set |
| **Version** | Current version number |

Conventional reference range catalogs are managed separately and should not be activated as functional range sets.

---

## Viewing Range Set Details

Click **Details** on any range set to see:

### Summary Tab
- Full description
- Creation and modification dates
- Version history
- Checksum (for published sets)

### Ranges Tab
- Complete list of all ranges
- Analyte code and name
- Bounds (lower/upper)
- Unit of measurement
- Sex and age filters
- Framework (optimal, suboptimal, etc.)

### History Tab
- Complete audit trail
- All modifications with timestamps
- Who made each change
- Rationale for changes

---

## Browsing Individual Ranges

### From the Catalog

1. Click **View Ranges** on any range set
2. Browse the searchable, paginated list
3. Use filters:
   - Search by analyte name or code
   - Filter by sex applicability
   - Filter by age range

### Range List View

```
┌─────────────────────────────────────────────────────────────────┐
│ RANGES: Default Functional Ranges                                │
│ 156 ranges total                          [Search: ________]     │
├─────────────────────────────────────────────────────────────────┤
│ Code    │ Analyte              │ Lower │ Upper │ Unit  │ Sex    │
├─────────┼──────────────────────┼───────┼───────┼───────┼────────┤
│ TSH     │ Thyroid Stimulating  │ 0.5   │ 2.0   │ mIU/L │ All    │
│ FT4     │ Free Thyroxine       │ 1.0   │ 1.5   │ ng/dL │ All    │
│ FT3     │ Free Triiodothyronine│ 3.0   │ 4.0   │ pg/mL │ All    │
│ FERR    │ Ferritin             │ 50    │ 150   │ ng/mL │ Female │
│ FERR    │ Ferritin             │ 75    │ 150   │ ng/mL │ Male   │
│ ...     │ ...                  │ ...   │ ...   │ ...   │ ...    │
├─────────────────────────────────────────────────────────────────┤
│                         Page 1 of 16    [< Prev] [Next >]        │
└─────────────────────────────────────────────────────────────────┘
```

### Individual Range Details

Click any range to see complete details:

- **Analyte Information**: Code, full name, description
- **Range Bounds**: Lower and upper limits with unit
- **Demographics**: Sex and age applicability
- **Framework**: Range category (optimal, borderline, etc.)
- **Evidence Level**: Supporting research quality
- **Notes**: Clinical guidance and rationale
- **Version Status**: Whether this range can be edited

---

## Activating a Functional Range Set

### Current Active Set

Your clinic's active functional range set is shown with an **Active** badge.

### Changing the Active Set

1. Find the desired range set in the catalog
2. Click **Activate**
3. Review the confirmation dialog:
   - Current active set
   - New active set
   - Impact summary
4. Click **Confirm Activation**

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

### Creating a New Draft

1. Click **Create New Range Set**
2. Enter:
   - Name (required)
   - Description
   - Base (optional - copy from existing set)
3. Click **Create Draft**

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

When a draft is ready for clinical use:

1. Open the draft range set
2. Click **Publish**
3. Review:
   - All ranges included
   - Validation summary
   - Required approvals
4. Enter publication notes
5. Click **Confirm Publish**

### What Happens on Publish

- Version number increments
- Checksum is calculated
- All ranges become immutable
- Set becomes available for clinic selection
- Audit trail records the publication event

### Source Requirements on Publish

Before publish, every functional range member must have acceptable source support.

HealthPlus accepts at least one of:

- A linked citation on the range version.
- A linked source citation on the functional range.
- An active clinic protocol note.

If a member is missing source support, publish is blocked and the affected analytes are listed.

For details, see [Functional Range Source Requirements]({% link docs/guides/admin/functional-range-source-requirements.md %}).

---

## Deprecating a Published Set

When a range set should no longer be used:

1. Open the published range set
2. Click **Deprecate**
3. Enter:
   - Deprecation reason
   - Recommended replacement (if applicable)
4. Click **Confirm Deprecation**

### Deprecated Set Behavior

- No longer appears in selection dropdown
- Clinics currently using it are notified
- Historical data remains accessible
- Can be referenced but not newly selected

---

## Version History and Auditing

### Viewing Version History

1. Open any range set
2. Click **History** tab
3. Browse the timeline of changes

### Audit Information

Each event records:
- **Timestamp**: When the action occurred
- **Actor**: Who performed the action
- **Action Type**: Added, replaced, removed, published, etc.
- **Details**: Specific changes made
- **Rationale**: Why the change was made (if provided)

### Comparing Versions

1. In the History tab, select two versions
2. Click **Compare**
3. View side-by-side differences

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

**Cause**: The range set is published (immutable).

**Solution**: Create a new draft version to make changes.

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
