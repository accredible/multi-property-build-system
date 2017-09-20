# Multi-Property Build-System

**Don't Repeat Yourself** - Manage multiple web-properties using a single task runner.

![Build System](https://user-images.githubusercontent.com/46879/29928916-0c6f2b16-8e62-11e7-8b61-1134b34768c7.gif)

# Commands

The `gulp` command needs `--task`, `--property` and `--env` arguments.

Omit them to be prompted.

## `gulp` - be prompted

## `gulp --task develop` - start a development server

```shell
gulp --task develop
gulp --task develop --property dashboard --env red
```

## `gulp --task build` - create production files

```shell
gulp --task build
gulp --task build --property dashboard --env red
```

## `gulp --task test` - run tests

```shell
gulp --task test
gulp --task test --property dashboard --env red
```

## Featuress

* [x] Must run for **multiple** properties
    * [x] dashboard
    * [x] certificate-standalone
    * [x] directory
    * [x] recipient
    * [x] etc.
* [x] Make the taskrunner easy to understand
    * [x] Sensible organization
    * [x] Sufficient documentation and comments
* [x] `build` must:
    * [x] Work for the correct property
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
        * [x] CSS
        * [x] JS
        * [x] HTML
        * [x] Assets
    * [x] Serve files locally
    * [x] Have Live-Reload / Browsersync
    * [x] Open localhost when ready
    * [x] Use [gulp-newer](https://www.npmjs.com/package/gulp-newer) for speed. See: [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)
* [ ] `test` must:
    * [x] Run for a single property and environment
    * [x] Run karma
    * [ ] Run e2e - see [gulp-protractor](https://github.com/mllrsohn/gulp-protractor)
    * [ ] Work on TravisCI

## Bonus Features

Not on our MVP. But still good.

* [x] Lint our files _on change_
* [ ] Make this README as awesome as the [web-starter-kit](https://github.com/google/web-starter-kit)
* [ ] Automatically bump the version with a [pre-commit-hook](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks)
* [ ] Add Service-Worker pre caching. See: [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)

#### References

I've added references to each gulp task where appropriate. The following were my starting points:

* https://github.com/google/web-starter-kit - uses `babel-register`, which is nice, but also rather slow
* https://github.com/angular/angular-seed
* https://github.com/gusgard/angular-seed-es6 - this has a retro approach to managing services, controllers, directives etc.
* https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate
* https://browsersync.io/docs/gulp

# Magnets, How do they work?

I made a yotube video. Go forth and learn.

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/HU7QPPfZLOA/0.jpg)](https://www.youtube.com/watch?v=HU7QPPfZLOA)
