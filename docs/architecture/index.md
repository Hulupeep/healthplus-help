---
title: Platform Architecture
layout: default
nav_order: 10
has_children: true
---

# Platform Architecture
{: .no_toc }

Technical documentation on how HealthPlus is designed and why certain architectural decisions were made.
{: .fs-6 .fw-300 }

---

## Overview

This section covers the foundational architecture of the HealthPlus platform. Understanding these concepts helps clinicians and administrators make better use of the system.

## Key Architectural Concepts

| Concept | Description | Documentation |
|:--------|:------------|:--------------|
| **Philosophy vs Methodology** | The distinction between Named Range Sets (clinical worldview) and testing methodologies (specimen types) | [Read More →](philosophy-vs-methodology) |

---

## Why Architecture Matters

Understanding the platform's architecture helps you:

- **Make better configuration decisions** — Know what changes affect what
- **Troubleshoot issues** — Understand why a range was applied
- **Train your team** — Explain the system accurately
- **Request appropriate customizations** — Ask for the right thing

---

## Going Deeper

For a detailed treatment of how a clinic's worldview (the Named Range Set) stays separate from testing methodology (specimen type), read [Philosophy vs Methodology]({% link docs/architecture/philosophy-vs-methodology.md %}).

Administrators configuring range sets should also see the [Admin Guides]({% link docs/guides/admin/index.md %}).
