/**
 * Concert for a Cure 2026 — Daily Brief Email Relay
 *
 * Watches the "Ongoing Operations" Drive folder for files produced by the
 * concert-daily-brief remote trigger. When a new `Daily Brief — YYYY-MM-DD
 * (email-pending)` file appears, this script reads the content and emails
 * it to Wendy, then renames the file to mark it processed.
 *
 * Setup:
 *   1. Go to https://script.google.com → New project (sign in as wendy@chasingacurepd.org)
 *   2. Paste this file into Code.gs
 *   3. Save the project with a name (e.g. "Concert Daily Brief Relay")
 *   4. Click Run → relayDailyBriefs. Authorize Drive + Gmail scopes when prompted.
 *   5. Click the clock icon (Triggers) → Add Trigger:
 *        - Function: relayDailyBriefs
 *        - Deployment: Head
 *        - Event source: Time-driven
 *        - Time-based trigger: Minutes timer → Every 10 minutes
 *      Save. (Alternative: "Day timer" at 8am–9am ET if you want exactly one run.)
 *
 * The 10-minute cadence is safe because the script skips already-emailed files.
 */

const OPS_FOLDER_ID = '1o3iqfezjA0Y6rB0p8OEOn1rSZhFDHjnZ';
const RECIPIENT = 'wendy@chasingacurepd.org';
const PENDING_SUFFIX = '(email-pending)';
const TIMEZONE = 'America/New_York';

function relayDailyBriefs() {
  const folder = DriveApp.getFolderById(OPS_FOLDER_ID);
  const files = folder.getFiles();
  let emailed = 0;
  let skipped = 0;
  let errored = 0;

  while (files.hasNext()) {
    const file = files.next();
    const name = file.getName();

    if (!name.startsWith('Daily Brief —') || !name.includes(PENDING_SUFFIX)) {
      skipped++;
      continue;
    }

    try {
      const body = readFileContents(file);
      const subject = buildSubject(name);
      GmailApp.sendEmail(RECIPIENT, subject, body);

      const stamp = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd HH:mm');
      file.setName(name.replace(PENDING_SUFFIX, '(emailed ' + stamp + ' ET)'));

      emailed++;
      Logger.log('Emailed: ' + file.getName());
    } catch (e) {
      errored++;
      Logger.log('Error on ' + name + ': ' + e.toString());
    }
  }

  Logger.log('Done. emailed=' + emailed + ' skipped=' + skipped + ' errored=' + errored);
}

function readFileContents(file) {
  const mimeType = file.getMimeType();
  if (mimeType === MimeType.GOOGLE_DOCS) {
    return DocumentApp.openById(file.getId()).getBody().getText();
  }
  return file.getBlob().getDataAsString('UTF-8');
}

function buildSubject(fileName) {
  const match = fileName.match(/Daily Brief — (\d{4}-\d{2}-\d{2})/);
  const dateStr = match ? match[1] : Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd');
  const d = new Date(dateStr + 'T12:00:00Z');
  const pretty = Utilities.formatDate(d, TIMEZONE, 'EEEE, MMMM d');
  return 'Concert for a Cure — Daily Brief, ' + pretty;
}
