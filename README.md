# prettier-config-clc
Prettier Config

To add this file to your own project, add the following to your project's `package.json`:

```js
  "prettier": "prettier-config-clc"
  "devDependencies": {
    "prettier": "^1.19.1",
    "prettier-config-clc": "git://github.com/CLCInc/prettier-config-clc.git"
  }
```

Note that you should use up-to-date versions of each dependency.

Perform an `npm install` and now IDEs such as WebStorm and VSCode should be able to find the configuration
and give you responsive feedback! Be sure to enable the settings appropriate to format files automatically
on save.
