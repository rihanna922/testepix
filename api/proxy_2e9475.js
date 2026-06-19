export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-API-Key');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const API_TOKEN = 'sk_0048217529e0a8cc05b1cdb38ff9800338919bf79943f594e296c6baf5828826';
  const PRODUCT_HASH = 'prod_85799dd1a9ed89bd';
  const BASE_AMOUNT = 1992;
  const PRODUCT_TITLE = 'Bia Araújo';

  if (req.method === 'GET' && req.query.action === 'check_status') {
    const hash = req.query.hash || '';
    if (!hash) return res.status(400).json({ error: 'No hash provided' });
    const response = await fetch(`https://multi.paradisepags.com/api/v1/check_status.php?hash=${hash}`, {
      headers: { 'X-API-Key': API_TOKEN }
    });
    const data = await response.json();
    return res.status(response.status).json(data);
  }

  if (req.method === 'POST') {
    const body = req.body;
    const customerData = body.customer || {};
    const utms = body.utms || {};
    const cpfs = ['42879052882','07435993492','93509642791','73269352468','35583648805'];
    const ddds = ['11','21','31','41','51','61','71','81','85','92'];
    if (!customerData.phone_number) {
      customerData.phone_number = ddds[Math.floor(Math.random()*ddds.length)] + '9' + Math.floor(10000000+Math.random()*90000000);
    }
    if (!customerData.document) {
      customerData.document = cpfs[Math.floor(Math.random()*cpfs.length)];
    }
    const reference = 'POP-' + Date.now() + Math.random().toString(36).substr(2,9);
    const cleanDocument = (customerData.document||'').replace(/\D/g,'');
    const cleanPhone = (customerData.phone_number||'').replace(/\D/g,'');
    const payload = {
      amount: Math.round(BASE_AMOUNT),
      description: PRODUCT_TITLE,
      reference: reference,
      productHash: PRODUCT_HASH,
      customer: {
        name: customerData.name || 'N/A',
        email: customerData.email || 'na@na.com',
        document: cleanDocument,
        phone: cleanPhone
      }
    };
    const tracking = {};
    for (const [key, value] of Object.entries(utms)) { if (value) tracking[key] = value; }
    if (Object.keys(tracking).length > 0) payload.tracking = tracking;

    const response = await fetch('https://multi.paradisepags.com/api/v1/transaction.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'X-API-Key': API_TOKEN },
      body: JSON.stringify(payload)
    });
    const responseData = await response.json();
    if (response.ok) {
      const t = responseData.transaction || responseData;
      return res.status(response.status).json({
        hash: t.id || reference,
        pix: { pix_qr_code: t.qr_code || '', expiration_date: t.expires_at || null }
      });
    }
    return res.status(response.status).json(responseData);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
