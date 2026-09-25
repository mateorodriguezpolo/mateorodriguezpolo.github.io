# Mateo Rodriguez Polo

Personal academic website built with plain HTML, CSS, and minimal JavaScript. No dependencies or build step are required.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## GitHub Pages

Push the files to the repository. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, and save. The site will be available at `https://mateorodriguezpolo.github.io/`.

## Editing

- `index.html`: biography, research, preprints, talks, teaching, CV link, and contact details.
- `style.css`: layout, typography, responsive styles, and print styles.
- `script.js`: optional active-section navigation indicator.
- `assets/`: profile photograph and SVG favicon.

Content was copied from [the original academic website](https://sites.google.com/view/mateorodriguezpolo/inicio) on 25 September 2026. The profile photograph is the replacement supplied by Mateo in `assets/mateo-rodriguez-polo.jpeg`. The CV links to `Mateo_Rodriguez_Polo_CV.pdf` in the repository root. Replace this file to update the CV, keeping the same filename.

## Search visibility

The homepage includes a descriptive title, description, canonical URL, and social preview metadata. `robots.txt` allows crawling and points to `sitemap.xml`.

1. Add `https://mateorodriguezpolo.github.io/` as a **URL-prefix** property in [Google Search Console](https://search.google.com/search-console/).
2. Verify ownership using Google's HTML tag or HTML file. Add the supplied tag to the homepage `<head>`, or the supplied file to the repository root, then commit and push it. Wait for publication before clicking Verify. Keep the verification tag or file in the repository.
3. Submit `sitemap.xml` in Search Console and use URL Inspection to request indexing of the homepage.
4. Update the website links on your ETH profile, Google Scholar, LinkedIn, and old Google Site to point here.

Indexing and search ranking are controlled by search engines and are not immediate or guaranteed. See [Google's indexing guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
