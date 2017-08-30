# Accredible Build System

![build-system](https://user-images.githubusercontent.com/46879/29873216-7976ba40-8d8a-11e7-8ab6-fc63882a597d.gif)

```shell
gulp serve
gulp build
gulp serve --product certificate-standalone --env red
gulp build --product certificate-standalone --env red
```

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

* https://github.com/google/web-starter-kit
* https://github.com/angular/angular-seed
* https://github.com/gusgard/angular-seed-es6 - this has a retro approach to managing services, controllers, directives etc.
* https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate
* https://browsersync.io/docs/gulp