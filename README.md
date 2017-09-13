# Accredible Build System

Type `gulp` to start the development server.

![Build System](https://user-images.githubusercontent.com/46879/29928916-0c6f2b16-8e62-11e7-8b61-1134b34768c7.gif)

You can pass `--property` and `--env` arguments, or omit them and be prompted.

You may want to add `--silent` to supress internal gulp chatter.

```shell
gulp
gulp --silent
gulp --property dashboard --env red
```

To build, use `gulp build`. Again, you can pass the same arguments.

```shell
gulp build --property dashboard --env red
gulp build
```

To test, use `gulp test`. Again, you can pass the same arguments.

```shell
gulp test --property dashboard --env red
gulp test
```

## Features

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
    * [ ] Run e2e
    * [ ] Work on TravisCI

## Bonus Features

Not on our MVP. But still good.

* [x] Lint our files _on change_
* [ ] Automatically bump the version with a [pre-commit-hook](https://git-scm.com/book/gr/v2/Customizing-Git-Git-Hooks)
* [ ] Make this README as awesome as the [web-starter-kit](https://github.com/google/web-starter-kit)
* [ ] Add Service-Worker pre caching. See: [web-starter-kit](https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js)
* [ ] We will probably house the API in the same repo, prepare for this.

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
