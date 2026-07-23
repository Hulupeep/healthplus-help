---
title: Getting Started
layout: default
nav_order: 2
---

# Getting Started with HealthPlus
{: .no_toc }

A quick introduction to using the Lab Results Dashboard effectively.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Quick Start for Clinicians

### Step 1: Add a Patient

1. Navigate to **Patients** in the main menu
2. Click **Add New Patient**
3. Enter demographics:
   - First and last name
   - Date of birth
   - Sex at birth (critical for range selection)
   - Contact information
4. Click **Create Patient**

### Step 2: Set Patient Context

For female patients, capture reproductive context:

1. Go to the patient's **Patient** tab
2. Click **Edit**
3. Toggle pregnancy status if applicable
4. Set menstrual phase if relevant for hormone panels
5. Click **Save Changes**

### Step 3: Upload Lab Results

You have two options:

**Option A: CSV Upload**
1. Go to the patient's **Lab Results** tab
2. Click **Upload Results**
3. Select your CSV file
4. Map columns to analytes
5. Click **Upload**

**Option B: Manual Entry**
1. Go to the patient's **Lab Results** tab
2. Click **Enter Manually**
3. Select the analyte
4. Enter value and unit
5. Click **Save Result**

### Step 4: Review Flagged Results

After upload:
1. Review the dual-range display — each row compares the value against the
   **Conventional Range** and the **Functional Range** side by side.
2. Read the **Status** column. It shows **Normal**, **Low**, or **High** when the
   applied range can classify the result (and **Unclassified** or **N/A** when it
   cannot). A functional concern surfaces as a **High** or **Low** status driven by
   the tighter Functional Range, so a result inside the conventional interval can
   still read **High** functionally.
3. Note which range drove that status: the applied range cell carries an
   **Applied** badge, while the other range shows **Available**.
4. Click **Explain** to understand why a result was flagged and which range was applied.

### Step 5: Generate Interpretation

1. Go to the **Interpretations** tab
2. Click **Generate AI Interpretation**
3. Review and edit the generated summary
4. Add your name for attribution
5. Save the interpretation

---

## Understanding the Interface

### The Unified Patient Dashboard

The dashboard uses a tabbed interface:

| Tab | Purpose | Status |
|:----|:--------|:-------|
| **Patient** | Demographics, pregnancy/cycle context | Available |
| **Symptoms** | Patient-reported symptoms and questionnaire entry | Available |
| **Lab Results** | All test results with dual ranges | Available |
| **Interpretations** | AI-generated clinical summaries | Available |
| **Protocol** | Treatment recommendations and intervention plans | Placeholder — not yet available |
| **Side Effects** | Tracking adverse reactions | Placeholder — not yet available |
| **Follow-up** | Scheduling next steps | Placeholder — not yet available |

> **Note:** The **Protocol**, **Side Effects**, and **Follow-up** tabs are visible in the
> dashboard but their features are not built yet. Each opens an empty state whose primary
> action button is **disabled** and labeled *"This feature isn't available yet"* — so there is
> nothing to log or schedule there for now. This is expected behavior, not a bug.

### Reading Lab Results

Each result row shows:

```
┌────────────────────────────────────────────────────────────────────────┐
│ Analyte  │ Value      │ Conventional Range │ Functional Range │ Status  │
├──────────┼────────────┼────────────────────┼──────────────────┼─────────┤
│ TSH      │ 3.2 mIU/L  │ 0.5 - 5.0          │ 0.5 - 2.0        │ High    │
│          │            │ [Available]        │ [Applied]        │         │
└────────────────────────────────────────────────────────────────────────┘
```

- **Analyte**: Test name and full description
- **Value**: The measured result with units
- **Conventional Range**: Standard laboratory reference, with an **Applied** or
  **Available** badge (and a *source needed* / *citation needed* note when its
  provenance is incomplete)
- **Functional Range**: The clinic's optimal-health threshold, badged the same way
- **Status**: The classification of the applied range — **Normal**, **Low**,
  **High**, **Unclassified**, or **N/A**

In the example above TSH is 3.2 mIU/L: inside the conventional interval (0.5–5.0)
but above the functional upper bound (2.0), so the Functional Range is **Applied**
and the Status reads **High**.

---

## What's Next?

Now that you understand the basics:

1. [Learn why functional ranges differ]({% link docs/conventional-to-functional.md %})
2. [Understand patient context and personas]({% link docs/patient-context.md %})
3. [Master the explainability system]({% link docs/explainability.md %})
4. [Create custom range overrides]({% link docs/range-overrides.md %})
