# Notes
## To Be Done

### Documents
  *Rules*, *Guidelines*, and *How not to get scammed* should be filled in

### SEO
  - Global Metadata are contained in `gatsby-config.js` under `siteMetadata`
  - Metadata can be overridden in each page by editing the `SEO` component props
    - Pages are in `src/pages/**/index.jsx` and `src/templates/**/index.jsx`
    - Props are `title, description` (both strings).
      - `title` is required (not code-wise, but, it'll look funny)
      - `description` is not required, but recommended on pages where the description on google should look nice
