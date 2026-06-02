---
title: AI Interpretations
layout: default
nav_order: 8
---

# AI-Assisted Interpretations
{: .no_toc }

Generate clinical summaries that synthesize flagged results into actionable insights.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

The AI interpretation system analyzes a patient's lab results and generates:
- Clinical summaries synthesizing multiple flagged results
- Pattern identification across biomarkers
- Evidence-based intervention suggestions
- Patient-friendly explanations (optional mode)
- Decision traces showing range sources, symptoms, coverage gaps, and guardrails

---

## Interpretation Modes

### Clinician Mode

Designed for healthcare providers:
- Technical medical terminology
- Detailed pathophysiology explanations
- Treatment recommendations with dosing
- Citation references for claims

### Patient Mode

Designed for patient understanding:
- Plain language explanations
- Analogies and visualizations
- General lifestyle recommendations
- Emphasis on next steps

---

## Generating an Interpretation

### Step 1: Navigate to Interpretations Tab

From the patient dashboard, click the **Interpretations** tab.

### Step 2: Click Generate

Click **Generate AI Interpretation** to start the process.

### Step 3: Review the Draft

The AI generates a comprehensive summary:

```
┌─────────────────────────────────────────────────────────────────┐
│ AI-GENERATED CLINICAL INTERPRETATION                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ SUMMARY                                                         │
│ This 42-year-old female presents with a pattern consistent     │
│ with suboptimal thyroid function. While all values fall within │
│ conventional reference ranges, the functional analysis reveals │
│ a concerning pattern.                                           │
│                                                                 │
│ KEY FINDINGS                                                    │
│ • TSH: 3.8 mIU/L (Functional High) - Pituitary compensation    │
│ • Free T4: 0.9 ng/dL (Functional Low) - Reduced production     │
│ • Free T3: 2.3 pg/mL (Functional Low) - Conversion impairment  │
│                                                                 │
│ PATTERN ANALYSIS                                                │
│ The combination of elevated TSH with low-normal T4 and T3      │
│ suggests the hypothalamic-pituitary axis is working harder     │
│ to maintain circulating hormone levels. This pattern often     │
│ precedes overt hypothyroidism by 5-10 years.                   │
│                                                                 │
│ RECOMMENDATIONS                                                 │
│ 1. Assess thyroid antibodies (TPO, TgAb) to evaluate for       │
│    Hashimoto's thyroiditis                                     │
│ 2. Optimize selenium (200-400 mcg daily) to support            │
│    T4→T3 conversion                                             │
│ 3. Evaluate iron status (ferritin >50 ng/mL goal)              │
│ 4. Consider LDN or thyroid support if symptoms persist         │
│                                                                 │
│ [Edit] [Save] [Regenerate]                                      │
└─────────────────────────────────────────────────────────────────┘
```

### Step 4: Edit and Attribute

{: .important }
All AI interpretations require clinician review and attribution before saving.

1. Review the generated content
2. Make any necessary edits
3. Enter your name for attribution
4. Click **Save**

---

## Attribution Requirements

When editing an AI interpretation:

```
┌─────────────────────────────────────────────────────────────────┐
│ EDIT INTERPRETATION                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ Editor Name: [Dr. Sarah Chen                ]                   │
│                                                                 │
│ Content:                                                        │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [Editable interpretation content...]                        │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Note: Your name will be attributed as the reviewing clinician. │
│                                                                 │
│ [Cancel] [Save Changes]                                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Interpretation History

All interpretations are versioned:

```
INTERPRETATION HISTORY
══════════════════════

Version 3 (Current) - 2024-02-15
• Edited by: Dr. Sarah Chen
• Changes: Added selenium dosing recommendation

Version 2 - 2024-02-14
• Edited by: Dr. Michael Ross
• Changes: Clarified T4→T3 conversion pathway

Version 1 - 2024-02-14
• Generated by: AI System
• Reviewed by: Dr. Michael Ross
```

---

## Best Practices

### Reviewing AI Output

{: .tip }
> Always verify AI recommendations against current clinical guidelines.

1. **Check accuracy** - Verify the AI correctly identified flagged values
2. **Validate logic** - Ensure the pattern analysis makes clinical sense
3. **Review range coverage** - Confirm missing or unit-mismatched ranges were not counted as normal
4. **Review recommendations** - Confirm dosing and interventions are appropriate
5. **Add nuance** - Include patient-specific factors the AI may have missed

### When to Regenerate

- AI missed important context
- Pattern analysis doesn't align with clinical presentation
- Recommendations don't fit patient's situation

### Documentation

- Always save with attribution
- Note any significant edits made
- Reference the interpretation in clinical notes

---

## Next Steps

- [View Step-by-Step Guides →]({% link docs/guides/index.md %})
- [Understand AI Decision Trace →]({% link docs/ai-decision-trace.md %})
- [Review Example Scenarios →]({% link docs/scenarios/index.md %})
