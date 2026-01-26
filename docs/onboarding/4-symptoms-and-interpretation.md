---
title: "4. Symptoms, Context, and AI Interpretation"
layout: default
parent: Clinician Onboarding
nav_order: 4
---

# Symptoms, Context, and AI Interpretation
{: .no_toc }

**Who this is for:** Clinicians evaluating the decision support features of the platform.

---

## The Fundamental Separation

This platform maintains a strict separation between two things:

1. **Numeric range classification** — determined by the Named Range Set and patient demographics
2. **Clinical interpretation** — generated based on patterns, symptoms, and context

Symptoms influence interpretation. They do not influence numeric ranges.

This separation is not incidental. It is foundational to how the system works.

---

## Why Symptoms Do Not Change Ranges

Consider a patient with a TSH of 2.4 mIU/L.

If that patient reports fatigue, you might suspect thyroid involvement. But the TSH value itself has not changed. The reference range that defines "optimal" has not changed. The numeric classification remains the same.

What changes is your interpretation. You might pay closer attention. You might order additional tests. You might consider the TSH in context of the symptom.

The platform mirrors this clinical reality. The numeric classification is objective and reproducible. The interpretation considers subjective factors like symptoms.

If symptoms could shift numeric ranges, the same lab value would receive different classifications based on what the patient reported. That would undermine reproducibility and auditability.

---

## How Symptoms Are Used

When symptoms are recorded in the patient's profile, the interpretation layer considers them.

The platform does not react to single symptoms in isolation. It looks for symptom clusters — patterns of related complaints that might suggest a particular physiological state.

For example:

- Fatigue alone might be noted but not emphasized
- Fatigue combined with cold intolerance, weight gain, and dry skin forms a cluster consistent with hypothyroid patterns

The interpretation layer recognizes these clusters and may surface them in the clinical summary.

---

## What AI Interpretation Does

The AI interpretation feature analyzes:

- The numeric classifications from the Named Range Set
- Patterns across multiple lab markers
- Recorded symptom clusters
- Known physiological interactions between markers
- Temporal trends if historical data exists

Based on this analysis, the AI generates interpretive text that:

- Summarizes findings
- Highlights patterns worth investigating
- Suggests possible explanations (as hypotheses, not diagnoses)
- Notes uncertainty when evidence is mixed

The AI explains within the chosen framework. It does not invent a new framework. It does not override the Named Range Set. It does not change numeric classifications.

---

## What AI Interpretation Does NOT Do

The AI does not diagnose. Diagnosis is a clinical act that requires professional judgment, patient interaction, and accountability. The AI provides decision support, not decisions.

The AI does not prescribe. Treatment recommendations require knowledge of the whole patient, including factors the AI cannot access.

The AI does not claim certainty where none exists. When findings are ambiguous, the AI says so. It presents competing hypotheses rather than false confidence.

---

## The Basis of Interpretations

Every AI-generated interpretation is grounded in:

| Basis | Description |
|:------|:------------|
| **Named Range Set** | The reference framework selected by the clinic |
| **Numeric Bands** | The objective classifications for each marker |
| **Symptom Clusters** | Patterns of reported symptoms |
| **Physiological Interactions** | Known relationships between markers |
| **Clinical Literature** | Cited knowledge embedded in the system |

The interpretation does not come from nowhere. It is traceable to these inputs.

---

## An Example

**Patient Context:**

- 45-year-old female
- Named Range Set: HealthPlus Functional
- Reported symptoms: fatigue, brain fog, weight gain

**Lab Results:**

- TSH: 3.2 mIU/L — classified as "Suboptimal High"
- Free T4: 0.9 ng/dL — classified as "Low Normal"
- Free T3: 2.1 pg/mL — classified as "Suboptimal Low"

**Numeric Classification (Layer 2):**

These classifications are determined by the Named Range Set and patient demographics. They do not change based on symptoms.

**AI Interpretation (Layer 3):**

> The thyroid panel shows a pattern consistent with suboptimal thyroid function. TSH is at the upper end of the functional range while Free T3 is at the lower end, suggesting possible conversion inefficiency.
>
> The reported symptoms (fatigue, brain fog, weight gain) are consistent with this pattern, though they are nonspecific and may have other causes.
>
> Consider evaluating thyroid antibodies and reverse T3 if not already included.

Note that the interpretation:

- References the numeric classifications
- Considers the symptom cluster
- Suggests further investigation
- Does not diagnose
- Acknowledges uncertainty

---

## Safety Boundaries

The platform includes safety boundaries for AI interpretation:

- Interpretations are flagged as decision support, not clinical conclusions
- Critical values trigger immediate alerts separate from interpretation
- The AI does not recommend specific medications or dosages
- Unusual patterns prompt the AI to suggest specialist consultation rather than speculate

These boundaries exist to ensure the platform supports clinical judgment without overstepping.

---

## Key Takeaways

- Symptoms do not change numeric ranges. They influence interpretation only.
- The platform looks for symptom clusters, not isolated complaints.
- AI interpretation analyzes patterns and generates hypotheses.
- AI does not diagnose, prescribe, or claim false certainty.
- Every interpretation is grounded in traceable inputs.
- Safety boundaries prevent the AI from overstepping its role.
