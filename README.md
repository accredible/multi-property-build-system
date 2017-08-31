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

For more information see the [Gulp README](/gulp)
