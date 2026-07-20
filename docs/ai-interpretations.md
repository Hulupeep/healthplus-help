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
- Bounded, guardrailed recommendations grounded in configured ranges and clinic-authored guidance
- Patient-friendly explanations (optional mode)
- Decision traces showing range sources, symptoms, coverage gaps, and guardrails

{: .important }
HealthPlus only surfaces configured, sourced ranges and clinic-authored, sourced guidance. It does **not** invent medical values or generate medication dosing. Any specific numbers shown on this page are illustrative formatting examples, not clinical advice.

---

## Interpretation Modes

### Clinician Mode

Designed for healthcare providers:
- Technical medical terminology
- Pattern explanations grounded in the classified findings
- Bounded recommendations tied to classification strength and coverage gaps (no invented dosing)
- Source and citation status for the ranges and clinic-authored guidance used

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

The AI generates a comprehensive summary. The layout below is an **illustrative
formatting example only** — the values are placeholders, not real patient data or
clinical advice. The generated recommendations are bounded, guardrailed statements
grounded in the classified findings and coverage gaps; HealthPlus does not invent
prognoses, thresholds, or medication dosing.

```
┌─────────────────────────────────────────────────────────────────┐
│ AI-GENERATED CLINICAL INTERPRETATION (illustrative layout)      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ SUMMARY                                                         │
│ Counts of clear-abnormal, borderline, normal, and unclassified │
│ results, with active symptom context when symptoms are         │
│ recorded, and disclosure when range coverage is incomplete.    │
│                                                                 │
│ KEY FINDINGS (each grounded in an applied range)               │
│ • <analyte>: <value> <unit> (<classification>)                 │
│   - applied range + source/version, distance from boundary     │
│                                                                 │
│ PATTERN ANALYSIS                                                │
│ Describes the classified pattern, bounded by the AI guardrail  │
│ for each decision. Borderline findings are stated as borderline│
│ and not overstated. No uncited prognosis is generated.         │
│                                                                 │
│ RECOMMENDATIONS (bounded, non-dosing)                          │
│ 1. Treat borderline findings as context signals, not major     │
│    abnormal results in isolation.                              │
│ 2. Resolve missing range coverage and unit mappings before     │
│    generating stronger clinical conclusions.                   │
│ 3. Review symptoms against thyroid, iron, inflammation,        │
│    nutrient, and metabolic markers once classified.           │
│ 4. Compare with prior results when available to determine      │
│    whether values are stable, improving, or declining.        │
│                                                                 │
│ [Edit] [Save] [Regenerate]                                      │
└─────────────────────────────────────────────────────────────────┘
```

Clinic-authored guidance (see the analyte guidance authoring flow) can add sourced,
reviewed implication copy for a specific range state — the AI consumes that guidance
under its evidence level (e.g. `clinic_reviewed`) rather than inventing its own.

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
• Changes: Added clinician note on symptom context

Version 2 - 2024-02-14
• Edited by: Dr. Michael Ross
• Changes: Clarified borderline wording for the functional finding

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
4. **Review guidance provenance** - Confirm any clinic-authored guidance used is sourced and reviewed; add clinical judgement for treatment decisions yourself
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
