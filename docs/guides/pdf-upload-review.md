---
title: PDF Upload and Review
layout: default
parent: Step-by-Step Guides
nav_order: 1
permalink: /docs/guides/pdf-upload-review/
---
<!-- META: {"type":"doc.user-guide","purpose":"Explain the real PDF upload, OCR, page attestation, proposal review and separate import workflow","reviewed":"2026-09-09","issue":"https://github.com/Hulupeep/healthplus-help/issues/78","sources":["PdfReportUploadCard.tsx","PdfExtractionVerification.tsx","pdf_extraction_automation.sql"]} -->

# PDF upload and review

Upload a laboratory PDF, wait for processing, then compare the proposed results
against the original report. **Uploading, accepting a proposal, attesting a page
and verifying extraction do not import clinical results.** Import is a separate,
authorised action.

## On this page
{: .no_toc }

1. TOC
{:toc}

## Before you start

- Sign in with permission to upload reports and review extractions. Ask your clinic
  administrator if a page or action is unavailable; do not use another person's login.
- Open the correct patient. Compare the patient identifiers in the PDF with the
  patient record before confirming ownership. A filename alone is not enough.
- Use a PDF no larger than **20 MiB**. Prefer a clear, complete report with all pages.
- Keep the original available. Extraction can miss rows, misread labels, decimal
  points, units or reference ranges—even when the safety scan is clean.

The PDF controls are separate from the CSV panel/context controls below them.
Choosing a CSV panel or clicking **Upload Results** is not how you submit the PDF.
The page subtitle may still mention CSV; use the **Upload PDF lab report** card.

## Upload a PDF

1. Open the patient's upload page.
2. In **Upload PDF lab report**, choose the PDF under **PDF report (maximum 20 MiB)**.
3. Check **I confirm this report belongs to [patient]** only after verifying ownership.
4. Click **Upload PDF** once. The button is unavailable until a file and confirmation are supplied.
5. Watch the status panel. Processing continues automatically on the hosted worker;
   you do not need to run a scanner or OCR program on your own computer.
6. Save the page URL if you need to leave. After upload it contains `pdfReportId`,
   allowing you to return to the same report and read its latest saved status.
7. At **Ready for review**, click **Review extracted results**.

The report remains private while safety scanning, PDF reading and extraction run.
“Local” in the interface means application-controlled processing, not your laptop.
Do not upload another copy just to refresh progress.

## Upload statuses and what to do

| Status | Meaning | Your next action |
|:--|:--|:--|
| Awaiting safety scan | The uploaded report is queued. | Wait; keep the report URL. If it remains stuck, contact support with the report ID. |
| Scanning | The safety scanner is checking the file. | Wait. This is not a review of medical accuracy. |
| Reading PDF | The worker is checking the document and readable text. | Wait. |
| Running OCR | Text is being read from page images. | Wait; scanned, multi-page reports can take longer. |
| Extracting results | Text is being turned into structured proposals. | Wait. Not every PDF uses every intermediate stage. |
| Ready for review | Proposals are available, not imported results. | Click **Review extracted results** and compare them with the original. |
| Retry scheduled | A temporary processing problem occurred. | The same report will retry automatically. Do not upload it again. |
| Processing needs attention | Automatic retries have been exhausted. | Ask your administrator/support to investigate and retry the existing report after fixing the cause. |
| Rejected by safety scan | The scanner rejected the file. | Stop. Contact support and obtain a safe source through your clinic's process; do not bypass scanning. |
| Report rejected | The PDF could not be processed as a supported report. | Ask support to inspect the reason; obtain a valid replacement if needed. |
| PDF upload failed | The upload request did not complete successfully. | Read the error. If a report URL/ID already exists, check it before uploading again. For access errors, contact your administrator. |

The progress boxes show saved processing stages, not a percentage of results that
are correct. A failed/retrying report may show earlier boxes again; read the status
title and message for the next action.

### Other upload details

- **Assessment: `insufficient_native_text`** means the file did not have enough
  readable embedded text. With **Running OCR** or **Ready for review**, this explains
  why OCR was needed; it is not itself a failed upload.
