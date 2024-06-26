# bossandthehogs

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

While making changes it start the local environment using npm run dev , the page should hot reload, if in doubt refresh the page

When ready to deploy to live, use the npm run build command, this creates all of the assets in a new folder named dist, you'll need to copy the index.html and static folder (which contains the assets needed for the site to function)

Gigs are stored as JSON within /src/assets/data.json , you can copy the a block then add it in (updating the date,venue etc);

Within components/pages the content can be updated as regular HTML (just copy/remove blocks)