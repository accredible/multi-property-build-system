# Accredible Build System

Type `gulp` or `gulp serve` to start the server. You can pass `--product` and `--env` arguments. or omit them and be prompted.

```shell
gulp # Defaults to `gulp serve`
gulp serve --product dashboard --env red
```

To build, use `gulp build`. Again, you can pass the same arguments.

```shell
gulp build --product dashboard --env red
gulp build
```

![build-system](https://user-images.githubusercontent.com/46879/29873216-7976ba40-8d8a-11e7-8ab6-fc63882a597d.gif)

## Feature Requirements

* Must run for **multiple** projects
    * dashboard
    * standalone
    * directory
    * _recipient app_
    * etc.!
* ... which will live on individual subdomains
* Will probably house the API in the same repo
* Build to `/dist/`
* Serve local files (currently from `/dist/`)
* Copy environment/config files from `/ENV.name.js` to `app/scripts/ENV.js`
* Run SASS with sourcemaps, autoprefixer and compression
* Comile javascript with sourcemaps and compression (browserify / watchify)
* Version bump with token substition
* Live-Reload / Browsersync

#### Bonus Requirements

* Lint our files (we don't pay attention to this as it's ALL files rather than just the one we're working on)

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
