import { readFile, writeFile } from 'node:fs/promises';
const suppliedUrl = process.env.SITE_URL || process.env.CF_PAGES_URL || 'https://newangle-devs.github.io/redeminhaoficina/';
const url = new URL(suppliedUrl);
if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) throw new Error('SITE_URL must be a public HTTPS URL without credentials, query or fragment.');
const home = url.href.replace(/\/?$/, '/');
const image = `${home}images/motor-study.png`;
let html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${home}" />`);
html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${home}" />`);
html = html.replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${image}" />`);
html = html.replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${image}" />`);
html = html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (_, open, json, close) => {
  const data = JSON.parse(json); data.url = home; data['@id'] = `${home}#oficina`;
  return `${open}\n${JSON.stringify(data, null, 2)}\n${close}`;
});
await writeFile(new URL('../index.html', import.meta.url), html);
await writeFile(new URL('../public/robots.txt', import.meta.url), `User-agent: *\nAllow: /\n\nSitemap: ${home}sitemap.xml\n`);
await writeFile(new URL('../public/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${home}</loc></url></urlset>\n`);
console.log(`SEO prepared for ${home}`);
