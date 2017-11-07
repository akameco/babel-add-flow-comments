# babel-add-flow-comments [![Build Status](https://travis-ci.org/akameco/babel-add-flow-comments.svg?branch=master)](https://travis-ci.org/akameco/babel-add-flow-comments)

> add/remove flow comments


## Install

```
$ npm install --dev babel-add-flow-comments
```


## API

### addFlowComment(path: Path)

#### path

Type: `Object`

add `// @flow`

### removeFlowComment(comments)

remove `// @flow` for `/* @flow */`

### isFlowFile(path): boolean

when `// @flow`, return true.

## License

MIT © [akameco](http://akameco.github.io)
