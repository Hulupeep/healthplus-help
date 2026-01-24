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
2. Look for results flagged as:
   - **Functional High** (red)
   - **Functional Low** (red)
3. Click **Explain** to understand the flag
4. Review the range precedence chain
5. Check for clinician comments

### Using Explainability

1. Find the result you want to understand
2. Click the **Explain** button
3. Review the dialog sections:
   - Applied range and why
   - Patient context factors
   - Citation sources
   - Version history
4. Add a comment if you have clinical insight

---

## Range Management

### Creating a Patient Override

1. Click **Explain** on the relevant result
2. Click **Add Override**
3. Enter new range bounds
4. Provide clinical rationale
5. Enter your name
6. Click **Create Override**

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

## Tips for Success

{: .tip }
> Take time to set up patient context correctly—it significantly impacts interpretation accuracy.

### Before Uploading Results
- Verify patient demographics are correct
- Update pregnancy/cycle status if applicable
- Assign appropriate persona if known

### After Reviewing Results
- Document your clinical reasoning
- Add comments for unusual interpretations
- Consider creating overrides for individual needs

### For AI Interpretations
- Always review before saving
- Edit to add patient-specific nuance
- Attribute appropriately
