---
title: Home
layout: home
nav_order: 1
---

# HealthPlus Lab Results Dashboard
{: .fs-9 }

Transform conventional laboratory results into functional medicine interpretations with complete explainability.
{: .fs-6 .fw-300 }

[Get Started]({% link docs/getting-started.md %}){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[View on GitHub](https://github.com/Hulupeep/healthplus){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Core Concept

The HealthPlus platform operates on a fundamental principle:

{: .important }
> **Conventional ranges define the absence of disease. Functional ranges define optimal health.**

Traditional laboratory reference ranges are derived from population statistics—typically the middle 95% of all tested individuals. This includes people with subclinical conditions, poor diets, sedentary lifestyles, and undiagnosed health issues.

Functional medicine ranges are narrower, evidence-based thresholds that represent optimal physiological function, not merely the absence of pathology.

---

## Key Features

### 🔬 Dual-Range Display
Every lab result shows both conventional and functional ranges side-by-side, making it easy to identify when a "normal" result might still be suboptimal.

### 🎯 Context-Sensitive Analysis
The platform selects reference ranges by patient demographics — sex, age, pregnancy status, and menstrual phase. Clinical personas are a *precedence scope* for authored range sets (patient → persona → global → conventional), not an automatically matched cohort: there is no persona-assignment step, and the range matcher keys on demographics alone. Demographically stratified ranges are authoring-supported; today's seeded functional set uses broad adult ranges.

### 📊 Complete Explainability
Click "Explain" on any result to see which range was applied, why it was chosen, and the evidence supporting it.

### 🤖 AI-Assisted Interpretations
Generate clinical summaries that synthesize multiple flagged results into actionable insights.

### 🔄 Range Override Workflow
Add a clinician note or adjustment from the Explain dialog, and promote a configured range override to a reusable persona scope through the Promote Range Override flow. (Patient-specific ranges are configured/seeded — there is no in-app "create override" screen.)

---

## Quick Navigation

| Section | Description |
|:--------|:------------|
| [Platform Overview]({% link docs/platform-overview.md %}) | Understand how the system works |
| [Conventional to Functional]({% link docs/conventional-to-functional.md %}) | The core logic explained |
| [Named Range Sets]({% link docs/named-range-sets.md %}) | Versioned range collections for clinics |
| [Conventional Reference Ranges]({% link docs/conventional-reference-ranges.md %}) | Lab/provider reference interval management |
| [Range Sources and Citations]({% link docs/range-sources-and-citations.md %}) | Where range values come from and what source gaps mean |
| [Patient Context]({% link docs/patient-context.md %}) | Pregnancy, cycle, and persona handling |
| [Explainability]({% link docs/explainability.md %}) | Deep dive into the transparency system |
| [Range Overrides]({% link docs/range-overrides.md %}) | Create and manage custom ranges |
| [AI Interpretations]({% link docs/ai-interpretations.md %}) | Generate clinical summaries |
| [AI Decision Trace]({% link docs/ai-decision-trace.md %}) | How AI output explains classifications, symptoms, and guardrails |
| [Step-by-Step Guides]({% link docs/guides/index.md %}) | Practical walkthroughs |

---

## Getting Help

For technical support or feature requests, please [open an issue](https://github.com/Hulupeep/healthplus/issues) on GitHub.
