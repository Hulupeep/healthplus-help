---
title: "2. Named Range Sets Explained"
layout: default
parent: Clinician Onboarding
nav_order: 2
---

# Named Range Sets Explained
{: .no_toc }

**Who this is for:** Clinicians who are configuring the system or evaluating how it works.

---

## What Is a Named Range Set?

A Named Range Set is a complete reference framework for evaluating lab results.

It is not a single range. It is an entire library of ranges covering hundreds of analytes, with variations for different patient demographics.

When your clinic selects a Named Range Set, you are choosing a worldview. You are saying: "This is the reference framework that reflects our clinical philosophy."

---

## Examples of Named Range Sets

Different clinical contexts call for different reference frameworks.

**HealthPlus Functional (Default)**

This is the standard functional medicine framework. It uses optimized ranges based on functional medicine literature. It is appropriate for general wellness practices focused on preventive health.

**Athletic Performance**

This framework uses ranges calibrated for trained athletes. An athlete's "normal" hemoglobin, testosterone, or ferritin may differ significantly from the general population. This Named Range Set reflects those differences.

**Conservative Reference**

This framework aligns closely with conventional laboratory reference intervals. It is appropriate for practices that want functional interpretation layered on top of traditional ranges, without significant threshold changes.

**Reproductive Health**

This framework includes detailed cycle-phase-specific ranges for hormones like progesterone and estradiol. It is designed for fertility clinics where menstrual cycle timing matters.

Your clinic may have access to additional Named Range Sets, or may request custom sets for specialized patient populations.

---

## The Three Layers of Range Application

Understanding how the platform applies ranges requires understanding three distinct layers.

**Layer 1: Named Range Set Selection**

This is the worldview layer. Your clinic chooses which Named Range Set to use. This decision affects every patient result processed by the system.

Changing your Named Range Set changes everything downstream. A hemoglobin of 17.0 might be "optimal" in one Named Range Set and "high" in another.

**Layer 2: Context Resolution Within the Set**

Once the Named Range Set is selected, the platform finds the most appropriate range definition within that set for each patient.

If a patient is a 35-year-old pregnant woman in her second trimester, the system looks for a range definition matching "female, pregnant, trimester 2" within the selected Named Range Set.

If no exact match exists, it falls back to the next most specific definition available.

This layer is automatic. The system handles it based on the patient's recorded demographics.

**Layer 3: Interpretation Overlays**

After the numeric classification is complete, interpretation may be applied. This layer considers patterns, symptoms, and clinical context.

Interpretation does not change the numeric ranges. It explains what the classification might mean clinically.

---

## An Analogy: Choosing a Rulebook

Imagine you are scoring a test.

Selecting a Named Range Set is like choosing which rulebook to use. A competitive exam uses different scoring criteria than a placement test. Neither is wrong — they serve different purposes.

Once you have chosen the rulebook, you find the right section for your student. A younger student might be graded on a different curve than an older one.

Finally, you write the report card. The report card explains what the score means. It does not change the score itself.

Named Range Set selection is choosing the rulebook.
Context resolution is finding the right section.
Interpretation is writing the report card.

---

## What Changes When You Change Named Range Sets

When your clinic switches to a different Named Range Set, the entire reference framework changes.

All numeric boundaries change. Classification thresholds change. What was "optimal" might become "suboptimal" or vice versa.

This is intentional. Different clinical philosophies define optimal differently.

Historical results are not retroactively reclassified. They remain tied to the Named Range Set that was active when they were processed. This preserves auditability.

---

## What Does NOT Change Numeric Ranges

Patient symptoms do not change numeric ranges.

If a patient reports fatigue, their TSH reference range does not shift. The range is determined by the Named Range Set and the patient's demographics — not by their symptoms.

Symptoms may influence interpretation. They may be noted in the clinical summary. But they do not alter the numeric boundaries that define low, optimal, or high.

This separation is fundamental. It ensures that range classification is reproducible and not influenced by subjective factors.

---

## How Clinics Choose or Install Named Range Sets

Your clinic administrator selects the active Named Range Set during initial setup.

This selection can be changed at any time, but changes affect only future results. It is a significant decision that should reflect your practice's clinical philosophy.

If no existing Named Range Set matches your needs, your organization may be able to request a custom set. Custom sets go through a review and publication process before becoming available.

---

## Key Takeaways

- A Named Range Set is a complete reference framework, not a single range.
- Selecting a Named Range Set is choosing a clinical worldview.
- Three layers exist: set selection, context resolution, and interpretation.
- Changing your Named Range Set changes all downstream classifications.
- Symptoms do not change numeric ranges — only interpretation.
