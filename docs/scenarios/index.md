---
title: Example Scenarios
layout: default
nav_order: 10
has_children: true
---

# Example Scenarios
{: .no_toc }

Illustrative walkthroughs showing how the platform's workflows fit together.
{: .fs-6 .fw-300 }

{: .important }
> **These are teaching examples, not clinical data.** Every lab value, range
> boundary, citation, and interpretation below is **illustrative only**. The
> platform never invents ranges or medical values — it applies only the
> configured, sourced ranges in the active Named Range Set, and surfaces only
> clinic-authored, sourced guidance. Do not read the specific numbers here as
> HealthPlus reference values.

---

## Scenario 1: Thyroid Panel Review

### Patient Profile
- **Age:** 38-year-old female
- **Chief Complaint:** Fatigue, weight gain, brain fog
- **Conventional Labs:** All "normal"

### Lab Results

*Illustrative values. The bounds and citation shown are placeholders for a
configured functional range — the app only applies ranges that exist in the
active range set.*

| Analyte | Value | Conventional Range | Functional Range | Status |
|:--------|:------|:-------------------|:-----------------|:-------|
| TSH | 3.2 mIU/L | 0.5–5.0 | 0.5–2.0 *(illustrative)* | **High** |
| Free T4 | 1.1 ng/dL | 0.7–1.8 | 1.0–1.5 *(illustrative)* | Normal |
| Free T3 | 2.4 pg/mL | 2.0–4.4 | 3.0–4.0 *(illustrative)* | **Low** |

**How the Status column actually reads.** The Status column renders one of
`Normal`, `Low`, `High`, `Unclassified`, or `N/A` — there is no "Func High" or
"Functional Low" flag. Whether a `High`/`Low` was decided against the functional
or the conventional range is shown by **which range cell carries the `Applied`
badge** (the other range reads `Available`). Here TSH reads `High` and `Low` for
Free T3 with the **Functional Range Applied**, because each value sits inside the
conventional interval but outside the tighter functional range. A small
`Func: <Normal/Low/High>` line under the Status summarises the functional flag.

### Walkthrough

**Step 1: Review the Flags**

TSH reads `High` and Free T3 reads `Low` with the functional range applied. In a
real review, this elevated-TSH / low-normal-T3 pattern would be a signal worth
examining further — the app flags it, it does not diagnose it.

**Step 2: Use Explainability**

Click **Explain** on a result to open the **Range sources** card. For each range
the dialog shows a **title** (`Functional range` / `Conventional laboratory
range`), a **bounds** subline, a state **badge** (`Applied` / `Available` /
`Applied - source needed` / `Applied - citation needed` / `Missing`), and a field
list:

- **Classification:** `High` *(illustrative)*
- **Source:** the configured source label for the applied range
- **Range set:** the active Named Range Set
- **Citation:** the linked citation, when one is attached *(illustrative here)*

The card reflects only what is configured for that range — if no source or
citation is attached, the badge reads `... - source needed` / `... - citation
needed` rather than showing an invented citation.

**Step 3: Generate AI Interpretation**

The AI narrative is generated from the classified results and any clinic-authored,
sourced guidance for the analytes involved. It is bounded by a guardrail
(`aiNarrativeConstraint`): where guidance is missing, it does **not** invent
clinical implications. The narrative summarises the pattern in plain language; it
never fabricates dosing, thresholds, or prognoses.

**Step 4: Recommendations**

The generated **Recommendations** are **generic, bounded, and non-dosing** — the
app does not produce supplement doses, drug protocols, or "treatment plans". The
real recommendation copy is:

1. Treat borderline findings as context signals, not major abnormal results in isolation.
2. Resolve missing range coverage and unit mappings before generating stronger clinical conclusions.
3. Review symptoms against thyroid, iron, inflammation, nutrient, and metabolic markers once classified.
4. Compare with prior results when available to determine whether values are stable, improving, or declining.

Any specific intervention or dose is a clinical decision made by the clinician,
not output by the platform.

---

## Scenario 2: Pregnancy Context

### Patient Profile
- **Age:** 32-year-old female
- **Status:** 22 weeks pregnant (2nd trimester)
- **Concern:** Routine prenatal labs

