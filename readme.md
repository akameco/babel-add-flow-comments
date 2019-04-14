# babel-add-flow-comments

[![Build Status](https://travis-ci.org/akameco/babel-add-flow-comments.svg?branch=master)](https://travis-ci.org/akameco/babel-add-flow-comments)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> add/remove flow comments

## Install

```
$ npm install --dev babel-add-flow-comments
```

## API

### default: flowComment(programPath: Path)

add `// @flow` to top.

### addFlowComment(path: Path)

#### path

Type: `Object`

add `// @flow`

### removeFlowComment(comments)

remove `// @flow` for `/* @flow */`

### isFlowFile(path): boolean

when `// @flow`, return true.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="http://akameco.github.io"><img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;" alt="akameco"/><br /><sub><b>akameco</b></sub></a><br /><a href="https://github.com/akameco/babel-add-flow-comments/commits?author=akameco" title="Code">💻</a> <a href="https://github.com/akameco/babel-add-flow-comments/commits?author=akameco" title="Documentation">📖</a> <a href="https://github.com/akameco/babel-add-flow-comments/commits?author=akameco" title="Tests">⚠️</a> <a href="#infra-akameco" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
