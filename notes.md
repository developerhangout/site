# Notes
## Netlify CMS
  - found at `/admin/` (trailing slash is required)
  - Important!: Netlify CMS is git-based, so you need to specify the branch to which it should commit any changes. Right now, it's set to `dev`.
  - To enable it on a new netlify site, enable identity and git-gateway in the netlify settings, and then invite users by email under the identity tab.

## To Be Done

### Documents
  *Rules*, *Guidelines*, and *How not to get scammed* should be filled in from the admin panel underneath **About Documents**

### SEO
  - Global Metadata are contained in `gatsby-config.js` under `siteMetadata`
  - Metadata can be overridden in each page by editing the `SEO` component props
    - Pages are in `src/pages/**/index.jsx` and `src/templates/**/index.jsx`
    - Props are `title, description` (both strings).
      - `title` is required (not code-wise, but, it'll look funny)
      - `description` is not required, but recommended on pages where the description on google should look nice