{: .warning }
> **Demographic range stratification is an authoring capability, not shipped
> seed behavior.** The schema supports age / pregnancy / menstrual-phase
> dimensions, but the **seeded** functional ranges are adult (age 18–100) with
> **no** pregnancy or menstrual-phase values populated (see app issue #38). So
> the platform does **not** currently auto-substitute trimester-adjusted ranges
> when you set pregnancy context. The tables below illustrate what
> pregnancy-specific range authoring *would* look like — the numbers are
> examples, not values the app applies today.

### Lab Results — illustrative, without a pregnancy-specific range

| Analyte | Value | Functional Range | Status |
|:--------|:------|:-----------------|:-------|
| TSH | 2.8 mIU/L | 0.5–2.0 *(illustrative)* | **High** |
| Ferritin | 35 ng/mL | 50–150 *(illustrative)* | **Low** |
| Hemoglobin | 11.2 g/dL | 12.5–14.5 *(illustrative)* | **Low** |

### Lab Results — illustrative, *if* a pregnancy-specific range were authored

| Analyte | Value | Pregnancy-Adjusted Range | Status |
|:--------|:------|:-------------------------|:-------|
| TSH | 2.8 mIU/L | 0.2–3.0 *(illustrative)* | **Normal** |
| Ferritin | 35 ng/mL | 30–150 *(illustrative)* | **Normal** |
| Hemoglobin | 11.2 g/dL | 10.5–13.5 *(illustrative)* | **Normal** |

### Walkthrough

**Step 1: Set Patient Context**

Pregnancy context is a real field on the patient profile:

1. Edit patient profile
2. Toggle **Currently Pregnant**
3. Set stage / trimester
4. Enter gestational age

**Step 2: Understand Range Resolution**

When a range set *does* include demographic-specific ranges, the matching engine
selects the most specific range matching the patient's age, sex, and (where
populated) pregnancy or menstrual-phase context. With the currently seeded adult
ranges, the applied range is the adult range regardless of pregnancy status — so
the "resolves to Normal" transition above is illustrative of authored behavior,
not current seed behavior.

**Step 3: Use Explainability**

The Explain dialog's **Range sources** card shows exactly which range was
applied and its source, so it is always transparent which range produced a
`High` / `Low` / `Normal` — including when the applied range is the generic adult
range rather than a pregnancy-specific one.

---

## Scenario 3: Range Override Promotion

### Patient Profile
- **Age:** 45-year-old female *(illustrative case)*
- **Context:** treated thyroid patient with a tighter personal target

### The Situation

Suppose a patient does best with a tighter TSH target than the standard
functional range provides. A **patient-specific range override** records that
tighter target for this patient, and the **promotion** workflow can generalise a
proven override to a persona or globally.

{: .warning }
> **There is no in-app "create override" screen.** The Explain dialog does not
> have an "Add Override" button — under *Clinician commentary* it offers **Add
> clinician note**, which records context on a range, it does not create a range.
> Patient overrides are currently written only via the seed/e2e path (a direct
> data insert); no create-override UI or API route exists in the app. The
> **Promote** workflow below, however, is a real, shipped flow.

### Walkthrough

**Step 1: An Override Exists**

Assume a patient-specific TSH override already exists for this patient (seeded).
Its rationale and bounds are recorded with it. *(Bounds shown in examples are
illustrative.)*

**Step 2: Review in Pending Promotions**

Open the **Pending Promotions** card — described as *"Patient-specific range
overrides ready for review"*, with a `{n} pending` badge and columns **Analyte |
Range | Type | Applied By | Action**. Click **Promote** on the override.

**Step 3: Promote**

The **Promote Range Override** dialog offers:

- **Scope:** Persona or Global
- **Reviewer** field
- **Persona identifier** (persona scope only)
- **Rationale (optional)**
- Submit: **Promote range**

Promoting to a persona makes the tighter target available to be applied to other
patients assigned that persona.

**Step 4: Precedence**

Once promoted, range resolution follows precedence **patient → persona → global →
conventional**: a patient override wins over a persona range, which wins over a
global range, which wins over the conventional range.

---

## Key Takeaways

{: .important }
> Patient context and provenance drive interpretation. Always open **Explain** to
> confirm which range was applied and where it came from before making clinical
> decisions.

1. **The functional lens surfaces values a conventional-only view would pass over** — shown by which range carries the `Applied` badge, not by a separate "Functional" flag.
2. **Context matters** — but only stratification that is actually authored into the active range set is applied; the shipped seed uses adult ranges.
3. **Explainability provides transparency** — the Range sources card always shows the applied range, its source, and its citation status.
4. **Overrides enable personalization** — proven overrides can be **promoted** to a persona or globally (there is no in-app create-override screen yet).
5. **AI assists but doesn't replace** — narratives are bounded and non-dosing; the clinician reviews, decides, and is attributed.
