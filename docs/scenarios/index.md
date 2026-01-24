---
title: Example Scenarios
layout: default
nav_order: 10
has_children: true
---

# Example Scenarios
{: .no_toc }

Detailed walkthroughs demonstrating the platform's capabilities with real-world clinical cases.
{: .fs-6 .fw-300 }

---

## Scenario 1: Thyroid Panel Review

### Patient Profile
- **Age:** 38-year-old female
- **Chief Complaint:** Fatigue, weight gain, brain fog
- **Conventional Labs:** All "normal"

### Lab Results

| Test | Value | Conventional | Functional | Flag |
|:-----|:------|:-------------|:-----------|:-----|
| TSH | 3.2 mIU/L | 0.5-5.0 ✓ | 0.5-2.0 | **Func High** |
| Free T4 | 1.1 ng/dL | 0.7-1.8 ✓ | 1.0-1.5 | Normal |
| Free T3 | 2.4 pg/mL | 2.0-4.4 ✓ | 3.0-4.0 | **Func Low** |

### Walkthrough

**Step 1: Review the Flags**

TSH is flagged Functional High, and Free T3 is flagged Functional Low. This pattern—elevated TSH with low-normal T3—suggests conversion impairment.

**Step 2: Use Explainability**

Click "Explain" on TSH:
- Range applied: 0.5-2.0 mIU/L (Global Functional)
- Citation: "Optimal Thyroid Function, JCEM 2022"
- No patient override or persona applied

**Step 3: Generate AI Interpretation**

The AI identifies the pattern:

> "This combination suggests subclinical hypothyroidism with impaired T4→T3 conversion. The pituitary is signaling for more hormone (elevated TSH) while T3 remains suboptimal despite adequate T4."

**Step 4: Treatment Recommendations**

- Assess nutrient cofactors (selenium, zinc, iron)
- Check thyroid antibodies for Hashimoto's
- Consider thyroid support if symptoms persist

---

## Scenario 2: Pregnancy Context

### Patient Profile
- **Age:** 32-year-old female
- **Status:** 22 weeks pregnant (2nd trimester)
- **Concern:** Routine prenatal labs

### Lab Results (Without Context)

| Test | Value | Standard Func | Status |
|:-----|:------|:--------------|:-------|
| TSH | 2.8 mIU/L | 0.5-2.0 | **High?** |
| Ferritin | 35 ng/mL | 50-150 | **Low?** |
| Hemoglobin | 11.2 g/dL | 12.5-14.5 | **Low?** |

### Lab Results (With Pregnancy Context)

| Test | Value | Pregnancy-Adj | Status |
|:-----|:------|:--------------|:-------|
| TSH | 2.8 mIU/L | 0.2-3.0 | **Normal** |
| Ferritin | 35 ng/mL | 30-150 | **Normal** |
| Hemoglobin | 11.2 g/dL | 10.5-13.5 | **Normal** |

### Walkthrough

**Step 1: Set Patient Context**

Before interpreting, ensure pregnancy context is set:
1. Edit patient profile
2. Toggle "Currently Pregnant"
3. Set stage: Second trimester
4. Enter gestational age: 22 weeks

**Step 2: Observe Range Changes**

After context is applied, all flags resolve. The explainability shows:

> "Pregnancy context applied. Using 2nd trimester ranges per ACOG guidelines."

**Step 3: Understand Why**

Click "Explain" on TSH:
- Pregnancy suppresses TSH in 1st trimester (hCG effect)
- TSH normalizes by 2nd trimester
- Values up to 3.0 mIU/L are expected

---

## Scenario 3: Range Override Promotion

### Patient Profile
- **Age:** 45-year-old female
- **Diagnosis:** Hashimoto's thyroiditis
- **Treatment:** Levothyroxine 75mcg

### The Problem

Standard functional TSH range (0.5-2.0) doesn't account for this patient's medication-adjusted target. She feels best with TSH between 0.5-1.5.

### Walkthrough

**Step 1: Create Patient Override**

1. View TSH result
2. Click Explain → Add Override
3. Enter new range: 0.5-1.5 mIU/L
4. Rationale: "Hashimoto's on levothyroxine. Patient symptomatic above 1.5."
5. Save

**Step 2: Validate Over Time**

Monitor the patient's response. After 3 months, confirm:
- Symptoms improved with TSH in 0.5-1.5 range
- Override is clinically appropriate

**Step 3: Promote to Persona**

Recognize this applies to other Hashimoto's patients:

1. Find override in Pending Promotions
2. Click Promote
3. Target: Persona
4. Persona ID: `hashimotos-treated`
5. Rationale: "Tighter TSH targets for treated Hashimoto's patients"
6. Submit

**Step 4: Apply Persona to Other Patients**

Now any patient with Hashimoto's on thyroid medication can be assigned the `hashimotos-treated` persona, automatically applying the optimized range.

---

## Key Takeaways

{: .important }
> Patient context dramatically affects interpretation. Always verify context before making clinical decisions.

1. **Functional flags reveal what conventional labs miss**
2. **Context matters** - pregnancy, cycle phase, conditions
3. **Explainability provides transparency** - always check the reasoning
4. **Overrides enable personalization** - promote when patterns emerge
5. **AI assists but doesn't replace** - always review and attribute
