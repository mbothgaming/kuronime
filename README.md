# KuroNime — Website Starter

KuroNime is a static, responsive anime-discovery and editorial website concept.
It is designed for Cloudflare Pages and can be hosted on the free tier.

## What's included
- Responsive dark premium homepage
- Purple / black / silver visual identity
- Indonesian default language with a simple ID/EN text toggle
- Demo anime catalog with genre filters
- Editorial cards and newsletter form placeholder
- No third-party anime posters, episodes, or copyrighted video assets

## Important before launch
1. Replace the placeholder articles with original, fact-checked editorial content.
2. Replace the fictional demo catalog with verified metadata and lawful links.
3. Do not upload, embed, or redistribute anime episodes unless you have the necessary rights or permission.
4. Replace the example contact address `hello@kuronime.example`.
5. Add real Privacy Policy, Terms, Contact, and Copyright pages before collecting personal data or applying for advertising.
6. The newsletter form is currently a visual demo; it does not collect or store email addresses.
7. The search icon currently opens a demo search field; it is not connected to a search index.

## Deploy to Cloudflare Pages (Direct Upload)
1. Extract `kuronime-cloudflare-pages.zip`.
2. Open Cloudflare Dashboard and sign in / create a free account.
3. Go to **Workers & Pages** → **Create** → **Pages** → **Upload assets** (the exact dashboard labels may change).
4. Create a project named `kuronime`.
5. Upload the contents of this folder (the `index.html`, `styles.css`, `script.js`, and `assets` folder). If the dashboard asks for a folder, upload the extracted `kuronime-starter` folder.
6. Deploy. Cloudflare will provide a `*.pages.dev` address.
7. Test the site on desktop and mobile.

For future updates, upload the revised site assets again through the project's deployment workflow.

## Custom domain
A custom domain is optional and is not included in the zero-rupiah setup. Start with the free `pages.dev` address.

## File structure
- `index.html` — page structure and content
- `styles.css` — visual design and responsive layout
- `script.js` — language toggle, genre filters, search modal, mobile menu
- `assets/favicon.svg` — KuroNime favicon
