# Accredible Build System

Type `gulp` to start the development server.

![Build System](https://user-images.githubusercontent.com/46879/29928916-0c6f2b16-8e62-11e7-8b61-1134b34768c7.gif)

You can pass `--product` and `--env` arguments, or omit them and be prompted.

You may want to add `--silent` to supress internal gulp chatter.

```shell
gulp
gulp --silent
gulp --product dashboard --env red
```

To build, use `gulp build`. Again, you can pass the same arguments.

```shell
gulp build --product dashboard --env red
gulp build
```

## Feature Requirements

* [x] Must run for **multiple** products
    * [x] dashboard
    * [x] certificate-standalone
    * [x] directory
    * [x] recipient
    * [x] etc.
    * [ ] ... which will live on individual subdomains
* [x] Make the taskrunner easy to understand
    * [x] Sensible organization
    * [x] Sufficient documentation and comments
* [x] `build` must:
    * [x] Work for the correct product
    * [x] Clean the `/build/` directory
    * [x] Compile CSS
        * [x] SASS
        * [x] Sourcemaps
        * [x] Autoprefixer
        * [x] Minification
    * [x] Compile JS
        * [x] Browserify
        * [X] Sourcemaps
        * [x] Uglification
    * [x] Copy environment files
    * [x] Copy static files
    * [x] Cache-bust
        * [x] Use token substitution
        * [x] ...consider version bumping
        * [x] ...consider using timestamp
* [x] `serve` must:
    * [x] Do all `build` things...
    * [x] Watch for changes
        * [x] CSS (see `sass.js` comments for an article with possible solution)
        * [x] JS
        * [x] HTML
        * [x] Assets
    * [x] Serve files locally
    * [x] Have Live-Reload / Browsersync
    * [x] Open localhost when ready
    * [x] Use [gulp-newer](https://www.npmjs.com/package/gulp-newer) for speed. See: [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)

#### Bonus Features

* [ ] Lint our files _on change_
* [ ] Add Service-Worker pre caching. See: [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)
* [ ] We will probably house the API in the same repo, prepare for this.

## Taskrunner Options

* NPM scripts
* Gulp
    * https://browsersync.io/docs/gulp
* Grunt

#### References

* https://github.com/google/web-starter-kit - uses `babel-register`, which is nice, but also rather slow
* https://github.com/angular/angular-seed
* https://github.com/gusgard/angular-seed-es6 - this has a retro approach to managing services, controllers, directives etc.
* https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate
* https://browsersync.io/docs/gulp
