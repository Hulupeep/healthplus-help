---
title: Explainability System
layout: default
nav_order: 6
---

# Explainability System
{: .no_toc }

The foundation of clinical trust—complete transparency into WHY results are flagged and HOW interpretations are made.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Why Explainability Matters

{: .important }
In clinical practice, "black box" decisions are unacceptable.

Clinicians need to:
- Verify the reasoning behind automated flags
- Understand which evidence supports the interpretation
- Document the basis for clinical decisions
- Identify when to override automated suggestions
- Maintain audit trails for quality assurance

---

## Accessing Explainability

Every lab result row includes an "Explain" button:

```
┌─────────────────────────────────────────────────────────────────┐
│ TSH              3.2 mIU/L    0.5-5.0    0.5-2.0    FUNC HIGH  │
│ Thyroid Stim...                                                 │
│ [Conventional] [Explain]                                        │
└─────────────────────────────────────────────────────────────────┘
                    │
                    ▼ Click "Explain"
```

The Explainability Dialog opens showing:
- **Value & Status** - The result and its interpretation
- **Range Applied** - Which range was used and why
- **Precedence Chain** - Full decision tree
- **Context** - Patient factors that modified the range
- **Citation** - Evidence supporting the range
- **Version** - When the range was last updated
- **Comments** - Clinician annotations

---

## Range Precedence Chain

The dialog shows the complete decision tree:

### Level 1: Patient Override (Highest Priority)

```
Patient-specific range created by a clinician for THIS patient.

Example:
"This patient has Hashimoto's and is symptomatic at TSH > 1.5.
 Override applied: 0.5 - 1.5 mIU/L"

Applied by: Dr. Smith
Created: 2024-02-10
Rationale: "Patient reports fatigue when TSH exceeds 1.5"
```

### Level 2: Persona Range

```
Range defined for a patient cohort/phenotype.

Example:
Persona: "hashimotos-treated"
Range: 0.5 - 2.5 mIU/L
Description: "Patients on levothyroxine therapy"
```

### Level 3: Global Functional Range

```
Default functional range for all patients.

Example:
Range: 0.5 - 2.0 mIU/L
Citation: "Optimal Thyroid Function Study, 2022"
```

### Level 4: Conventional Range (Fallback)

```
Standard laboratory reference interval.
Only used if no functional range is defined.
```

---

## Citation Tracking

Every range can have citations:

```
┌─────────────────────────────────────────────────────────────────┐
│ CITATION                                                        │
├─────────────────────────────────────────────────────────────────┤
│ Title: "Optimal TSH Levels and Subclinical Hypothyroidism"      │
│ Source: Journal of Clinical Endocrinology & Metabolism          │
│ Year: 2022                                                      │
│ DOI: 10.1210/clinem/dgac123                                     │
│ [View Full Citation]                                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## Version History

Every range modification is tracked:

```
VERSION HISTORY: TSH Functional Range
═════════════════════════════════════

Version 3 (Current) - 2024-01-15
• Range: 0.5 - 2.0 mIU/L
• Modified by: System Admin
• Reason: "Updated based on 2023 meta-analysis"

Version 2 - 2023-06-20
• Range: 0.4 - 2.5 mIU/L
• Modified by: Dr. Johnson
• Reason: "Widened upper bound for elderly population"

Version 1 (Original) - 2022-01-01
• Range: 0.5 - 2.0 mIU/L
• Created by: Initial Import

[Revert to v2] [Revert to v1]
```

{: .note }
Administrators can revert to previous versions if needed, with full audit trail.

---

## Clinician Comments

The "Add Comment" feature allows clinicians to annotate ranges:

### Adding a Comment

1. Click "Add Comment" in the explainability dialog
2. Enter your name and credentials
3. Write your clinical insight
4. Choose visibility (all clinicians or this patient only)
5. Save

### Comment Display

Comments appear in the explainability dialog:

```
CLINICIAN NOTES
═══════════════

Dr. Sarah Chen (MD, FACEP) - 2024-02-15:
"For patients with symptoms of hypothyroidism, consider
treatment even within this range if Free T3 is also low..."

Dr. Michael Ross (ND) - 2024-01-20:
"In my clinical experience, symptomatic patients often
improve when TSH is optimized below 1.5..."
```

---

## Reading Explainability: Complex Example

**Patient:** 35F, pregnant (2nd trimester), Hashimoto's diagnosis

```
┌─────────────────────────────────────────────────────────────────┐
│ EXPLAINABILITY: TSH                                             │
├─────────────────────────────────────────────────────────────────┤
│ Value: 2.2 mIU/L                                                │
│ Status: Normal                                                  │
│                                                                 │
│ RANGE RESOLUTION:                                               │
│ ✅ Pregnancy Context Applied (2nd Trimester)                    │
│    • Range: 0.2 - 3.0 mIU/L                                     │
│    • Citation: ACOG Thyroid in Pregnancy 2023                   │
│                                                                 │
│ Note: Patient has Hashimoto's. Post-pregnancy, consider         │
│ tighter TSH target (0.5 - 2.0 mIU/L).                          │
│                                                                 │
│ CONTEXT FACTORS:                                                │
│ • Pregnancy: Yes, 22 weeks gestation                            │
│ • Trimester: Second (14-27 weeks)                               │
│ • Condition: Hashimoto's thyroiditis                            │
│                                                                 │
│ WHY THIS MATTERS:                                               │
│ Pregnancy suppresses TSH in the first trimester and normalizes  │
│ by the second. A TSH of 2.2 in the second trimester is          │
│ appropriate. Without pregnancy context, this might flag as      │
│ borderline elevated given the Hashimoto's history.              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Audit Trail

The platform maintains a complete audit trail:

### Events Tracked
- Range creation and modification
- Patient override creation
- Persona promotion
- Comment additions
- Version reverts
- Access to explainability dialogs

### Audit Log Format

```
2024-02-15 14:32:15 | Dr. Smith | Created patient override
                    | Patient: Jane Doe | Analyte: TSH
                    | Range: 0.5-1.5 mIU/L

2024-02-16 09:10:33 | Dr. Johnson | Promoted to persona
                    | Source: Patient override (Jane Doe)
                    | Target: hashimotos-treated
```

---

## Best Practices

{: .tip }
> Always click "Explain" before making clinical decisions based on flags.

### Before Making Clinical Decisions
1. Click "Explain" to verify the range applied
2. Check if context (pregnancy, cycle) is correctly set
3. Review the precedence chain for appropriateness
4. Note any clinician comments for additional guidance

### When Results Seem Incorrect
1. Verify patient context is up-to-date
2. Check if an inappropriate persona is assigned
3. Review if a patient override is affecting results
4. Consider whether the functional range needs adjustment

---

## Next Steps

- [Learn Range Override Workflow →]({% link docs/range-overrides.md %})
- [Explore AI-Assisted Interpretations →]({% link docs/ai-interpretations.md %})
