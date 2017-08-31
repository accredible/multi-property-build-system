# Accredible Build System

Type `gulp` to start the development server. You can pass `--product` and `--env` arguments, or omit them and be prompted.

You may want to add `--silent` to supress internal gulp chatter.

```shell
gulp --silent # Defaults to `gulp serve`
gulp --product dashboard --env red
```

To build, use `gulp build`. Again, you can pass the same arguments.

```shell
gulp build --product dashboard --env red
gulp build
```

![build-system](https://user-images.githubusercontent.com/46879/29873216-7976ba40-8d8a-11e7-8ab6-fc63882a597d.gif)

## Feature Requirements

* [x] Must run for **multiple** products
    * [x] dashboard
    * [x] certificate-standalone
    * [x] directory
    * [x] recipient
    * [x] etc.
    * [ ] ... which will live on individual subdomains
* [ ] Make the taskrunner easy to understand
    * [x] Sensible organization
    * [ ] Sufficient documentation and comments
* [x] `build` must:
    * [x] Work for the correct product
    * [x] Clean the `/dist/` directory
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
* [ ] `serve` must:
    * [x] Do all `build` things...
    * [ ] Lint our files _on change_ (we don't want the noise of **all** files)
    * [ ] Watch for changes
        * [ ] CSS (see `sass.js` comments for an article with possible solution)
        * [ ] JS
        * [ ] Static Files
    * [x] Serve files locally
    * [ ] Have Live-Reload / Browsersync
    * [x] Open localhost when ready

#### Bonus Features

Consider using [gulp-newer](https://www.npmjs.com/package/gulp-newer) as google use it with their [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)

Consider adding Service-Worker pre caching.

We will probably house the API in the same repo, prepare for this.

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
