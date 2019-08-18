# Developer Hangout Official Site

## How to develop
> Site is build with [GatsbyJS](https://gatsbyjs.org)
1. NodeJS latest LTS needs to be installed
1. clone this repo
1. `npm install`
1. `npm run start` to start the develop server on localhost:8000
  - graphql explorer is at localhost:8000/___graphql (highly recommend exploring)
1. `src/components` directory contains the react components
1. `src/content` is where all the markdown files will be created and edited
1. `src/pages` are the routed pages like `/about` or `/`
1. `src/templates` contains the templates for the markdown files, right now only challenges template created
1. `static` is where gatsby will transfer inline images in markdown files

all that is really needed at this point is to theme and organize info on those pages already created.

if you'd like any info from graphql in the pages then use the `challenges` components as an example.
then you just pass the data as a _prop_ into your component i.e. `const compName = ({data /*this is the prop data*/}) =>...`

happy hunting

Color Pallet:
- Dev Blue: #50acfc
- Dev White: #fff
