#Symphony

- `composer create-project -s beta symfony/skeleton symphonyAPI` (to create the boilerplate for projectr symphonyAPI)
- cd into the project dir and run ` symfony server:start`

Working with React? Use Encore with webpack to handling transpiling and bundling with twig templates
- `yarn add --dev @symfony/webpack-encore` 
- `yarn add webpack-notifier@^1.6.0 --dev`

Add this to the webpack.config.js file : 
- `.enableReactPreset()`

- `symfony server:start`
- `yarn encore dev --watch`

#Added this when webpack was not updating CSS.
 - Used `./node_modules/.bin/encore dev-server --hot` to serve it.
```
    if (!Encore.isProduction()) {
        Encore.disableCssExtraction()
    }
```
