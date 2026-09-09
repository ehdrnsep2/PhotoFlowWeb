# PhotoFlow Web Site

Static website for PhotoFlow, intended for GitHub Pages.

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

The privacy policy is drafted around the PhotoFlow behavior described to Google Photos: user-selected album, local synchronization on Android TV, randomized screensaver playback, no sale/advertising/unrelated third-party sharing, and local-data removal on disconnect.

Before submitting verification, review the policy against the actual implementation. In particular, update the policy if PhotoFlow stores OAuth tokens, sends analytics/crash data, uses a backend, uses third-party SDKs, or handles any data in a way not described here.
