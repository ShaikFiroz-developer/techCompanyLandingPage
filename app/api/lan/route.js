const langdata = [
  "English (Global) 🌐 ",
  "Español",
  "Português (Brasil)",
  "Deutsch",
  "Français",
  "Nederlands",
  "العربية",
  "Bahasa Indonesia",
  "ภาษาไทย",
  "Tiếng Việt",
  "简体中文",
  "日本語",
  "עברית",
];

export async function GET(req, res) {
  const jsonResponse = JSON.stringify(langdata);
  return new Response(jsonResponse, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