- **Safety scan: clean** means no threat was detected by that scan. It does not
  certify the patient, result values, completeness or clinical interpretation.
- **49 extracted candidates; no results imported** means 49 proposals were found.
  It does not prove that the original contains exactly 49 reportable results.
- **Report** is the tracking ID to quote to support.
- **SHA-256** identifies the uploaded file content for integrity checks. It is not
  a score, diagnosis or action you need to complete.

## Reviewing the extraction

The **Verify PDF extraction** page has two separate working areas:

- **Rendered source report**: the original PDF pages. Scroll inside this panel to
  inspect every page. The label **Original page N** identifies the page in view.
- **Proposed regions**: extracted items, usually one potential result per card.
  Each card names its source page and shows an extracted excerpt.

The two panels do not automatically stay aligned. Scrolling the original to page 4
does not mean the first proposal also comes from page 4. Match the proposal's page
number and label to the original before making a decision. The excerpt is extracted
text, **not an independent substitute for looking at the original**.

Recommended order: inspect one original page, check its proposed results and any
missing rows, attest that page when satisfied, then move to the next page.

## What Attest page means

**Attest page N** records your explicit statement that you inspected that numbered
source page. It saves review evidence associated with your user and the source-page
hash. It changes to **Page N inspected**, and the reviewed-page count increases.

Before clicking it:

1. Read the whole numbered original page—not just the visible portion of the scroll panel.
2. Compare its reportable results with the proposals assigned to that page.
3. Check for omitted rows, duplicate proposals, notes, units, reference ranges and flags.
4. Resolve any uncertainty or missing result before declaring the extraction complete.

You must also inspect pages containing only notes, explanations or other non-result
content. They are still part of the source report.

Attestation **does not** accept every proposal on that page, fix missing data, import
results, certify medical interpretation or automatically inspect the page for you.
The button refers to its own number, not whichever page you are currently viewing.

For example, **Pages 1/7 · regions 0/49** means one page has a saved inspection
attestation and no proposed regions have been accounted for. It does **not** mean
OCR read only one page. Page review and region review are separate counters.

## What Proposed regions means

A region is a piece of source content that the extraction process says needs an
explicit review decision. A result card normally contains a test label, proposed
value/unit, source page and excerpt. These are proposals, not saved patient results.

For each card, locate the matching original result and choose one action:

| Control | Use it when | What it records |
|:--|:--|:--|
| Accept against source | The existing proposal agrees with the original. | An accepted region decision. It does not save edits typed into the boxes. |
| Save correction | The proposed numeric value or unit needs correcting and you can verify the correct content. | The edited numeric value/unit and a correction decision. |
| Reject proposal | The proposed item should not become a reportable result, for example a duplicate or non-result misread. | A rejected proposal decision. It does not reject the whole PDF. |
| Classify as non-result | A separate unresolved region without a candidate is genuinely non-result context. | A non-result decision for that region. Do not use it to dismiss a missing lab result. |

After a decision, the card may show **Region accounted** and disabled controls.
“Accounted” means a decision was recorded; it does not mean the proposal was accepted
or imported. Rejected and corrected regions also count as accounted.

### Correcting a value or unit

1. Compare the original result, including decimal point, sign/comparator and unit.
2. Edit the value and/or unit boxes on that proposal.
3. Click **Save correction**, not **Accept against source**.
4. Wait for the saved state to reload before acting on the next item.

The correction form supports a numeric value and a nonblank unit. It is not a
general editor for labels, reference ranges, flags, dates or missing rows. The card
heading/excerpt preserves the raw extraction; it may still show the original OCR
text after a correction. Do not assume that raw heading is the final saved value.

If the source has a comparator such as “<”, a qualitative result, an unreadable value,
or another detail the form cannot faithfully represent, **do not guess or force it
into a number**. Leave the extraction incomplete and ask the clinic's reviewer/support
for an appropriate correction or separate verified-entry workflow.

### Missing results or a wrong decision

There is currently no “Add missing result” or “Undo region decision” control in this
OCR review panel. If the original has results without proposals, or you saved a wrong
decision, stop before final verification and contact your administrator/reviewer with
the report ID, page number and the issue. Use your clinic's secure support channel.

