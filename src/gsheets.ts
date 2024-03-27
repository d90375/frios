import { google } from "googleapis";

export async function getGoogleSheetsData(range = "Table") {
  const auth = await google.auth.getClient({
    keyFile: "./src/keys.json",
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: "1bMVcW5rEAYdvUQvbsu1wB3AZ614Gf70w_jyfGtPcwx0",
    range: range,
  });

  return data.data.values;
}
