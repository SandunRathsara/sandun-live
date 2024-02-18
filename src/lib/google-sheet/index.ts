import { google } from "googleapis";
import { DATA_FIELDS, DataFields } from "@/lib/google-sheet/data-fields.type";

export async function getSheetData(): Promise<Map<DataFields, string>> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  const range = "portfolio!A:Z";
  const values = new Map<DataFields, string>();

  try {
    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });
    data.data.values?.map((item) => values.set(item[0], item[1]));
  } catch (e) {
    console.log("Error occurred => ", e);
    DATA_FIELDS.map((item) => values.set(item, ""));
  }

  return values;
}