Resolving all generated cards cannot prove that nothing was missed. Do not attest
completeness merely to enable the final button. A clinician may need a separately
verified manual-entry process, with duplicate checks, for unsupported or missing data.

## Extraction status and technical labels

| Label | Meaning |
|:--|:--|
| `ai_human` | The exception/review route. It requires human review; the name does not prove an external AI model was used. |
| `deterministic` | An exact extraction profile was used. This still creates proposals, not automatic clinical imports. |
| `awaiting_human` | Human page/region review and final verification remain outstanding. This is expected, not a scanner error. |
| `verified` | Extraction verification is complete. Clinical import remains separate. |
| Reason: `local_ocr` | OCR was needed to read source images using the controlled worker. |
| `tesseract_wasm · 7.0.0 · eng · positioned-lab-rows-v1` | OCR engine/version, language and parser provenance. These identifiers are not confidence scores. |
| Coverage / Pages / regions | Saved human inspection and region-accounting totals against declared totals. |
| Unresolved | Declared regions still needing a decision. It is not the count of medically abnormal results. |
| Output SHA-256: pending human verification | A final verified-output fingerprint has not yet been recorded. This is different from the uploaded PDF's hash. |
| 30-day straight-through: 0/6; exceptions 6 | Organisation-wide processing counts for the window: zero verified deterministic reports out of six safety-accepted reports, with six on the exception route. Not this PDF's accuracy or a clinical failure rate. |

If an unfamiliar processing/error state appears, do not infer that the report has
been reviewed. Keep its report ID and ask support to inspect the saved state.

## Complete verification and import

**Verify complete extraction** becomes available only when every source page is
attested, every declared region is accounted for and no declared region is unresolved.
It is also disabled while an action is saving or once verification is complete.

1. Check the original again for omissions and unresolved uncertainty.
2. Confirm the counters account for all pages and declared regions.
3. Click **Verify complete extraction** only when your review supports that statement.
4. Wait for **Human verification complete** / `verified`.

**This creates no clinical results.** The current `ai_human`/OCR screen does not expose
the separate clinical promotion form after verification. If you need to import these
verified proposals, ask the authorised clinic reviewer/administrator for the supported
promotion workflow. Do not repeatedly click Verify or re-upload to try to import.

Where **Clinical candidate review** is available (currently the deterministic route),
it has separate controls: **Save review fields**, **Needs mapping**, **Reject** and
**Promote one result**. Promotion needs the correct canonical analyte, numeric value,
unit and test date, and appropriate permission. The date field initially defaults to
today: replace it with the correct source test date. Never invent an analyte UUID or
promote an unmapped item. Only a successful **Promote one result** creates that clinical
result; check the resulting record before promoting anything else.

## Troubleshooting and safe next steps

- **Blank original panel:** wait for rendering, then reload the saved report URL.
  If offered, use **Open private source** to inspect the authorised original in a new
  tab. If the original remains unavailable, do not accept or attest from OCR text alone.
- **Another session won:** another reviewer or tab changed the saved version. The
  page reloads authoritative evidence. Re-read it before deciding what still needs work;
  do not repeatedly submit an old action or assume unsaved edits were kept.
- **Action not completed:** read the error, check your connection/permissions and
  re-read the report before retrying. If a decision may have saved, verify its state first.
- **Completion disabled:** check both page and region counters, unresolved items,
  in-progress saves and whether verification is already complete. Do not click attest
  merely to clear the counters.
- **You need to leave:** save the current report/review URL. Saved actions persist;
  unsaved edits in input boxes do not. Recheck persisted state on return.
- **Wrong patient's report:** stop reviewing/importing. Ask your administrator to
  handle the private upload under your clinic's correction process; do not promote it.
- **Support request:** provide the report ID, stage/error, approximate time and page
  number through an approved secure channel. Never put a patient's report, screenshot,
  personal identifiers or login credentials in a public GitHub issue.

For CSV/manual alternatives, see [Getting Started]({% link docs/getting-started.md %}).
