export default function handler(req, res) {
  const { code } = req.query;

  if (!global.codes || !global.codes[code]) {
    return res.json({ status: "invalid" });
  }

  const coins = global.codes[code];
  delete global.codes[code];

  res.json({ status: "ok", coins });
}