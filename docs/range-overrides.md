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

### Step 1: Identify the Need

While reviewing lab results, you notice:
- The standard functional range doesn't fit this patient
- The patient is symptomatic at levels within "normal" range
- Clinical judgment suggests different thresholds

### Step 2: Access the Override Interface

1. Find the analyte that needs adjustment
2. Click the **Explain** button
3. In the explainability dialog, click **Add Override**

### Step 3: Enter Override Details

```
┌─────────────────────────────────────────────────────────────────┐
│ CREATE PATIENT OVERRIDE                                         │
├─────────────────────────────────────────────────────────────────┤
│ Analyte: TSH - Thyroid Stimulating Hormone                      │
│                                                                 │
│ Current Functional Range: 0.5 - 2.0 mIU/L                       │
│                                                                 │
│ New Patient-Specific Range:                                     │
│ Lower Bound: [0.5   ] mIU/L                                     │
│ Upper Bound: [1.5   ] mIU/L                                     │
│                                                                 │
│ Your Name: [Dr. Sarah Chen            ]                         │
│                                                                 │
│ Clinical Rationale:                                             │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Patient reports fatigue and brain fog when TSH exceeds     │ │
│ │ 1.5 mIU/L. Has responded well to optimization. Hashimoto's │ │
│ │ diagnosis with TPO antibodies positive.                    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ [Cancel] [Create Override]                                      │
└─────────────────────────────────────────────────────────────────┘
```

{: .important }
Always document the clinical rationale for overrides.

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

- **Reviewer Name** - Who is approving this promotion
- **Persona ID** - Unique identifier for the cohort (e.g., `hashimotos-treated`)
- **Rationale** - Why this range should be promoted

### Step 4: Complete Promotion

After promotion:
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

## Next Steps

- [Explore AI-Assisted Interpretations →]({% link docs/ai-interpretations.md %})
- [Review Example Scenarios →]({% link docs/scenarios/index.md %})
