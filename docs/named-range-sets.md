---
title: Named Range Sets
layout: default
nav_order: 5
---

# Named Range Sets
{: .no_toc }

Understanding the versioned, curated collections of functional and conventional ranges that power the HealthPlus interpretation engine.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What Are Named Range Sets?

A **Named Range Set** is a curated, versioned collection of reference ranges that clinics can select and apply to their patient population. Each set contains both functional ranges and conventional ranges for multiple analytes.

{: .important }
> Named Range Sets provide a managed, auditable way to standardize reference ranges across a clinic while still allowing individual patient customizations.

### Key Characteristics

| Feature | Description |
|:--------|:------------|
| **Versioned** | Each modification creates a new version with full audit trail |
| **Immutable** | Published versions cannot be modified, only deprecated |
| **Checksummed** | Integrity verification prevents unauthorized changes |
| **Auditable** | Complete history of who changed what and when |

---

## What's Inside a Named Range Set?

A Named Range Set contains **range versions** that reference actual range definitions from two source tables:

### 1. Functional Ranges

Optimized ranges for wellness assessment:
- Evidence-based thresholds for optimal health
- May include multiple frameworks (e.g., "optimal", "suboptimal")
- Documented with citations and evidence levels
- Sex and age-stratified where appropriate

### 2. Conventional Ranges

Standard laboratory reference intervals:
- Traditional population-derived ranges
- Used as fallback when functional ranges are unavailable
- Required for regulatory and comparison purposes

