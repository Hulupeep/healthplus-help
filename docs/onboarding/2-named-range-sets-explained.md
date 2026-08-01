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

## What Ships Today

HealthPlus seeds **one** functional Named Range Set out of the box:

**Optimal Wellness Functional (Default)**

This is the standard functional framework — optimized ranges intended for general wellness practices focused on preventive health. It sits alongside the conventional reference catalog ("Standard Reference Ranges"), which carries traditional laboratory intervals.

That is the extent of what is pre-installed. A Named Range Set is *named after a clinical philosophy*, and the platform lets a clinic author or request additional sets under any philosophy label — it only forbids naming a set after a laboratory, methodology, or specimen type (e.g. DUTCH, ZRT, "serum"), because those describe *how* a sample was measured, not *what* optimal means.

## Illustrative Worldviews (not shipped presets)
{: .no_toc }

The examples below illustrate the *kinds* of worldview a clinic could author or request. They are not a menu you select from today — only "Optimal Wellness Functional" is seeded.

**Athletic Performance** *(illustrative)*

A framework could calibrate ranges for trained athletes, whose "normal" hemoglobin, testosterone, or ferritin may differ from the general population.

**Conservative Reference** *(illustrative)*

A framework could align closely with conventional laboratory reference intervals, layering functional interpretation on top without significant threshold changes.

**Reproductive Health** *(illustrative)*

A framework could carry cycle-phase-specific ranges for hormones like progesterone and estradiol. The platform *does* support matching by menstrual phase (see Layer 2), but the seeded ranges do not yet populate cycle-phase or pregnancy variants, so this remains an authoring capability rather than shipped content.

Custom sets go through a review and publication process before becoming available; the platform does not invent range values on your behalf — only configured, sourced ranges are ever applied.

---

## The Three Layers of Range Application

Understanding how the platform applies ranges requires understanding three distinct layers.

**Layer 1: Named Range Set Selection**

This is the worldview layer. Your clinic chooses which Named Range Set to use. This decision affects every patient result processed by the system.

Changing your Named Range Set changes everything downstream. A hemoglobin of 17.0 might be "optimal" in one Named Range Set and "high" in another.

**Layer 2: Context Resolution Within the Set**

Once the Named Range Set is selected, the platform finds the most specific range definition within that set for each patient.

Matching is done on four demographic dimensions: **sex, age, pregnancy (yes/no), and menstrual phase.** A more specific definition (one that requires a menstrual phase, or pregnancy, or a narrow age band) is preferred over a general one. So for a 35-year-old menstruating woman, a range that specifies her menstrual phase wins over a general adult-female range for that analyte.

A few clarifications on what this layer does *not* do:

- **Pregnancy is matched as a yes/no flag, not by trimester.** The patient's pregnancy *stage* (e.g. "second trimester") is recorded on their profile, but it is not itself a range-selection key — the matcher only asks "pregnant or not."
- **Stratified content must exist to be matched.** The seeded functional ranges are currently unspecified adult ranges (roughly age 18–100, no pregnancy or menstrual variants populated — see healthplus#38), so in practice there is usually nothing more specific to fall back *to* yet. Cycle-phase and pregnancy stratification are supported by the matcher but not yet seeded.

If no more specific match exists, it uses the next most general definition available. This layer is automatic, driven by the patient's recorded demographics.

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

All numeric boundaries change. Classification thresholds change. A value that classifies as **Normal** under one set may classify as **Low** or **High** under another, because the boundaries defining those bands moved. (The status a result can carry is Normal, Low, High, or Critical Low / Critical High — "optimal" is the *philosophy* a set encodes, not a separate classification band.)

This is intentional. Different clinical philosophies define their boundaries differently.

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
