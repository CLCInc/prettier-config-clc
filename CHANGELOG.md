## [2.0.1](https://github.com/CLCInc/prettier-config-clc/compare/v2.0.0...v2.0.1) (2020-08-17)


### Bug Fixes

* set trailingComma: none to override prettier v2 default ([#4](https://github.com/CLCInc/prettier-config-clc/issues/4)) ([81c2bd0](https://github.com/CLCInc/prettier-config-clc/commit/81c2bd0fdcd5ca3e601f8093ac94aa085cd7adde))

# [2.0.0](https://github.com/CLCInc/prettier-config-clc/compare/v1.0.0...v2.0.0) (2020-01-03)


### Features

* publish package to npm on push to master ([#2](https://github.com/CLCInc/prettier-config-clc/issues/2)) ([d368675](https://github.com/CLCInc/prettier-config-clc/commit/d368675017a65268ae78c2f4b5ffdebdeddde03c))


### BREAKING CHANGES

* This release changes the name of the npm package to include the CLC scope: @clc_inc/prettier-config-clc. Projects that pull in this version will need to update the 'package.json' with the new name. See the `README.md` file in this repo for instructions.

DEV-469
