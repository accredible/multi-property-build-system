# Accredible Build System

Type `gulp` or `gulp serve` to start the server. You can pass `--product` and `--env` arguments. or omit them and be prompted.

You may want to add `--silent` to supress internal gulp chatter.

```shell
gulp --silent # Defaults to `gulp serve`
gulp serve --product dashboard --env red
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
* [ ] `serve` must:
    * [ ] Work for the correct product
    * [x] Clean the `/dist/` directory
    * [ ] Serve files locally
    * [ ] Have Live-Reload / Browsersync
    * [ ] Open localhost when ready
    * [ ] Compile CSS
        * [x] SASS
        * [x] Sourcemaps
        * [x] autoprefixer
        * [ ] compression
    * [ ] Compile JS
        * [ ] Browserify / Watchify
        * [ ] Sourcemaps
        * [ ] Compression
    * [ ] Copy environment files
    * [ ] Lint our files _on change_ (we don't want the noise of **all** files)
* [ ] `build` must:
    * [ ] Do all `serve` things...
    * [ ] Cache-bust
        * [ ] Use token substitution
        * [ ] ...consider version bumping
        * [ ] ...consider using timestamp
* [ ] We will probably house the API in the same repo

#### Bonus Features

Consider using [gulp-newer](https://www.npmjs.com/package/gulp-newer) as google use it with their [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)

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
