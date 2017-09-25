![Multi-Property Build-System](https://user-images.githubusercontent.com/46879/30689937-7e7fa024-9eba-11e7-9e5c-d38fd35f040c.jpg)

**Develop, Build and Test** multiple web-properties using a single task runner. _Don't Repeat Yourself._

# Installation

```
npm install gulp -g
git clone https://github.com/accredible/multi-property-build-system
cd multi-property-build-system
git install
```

# Commands

The `gulp` command has optional `--task`, `--property` and `--env` arguments.

## `gulp` - prompt for arguments

```shell
gulp
gulp --silent
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/46879/30666411-23ba48b0-9e4c-11e7-8546-15eb91343869.gif" alt="Demonstrating the Multi Property Build System">
</p>

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

# Directory Structure

`📁 build/` - properties build to, and serve from, this folder.
`📁 env/` - multiple environment folders, copied to the active property before build.
`📁 gulp/` - task runner logic.
`📁 properties/` - multiple web properties.
`📃 karma.conf.js` - unit-testing config, runs within the active property.

# How does this work?

I made a youtube video. Go forth and learn.

<p align="center">
  <a href="https://www.youtube.com/watch?v=qnUL8ktbMp0" target="_blank">
    <img src="https://img.youtube.com/vi/qnUL8ktbMp0/maxresdefault.jpg" alt="How does the Multi-Build System Work?">
  </a>
</p>

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
    * [ ] Functional on TravisCI

## Bonus Features

Not on our MVP. But still good.

* [x] Lint our files _on change_
* [x] Make this README as awesome as the [web-starter-kit](https://github.com/google/web-starter-kit)
* [ ] Automatically bump the version with a [pre-commit-hook](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks)
* [ ] Add Service-Worker pre caching. See: [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)

#### References

I've added references to each gulp task where appropriate. The following were my starting points:

* https://github.com/google/web-starter-kit - uses `babel-register`, which is nice, but also slow
* https://github.com/angular/angular-seed
* https://github.com/gusgard/angular-seed-es6
* https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate
* https://browsersync.io/docs/gulp
