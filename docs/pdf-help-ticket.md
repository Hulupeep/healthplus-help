---
title: PDF help implementation ticket
nav_exclude: true
search_exclude: true
published: false
---
<!-- META: {"type":"delivery.ticket","purpose":"Track PDF user documentation and contextual app links","date":"2026-09-09"} -->

# PDF upload and extraction review: complete help and contextual buttons

## User problem

Users can upload a PDF and reach review but cannot tell what to do next, what
attestation means, why proposed regions remain unresolved, or whether results have
been imported. Getting Started still names obsolete controls.

## Scope

Help repo: Hulupeep/healthplus-help. App integration: Hulupeep/healthplus.
Create a searchable, navigable PDF guide; update Getting Started and guide index;
add visible Help buttons to the PDF upload card and extraction review page.
Reuse HelpLink and HELP_LINKS. No scanner, OCR, authorization, review or import changes.
Do not publish patient screenshots, identifiers, private PDFs or credentials.

## Acceptance criteria

1. The guide explains prerequisites, choosing the right patient, upload, every
   processing status and recovery, review navigation, source comparison and next steps.
2. Explain page attestation versus individual region decisions versus final
   verification versus separate clinical import. Use exact current button labels.
3. Explain `ai_human`, `awaiting_human`, `local_ocr`, coverage counters, source/output
   hashes and aggregate straight-through metrics without implying clinical accuracy.
4. Explicitly cover edits not saved by Accept, missing/unreadable results, non-result
   regions, stale sessions, disabled completion and unavailable promotion UI.
5. Both app surfaces expose a visible keyboard-accessible help link that opens the
   correct guide section in a new tab, with noopener/noreferrer and no patient data
   in the URL. Opening help cannot submit, attest or alter an extraction.
6. The guide is linked from Getting Started, Step-by-Step Guides and site navigation.
7. Build the Jekyll site, validate internal links/anchors, and execute browser checks
   for the guide and both app help controls. Report local versus deployed evidence honestly.

## Journey J-PDF-HELP

1. Open PDF upload → visible “PDF upload help”; open it → guide Upload a PDF section.
2. Return to the unchanged upload page → same file/confirmation state.
3. Open extraction review → visible “PDF review help”; open it → Reviewing the extraction.
4. Follow guide contents to Attest and Proposed regions → exact labels and safety instructions.
5. Read completion guidance → no automatic import; missing results prevent an honest attestation.

## Risk review

- First-time uploader: distinguish queued/processing from failure; never suggest repeated uploads for retries.
- Returning reviewer: counts reflect saved human decisions, not OCR progress; reload after conflicts.
- Reviewer encountering omissions: never attest completeness solely because all generated cards are resolved.
- Restricted user: no advice to bypass permissions; ask clinic administrator.
- Cross-repo release: publish guide before app links; never advertise unpublished help as live.

## Delivery evidence

Implemented in `docs/pdf-upload-review` (help repo) and `feat/pdf-upload-help` (app).
Jekyll build passed on 2026-09-09 with existing theme Sass deprecation warnings.
`scripts/verify-pdf-guide.js` executed against the real generated site: ten headings,
zero broken local anchors, and safety warnings present. The page is in the search index.
App journey `e2e/pdf_help.journey.js` passed on upload desktop, upload at 375px with
a selected PDF and checked confirmation, and existing review at 375px. Keyboard
activation opened the intended guide anchor in a new tab; zero PDF mutation requests;
original URL, upload state and review coverage preserved. Real local Supabase login;
no auth bypass or intercepted requests. No private PDF or screenshots published.
Production publication remains pending: release the help site before app links.
This direct documentation ticket does not claim Specflow gate certification.
