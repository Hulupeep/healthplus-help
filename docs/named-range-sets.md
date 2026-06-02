---
title: Named Range Sets
layout: default
nav_order: 5
---

# Named Range Sets
{: .no_toc }

Understanding the functional range frameworks that power HealthPlus functional classifications.
{: .fs-6 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What Are Named Range Sets?

A **Named Range Set** is a curated, versioned collection of **functional ranges**. It represents the clinic's functional interpretation framework.

Examples include:

- Optimal Wellness Functional
- Athletic Performance Functional
- Reproductive Health Functional
- A clinic-specific custom functional set

{: .important }
Named Range Sets are for functional ranges. Conventional reference intervals are managed separately in [Conventional Reference Ranges]({% link docs/conventional-reference-ranges.md %}).

---

## Why Only One Functional Set Is Active

A clinic should have one active functional range set at a time.

That active set answers:

> "Which functional philosophy should HealthPlus use when classifying patient results?"

If two functional sets were active at the same time, the same result could receive conflicting functional classifications. HealthPlus avoids that by requiring one active functional set for the clinic.

---

## What the Range Set Catalog Shows

The Range Set Catalog lists available functional sets.

| Display item | Meaning |
|:-------------|:--------|
| **Active** | This is the functional set currently used for new functional classifications. |
| **Activate** | This set is available but not currently active. |
| **Built-in** | The set is provided by HealthPlus. |
| **Custom** | The set was created or maintained by your clinic. |
| **Range count** | Number of functional range definitions in the set. |
| **Refs** | Number of linked source references or citation groups. |

If you see a card named "Standard Reference Ranges", treat it as a conventional catalog reference, not as the clinic's functional target set, unless your organization has explicitly built a conventional-aligned functional set.

---

## How Functional Range Selection Works

For each result, HealthPlus resolves functional ranges in this order:

```
1. Patient-specific functional override
2. Persona or cohort-specific functional range
3. Active clinic functional Named Range Set
```

The most specific matching range wins.

Matching can consider:

- Analyte
- Unit
- Specimen type
- Biological sex
- Age
- Pregnancy status
- Menstrual cycle phase, when relevant
- Effective dates and version

---

## What Named Range Sets Do Not Control

Named Range Sets do not control:

- The patient's measured result value.
- The conventional range printed on an uploaded lab report.
- Provider-specific conventional intervals such as Quest or Labcorp.
- AI narrative wording by itself.
- Symptoms or diagnoses.

They provide functional numeric boundaries. Interpretation is layered on top after classification.

---

## Built-In and Custom Sets

Built-in sets are maintained by HealthPlus and may be locked once published.

Custom sets allow a clinic to create its own functional framework. A custom set is appropriate when:

- The clinic uses a different functional philosophy.
- The clinic has a specialty population.
- The clinic needs to adjust functional ranges across many patients.

For one patient, use a patient override instead of changing the clinic's active set.

---

## Versioning and Auditability

Published functional range sets are versioned.

| Status | Meaning |
|:-------|:--------|
| **Draft** | Can be edited before use. |
| **Published** | Locked for clinical use. |
| **Active** | The published set currently selected by the clinic. |
| **Deprecated** | Kept for historical reference but not recommended for new use. |

Historical results should remain tied to the version that was active when they were classified.

---

## Explainability Integration

The Explain dialog shows which functional source was used:

```
Functional range source: Optimal Wellness Functional v1.0
Scope: Global functional range
Bounds: 0.5 - 2.0 mIU/L
Source status: Citation linked
Reason applied: No patient or persona override matched this result.
```

If no functional range is available, the Explain dialog should say so directly and the result should be treated as unclassified for functional status.

---

## Relationship to Conventional Ranges

Conventional ranges are shown beside functional ranges, but they come from a different workflow.

| Workflow | Controls |
|:---------|:---------|
| **Range Set Catalog** | Functional range sets and functional status |
| **Conventional Reference Ranges** | Lab/provider reference intervals and conventional status |

This separation lets HealthPlus show both views:

- "How does the provider or lab view this result?"
- "How does the clinic's functional framework view this result?"

---

## Next Steps

- [How Named Range Sets Work →]({% link docs/how-named-range-sets-work.md %})
- [Conventional Reference Ranges →]({% link docs/conventional-reference-ranges.md %})
- [Range Sources and Citations →]({% link docs/range-sources-and-citations.md %})
- [Admin: Range Set Management →]({% link docs/guides/admin/range-set-management.md %})
