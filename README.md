# invalidate-require-cache

[![CircleCI](https://circleci.com/gh/codemodsquad/invalidate-require-cache.svg?style=svg)](https://circleci.com/gh/codemodsquad/invalidate-require-cache)
[![Coverage Status](https://codecov.io/gh/codemodsquad/invalidate-require-cache/branch/master/graph/badge.svg)](https://codecov.io/gh/codemodsquad/invalidate-require-cache)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/invalidate-require-cache.svg)](https://badge.fury.io/js/invalidate-require-cache)

Delete modules in a folder from require.cache unless the folder is unchanged since last call.

This is used by `jscodeshift-choose-parser` to ensure that it always uses the current version of babel installed
in a project.

```js
const invalidateRequireCache = require('invalidate-require-cache')

invalidateRequireCache('path/to/directory')
// now everything inside that directory has been deleted from require.cache
// (unless it is unchanged since the last call)
// and will be reloaded if you require it again.
```