{: .note }
> A single Named Range Set can include **both** functional and conventional ranges. The range resolution engine automatically selects the appropriate range based on the [precedence chain](#interaction-with-range-overrides).

---

## Range Set Lifecycle

Named Range Sets follow a strict lifecycle to ensure clinical safety:

```
┌─────────────────────────────────────────────────────────────────┐
│                        DRAFT                                     │
│  • Can be modified freely                                        │
│  • Not available for patient interpretation                      │
│  • Used for building and testing new range sets                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ [Publish]
┌─────────────────────────────────────────────────────────────────┐
│                      PUBLISHED                                   │
│  • Active and available for clinic selection                     │
│  • IMMUTABLE - no changes allowed                                │
│  • Full audit trail and checksum verification                    │
│  • Multiple published versions can coexist                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ [Deprecate]
┌─────────────────────────────────────────────────────────────────┐
│                     DEPRECATED                                   │
│  • No longer available for new selection                         │
│  • Still accessible for historical reference                     │
│  • Clinics using it should migrate to newer version              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Built-in Range Sets

HealthPlus ships with pre-configured range sets:

| Range Set | Description | Source |
|:----------|:------------|:-------|
| **Default Functional Ranges** | Optimized functional ranges for general wellness | HealthPlus curated |
| **Conventional Reference** | Standard laboratory reference intervals | Lab industry standard |
| **Optimal Wellness** | Tighter ranges for proactive health optimization | Functional medicine literature |

{: .tip }
> Most clinics start with the "Default Functional Ranges" set and customize from there.

---

## Clinic Selection

Each clinic selects which Named Range Set to use as their default. This selection:

- Applies to all new patient results
- Can be changed at any time (affects future interpretations only)
- Is tracked in the `clinic_range_set_selection` audit log
- Includes the acting clinician and timestamp

### Changing Your Clinic's Range Set

1. Navigate to **Admin** → **Range Sets**
2. Browse available published range sets
3. Click **Select** on your chosen set
4. Confirm the selection

{: .warning }
> Changing your clinic's range set affects how future results are interpreted. Historical interpretations remain unchanged for auditability.

---

## Interaction with Range Overrides

Named Range Sets work alongside the existing override system. The **complete precedence chain** is:

```
┌────────────────────────────────────────────────────────┐
│ 1. PATIENT-SPECIFIC OVERRIDE                           │ ← Highest Priority
│    Clinician created for this specific patient         │
├────────────────────────────────────────────────────────┤
│ 2. PERSONA-SPECIFIC RANGE                              │
│    Defined for a patient cohort/phenotype              │
├────────────────────────────────────────────────────────┤
│ 3. GLOBAL FUNCTIONAL RANGE                             │
│    From the clinic's selected Named Range Set          │
├────────────────────────────────────────────────────────┤
│ 4. CONVENTIONAL RANGE                                  │ ← Fallback
│    From the clinic's selected Named Range Set          │
└────────────────────────────────────────────────────────┘
```

### What Happens to Existing Overrides?

{: .important }
> **Patient overrides are preserved when you change range sets.** They continue to take precedence over the new set's ranges.

When you change your clinic's Named Range Set:

| Scope | Behavior |
|:------|:---------|
| **Patient Overrides** | **Preserved** - Continue to override any range set |
| **Persona Ranges** | **Preserved** - Continue to apply to assigned patients |
| **Global Ranges** | **Replaced** - New set's ranges take effect |
| **Conventional Ranges** | **Replaced** - New set's ranges take effect |

### Example Scenario

Your clinic has been using "Default Functional Ranges" and you switch to "Optimal Wellness":

1. **TSH Patient Override (0.5-1.5)** - Still applies to that specific patient
2. **TSH Persona Range for Hashimoto's (0.5-1.8)** - Still applies to Hashimoto's patients
3. **TSH Global Range** - Now uses "Optimal Wellness" range (0.5-1.7)
4. **TSH Conventional** - Now uses "Optimal Wellness" conventional (0.4-4.5)

---

## Version History and Auditing

Every range set maintains complete version history:

### Tracked Events

| Event | Information Recorded |
|:------|:--------------------|
| **Version Created** | Who, when, description of changes |
| **Range Added** | Analyte, bounds, rationale |
| **Range Modified** | Old values, new values, reason |
| **Range Removed** | Which range, why |
| **Published** | Who approved, effective date |
| **Deprecated** | Reason, replacement recommendation |

### Checksum Verification

Published range sets include a cryptographic checksum that:
- Verifies no unauthorized modifications occurred
- Provides regulatory compliance evidence
- Enables integrity auditing

---

## Explainability Integration

The [Explainability System]({% link docs/explainability.md %}) shows which Named Range Set provided each range:

```
┌─────────────────────────────────────────────────────────────────┐
│ WHY THIS RANGE?                                                 │
├─────────────────────────────────────────────────────────────────┤
│ Source: Default Functional Ranges (v2.1)                        │
│ Range Type: Functional                                          │
│ Applied Range: 0.5 - 2.0 mIU/L                                  │
│                                                                 │
│ No patient or persona override exists for this analyte.         │
│ Using clinic's selected range set.                              │
│                                                                 │
│ Evidence: Thyroid optimization studies (2019-2023)              │
│ Framework: optimal                                              │
│ Last Updated: 2024-06-15                                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## Best Practices

### When to Use Different Range Sets

{: .tip }
✅ **Default Functional Ranges** - General practice, mixed patient population
✅ **Optimal Wellness** - Preventive/longevity-focused practice
✅ **Custom Range Set** - Specialty clinics with unique patient needs

### When to Create Overrides vs. Change Range Sets

| Situation | Recommendation |
|:----------|:---------------|
| One patient needs different TSH range | Create **patient override** |
| All Hashimoto's patients need different TSH | Create **persona range** |
| Your entire practice uses different TSH philosophy | Select different **range set** |
| No existing set matches your practice | Request **custom range set** |

### Migration Best Practices

When switching range sets:
1. Review the differences between sets
2. Identify patients who may be affected
3. Consider creating patient overrides for edge cases
4. Document the change rationale
5. Monitor for unexpected interpretation changes

---

## Admin Management

For administrators managing range sets, see the [Admin Guide: Range Set Management]({% link docs/guides/admin/range-set-management.md %}).

---

## Next Steps

- [Understand Range Overrides →]({% link docs/range-overrides.md %})
- [Explore the Explainability System →]({% link docs/explainability.md %})
- [Admin: Range Set Management →]({% link docs/guides/admin/range-set-management.md %})
