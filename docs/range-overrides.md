---
title: Range Overrides
layout: default
nav_order: 7
---

# Range Override Workflow
{: .no_toc }

Create, manage, and promote range overrides for individualized patient care.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Why Override Ranges?

Standard functional ranges work for most patients, but some situations require customization:

- **Individual Variability** - Patient's optimal differs from population norms
- **Condition-Specific Needs** - Disease states require different thresholds
- **Treatment Targets** - Medication therapy has specific goals
- **Clinical Experience** - Practitioner knowledge of the patient

---

## Types of Overrides

| Type | Scope | Priority | Use Case |
|:-----|:------|:---------|:---------|
| **Patient Override** | ONE patient | Highest | Individual needs |
| **Persona Range** | Patient cohort | Second | Similar patients |
| **Global Update** | ALL patients | Third | New research |

---

## Creating a Patient Override

{: .important }
> **What the app does today.** HealthPlus does not yet expose a "create override" form on the lab-results screen. A result's **Explain** dialog offers **Add clinician note** (under *Clinician commentary*) to record context on a range — it does not create a new range, and there is no **Add Override** button. Patient-specific overrides that already exist in a clinic's data appear in the **Pending Promotions** card (below), where they can be reviewed and promoted. The panel below **illustrates the override concept only** — it is not a current app screen, and its analyte, bounds, names, and rationale are placeholders.

### When a Patient Override Applies

A patient-specific override records a range that applies to a single patient and takes precedence over persona and global functional ranges. It is the right tool when:

- The standard functional range doesn't fit this patient
- The patient is symptomatic at levels within the "normal" range
- Clinical judgment supports a different threshold, with documented rationale

### Illustrative Override (concept — not a current screen)

```
┌─────────────────────────────────────────────────────────────────┐
│ PATIENT OVERRIDE — ILLUSTRATIVE ONLY                            │
├─────────────────────────────────────────────────────────────────┤
│ Analyte: TSH - Thyroid Stimulating Hormone                      │
│                                                                 │
│ Functional Range (example): 0.5 - 2.0 mIU/L                     │
│                                                                 │
│ Patient-Specific Range (example):                               │
│ Lower Bound: [0.5   ] mIU/L                                     │
│ Upper Bound: [1.5   ] mIU/L                                     │
│                                                                 │
│ Reviewer: [Example reviewer           ]                         │
│                                                                 │
│ Clinical Rationale (example):                                   │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Documented symptom response guiding a tighter target for   │ │
│ │ this individual patient.                                   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

{: .note }
The numbers above are placeholders showing the *shape* of an override. HealthPlus only applies configured, sourced ranges — it never invents range values. Always document the clinical rationale for any override.

---

## Pending Promotions Card

The Pending Promotions Card displays all patient-level overrides ready for review:

```
┌─────────────────────────────────────────────────────────────────┐
│ 🔄 PENDING PROMOTIONS                                           │
│    Patient-specific range overrides ready for review            │
│                                                        1 pending │
├─────────────────────────────────────────────────────────────────┤
│ Analyte  │ Range       │ Type       │ Applied By │ Action      │
├──────────┼─────────────┼────────────┼────────────┼─────────────┤
│ TSH      │ 0.5 - 1.5   │ functional │ Dr. Chen   │ [Promote]   │
└─────────────────────────────────────────────────────────────────┘
```

---

## Promoting to Persona

When a patient override could benefit other similar patients:

### Step 1: Click "Promote"

The Promotion Dialog opens.

### Step 2: Choose Target Scope

| Scope | Use Case |
|:------|:---------|
| **Persona** | Range applies to a specific patient cohort |
| **Global** | Range should be the new default for all patients |

### Step 3: Provide Details

In the **Promote Range Override** dialog:

- **Target Scope** - choose **Persona** or **Global**
- **Reviewer** - who is approving this promotion (required)
- **Persona identifier** - the cohort id, shown only for **Persona** scope (e.g., `athletic-female-30-40`)
- **Rationale (optional)** - why this range is being promoted

### Step 4: Complete Promotion

Click **Promote range** to confirm. After promotion:
- The range is available for the specified scope
- Version history shows the promotion event
- Audit trail captures the action

---

## Workflow Summary

```
1. IDENTIFY NEED
   ▼
   Patient results don't fit standard ranges

2. CREATE PATIENT OVERRIDE
   ▼
   Enter new range bounds + document rationale

3. VALIDATE OVER TIME
   ▼
   Monitor patient outcomes, confirm appropriateness

4. PROMOTE (OPTIONAL)
   ▼
   To Persona → Applies to cohort
   To Global  → Applies to all patients

5. MONITOR & ITERATE
   ▼
   Track version history, update based on evidence
```

---

## Best Practices

### When to Create Overrides

{: .tip }
✅ Patient has documented response to specific thresholds
✅ Condition-specific literature supports different ranges
✅ Treatment goals require tighter monitoring

### When NOT to Create Overrides

{: .warning }
❌ Single aberrant result (investigate first)
❌ Range preference without clinical evidence
❌ Convenience rather than clinical need

### Documentation Requirements
- Always provide clinical rationale
- Reference supporting literature when available
- Note patient response that justified the override
- Update rationale if understanding evolves

---

---

## Interaction with Named Range Sets

Range overrides work alongside [Named Range Sets]({% link docs/named-range-sets.md %})—the curated collections of functional ranges your clinic uses.

### The Complete Precedence Chain

```
1. PATIENT-SPECIFIC OVERRIDE  ← Your overrides (highest priority)
         ▼
2. PERSONA-SPECIFIC RANGE     ← Promoted overrides
         ▼
3. GLOBAL FUNCTIONAL RANGE    ← From clinic's Named Range Set
```

### What Happens When the Clinic Changes Range Sets?

{: .important }
> **Your patient overrides are always preserved.** They continue to take precedence regardless of which Named Range Set your clinic selects.

| Override Type | Behavior on Range Set Change |
|:--------------|:-----------------------------|
| Patient Override | **Preserved** - Still applies to that patient |
| Persona Range | **Preserved** - Still applies to that cohort |
| Global Range | **Replaced** - New set's range takes effect |

### When to Use Overrides vs. Range Sets

| Need | Solution |
|:-----|:---------|
| One patient needs different TSH | Create **patient override** |
| All Hashimoto's patients need different TSH | Create **persona** and promote override |
| Entire practice uses different philosophy | Ask admin to select different **Named Range Set** |
| Provider conventional range is wrong or missing | Update **Conventional Reference Ranges** |

---

## Next Steps

- [Learn about Named Range Sets →]({% link docs/named-range-sets.md %})
- [Manage Conventional Reference Ranges →]({% link docs/conventional-reference-ranges.md %})
- [Explore AI-Assisted Interpretations →]({% link docs/ai-interpretations.md %})
- [Review Example Scenarios →]({% link docs/scenarios/index.md %})
