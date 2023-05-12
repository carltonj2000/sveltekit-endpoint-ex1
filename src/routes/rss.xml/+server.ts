export async function GET() {
  const headers = { 'Content-Type': 'application/xml' };

  const xml = `
  <?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Joy Of Code</title>
      <link>https://joyofcode.xyz/</link>
      <description>Stuff</description>
    </channel>
  </rss>
`.trim();

  return new Response(xml, { headers });
}
