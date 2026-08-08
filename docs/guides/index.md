---
title: Step-by-Step Guides
layout: default
nav_order: 9
has_children: true
---

# Step-by-Step Guides
{: .no_toc }

Practical walkthroughs for common tasks in the HealthPlus platform.
{: .fs-6 .fw-300 }

---

## Patient Management

### Adding a New Patient

1. Navigate to **Patients** in the main menu
2. Click **Add New Patient**
3. Enter required information:
   - First and last name
   - Date of birth
   - Sex at birth
   - Contact information
4. Click **Create Patient**

### Updating Patient Context

1. Go to the patient's **Patient** tab
2. Click **Edit**
3. Update relevant fields:
   - Pregnancy status and details
   - Menstrual cycle information
   - Clinical notes
4. Click **Save Changes**

---

## Lab Results

### Uploading Lab Results (CSV)

1. Go to the patient's **Lab Results** tab
2. Click **Upload Results**
3. Select your CSV file
4. Verify column mapping
5. Click **Upload**
6. Review imported results

### Manual Result Entry

1. Go to the patient's **Lab Results** tab
2. Click **Enter Manually**
3. Select the analyte from the dropdown
4. Enter:
   - Result value
   - Unit
   - Collection date
   - Optional notes
5. Click **Save Result**

---

## Working with Results

### Reviewing Flagged Results

1. Navigate to the **Lab Results** tab
2. Check each result's **Status**, which reads **Normal**, **Low**, **High**, **Unclassified**, or **N/A** — there is no separate "Functional High/Low" status
3. Read the range badge in each column: **Applied** marks the range actually used for that result, **Available** a range that exists but was not applied. This badge (not the Status word) is how a functional classification is distinguished from a conventional one
4. Click **Explain** to understand how the status was determined
5. Review the range precedence chain (patient override → persona → global)
6. Check for clinician notes

### Using Explainability

1. Find the result you want to understand
2. Click the **Explain** button
3. Review the dialog sections:
   - Applied range and why
   - Patient context factors
   - Citation sources
   - Version history
4. Click **Add clinician note** to record clinical insight

---

## Range Management

### Adding a Clinician Note or Adjustment

The Explain dialog does not create a range override by entering new bounds — there is no in-app "create override" form. To record clinical input on a result:

1. Click **Explain** on the relevant result
2. Click **Add clinician note**
3. In the **Add Clinician Note or Adjustment** dialog, enter your commentary
4. Click **Add Comment**

Patient-scoped range overrides themselves come from configured data, not from this dialog. When an override exists it sits at the top of the precedence chain (patient override → persona → global) and can be advanced with the promotion flow below.

### Promoting to Persona

1. Locate the override in **Pending Promotions**
2. Click **Promote**
3. Select target scope (Persona or Global)
4. Enter persona identifier (e.g., `hashimotos-treated`)
5. Provide promotion rationale
6. Click **Promote range**

---

## AI Interpretations

### Generating an Interpretation

1. Go to the **Interpretations** tab
2. Click **Generate AI Interpretation**
3. Wait for generation to complete
4. Review the generated content
5. Make any necessary edits
6. Enter your name for attribution
7. Click **Save**

### Editing an Interpretation

1. Find the interpretation you want to edit
2. Click **Edit**
3. Make your changes
4. Enter your name (required)
5. Click **Save Changes**
6. The edit is recorded in version history

---

---

## Administration

### Range Set Management

For administrators managing Named Range Sets:

1. Navigate to **Admin** -> **Functional Range Sets**
2. View available range sets and their status
3. Browse individual ranges within each set
4. Select the active range set for your clinic
5. Manage draft range sets (with permissions)

[View full Admin Guide →]({% link docs/guides/admin/range-set-management.md %})

### Functional Range Sources

Before publishing a functional range set, every member needs traceable source support.

1. Add a citation, source citation ID, or clinic protocol note.
2. Enter a meaningful audit reason for add, edit, or remove actions.
3. Publish only after source gaps are resolved.

[View source requirements →]({% link docs/guides/admin/functional-range-source-requirements.md %})

---

## Tips for Success

{: .tip }
> Take time to set up patient context correctly—it significantly impacts interpretation accuracy.

### Before Uploading Results
- Verify patient demographics are correct
- Update pregnancy/cycle status if applicable
- Confirm date of birth and sex at birth — age and sex drive which range applies (demographics select the range; there is no persona-assignment step)

### After Reviewing Results
- Document your clinical reasoning
- Add clinician notes for unusual interpretations
- Add a clinician note or adjustment to capture individual clinical context

### For AI Interpretations
- Always review before saving
- Edit to add patient-specific nuance
- Attribute appropriately
