# prettier-config-clc

Shareable prettier configuration.

## Builds and Deployment

![master](https://img.shields.io/circleci/build/github/CLCInc/prettier-config-clc/master?label=master&style=flat-square&token=0963d0715ce24f1c526725250f9ae7ed1b42e88b)
![Semantic Release](https://img.shields.io/badge/deploy-semantic%20release-blueviolet?style=flat-square&link=https://github.com/CLCInc/documentation/wiki/Git-Commit-Guidelines)

To add this file to your own project, add the following to your project's `package.json`:

```js
  "prettier": "@clc_inc/prettier-config-clc"
  "devDependencies": {
    "prettier": "^2.2.1",
    "@clc_inc/prettier-config-clc": "^2.1.1",
    "@trivago/prettier-plugin-sort-imports": "^2.0.1"
  }
```

Note that you should use up-to-date versions of each dependency.

Perform an `npm install` and now IDEs such as WebStorm and VSCode should be able to find the configuration
and give you responsive feedback! Be sure to enable the settings appropriate to format files automatically
on save.
