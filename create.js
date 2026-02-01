let codes = global.codes || {};
global.codes = codes;

export default function handler(req, res) {
  const { password, coins } = req.query;

  if (password !== "ADMIN123") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const code = "SULAV-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  codes[code] = coins;

  res.json({ code, coins });
}