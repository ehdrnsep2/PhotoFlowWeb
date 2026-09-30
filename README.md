# PhotoFlow Web Site

Static website for PhotoFlow, intended for GitHub Pages. The site describes the Android TV ambient screensaver and the separate local lock-screen photo feature.

## Files

- `index.html` — application homepage
- `privacy.html` — privacy policy
- `terms.html` — terms of service
- `assets/photoflow-logo.png` — PhotoFlow logo
- `style.css` — shared styling

## GitHub Pages

1. Create a GitHub repository.
2. Upload all files and folders from this package.
3. In the repository, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose the `main` branch and `/ (root)`.
5. Save and wait for the GitHub Pages site to deploy.
6. Optionally connect a custom domain in **Settings → Pages → Custom domain**.

## Before Google OAuth verification

Use a custom domain that you own, such as `photoflow.example`, rather than relying only on a `github.io` URL.

Then use:

- Homepage: `https://YOUR-DOMAIN/`
- Privacy Policy: `https://YOUR-DOMAIN/privacy.html`
- Terms of Service: `https://YOUR-DOMAIN/terms.html`

Verify the custom domain in Google Search Console using the same Google account that has Owner/Editor access to the Google Cloud project.

## Important content check

The privacy policy is drafted around the current PhotoFlow behavior: user-selected albums through the Google Photos Ambient API, memory-only playback on Android TV, separate local folders for screensaver and lock-screen photos, randomized playback, no sale/advertising/unrelated third-party sharing, and removal of connection metadata on disconnect.

Before submitting verification, review the policy against the actual implementation. In particular, update the policy if PhotoFlow sends analytics/crash data, uses a backend, or handles any data in a way not described here.
