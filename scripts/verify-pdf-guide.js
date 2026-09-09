/* META
{"module":"pdf-guide-browser-check","type":"test.documentation","purpose":"Verify rendered help content and table-of-contents anchors on built Jekyll output","inputs":{"page":"PDF guide page"},"outputs":{"evidence":"required headings and zero broken local anchors"},"sideEffects":[],"issue":"https://github.com/Hulupeep/healthplus-help/issues/78"}
*/
async (page) => {
  await page.getByRole('heading', { name: 'PDF upload and review', exact: true }).waitFor()
  const headings = ['Upload a PDF', 'Upload statuses and what to do', 'Reviewing the extraction',
    'What Attest page means', 'What Proposed regions means', 'Correcting a value or unit',
    'Missing results or a wrong decision', 'Extraction status and technical labels',
    'Complete verification and import', 'Troubleshooting and safe next steps']
  for (const name of headings) {
    if (await page.getByRole('heading', { name, exact: true }).count() !== 1) throw Error(`Missing heading: ${name}`)
  }
  const missing = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')]
    .map(link => link.getAttribute('href').slice(1))
    .filter(id => id && !document.getElementById(decodeURIComponent(id))))
  if (missing.length) throw Error(`Broken anchors: ${missing.join(',')}`)
  const text = await page.locator('main').innerText()
  for (const phrase of ['does not save edits', 'do not guess', 'does not expose']) {
    if (!text.toLowerCase().includes(phrase)) throw Error(`Missing warning: ${phrase}`)
  }
  if (!text.includes('public GitHub issue')) throw Error('Missing privacy warning')
  return { headings: headings.length, brokenAnchors: 0, safetyWarnings: true, url: page.url() }
}
