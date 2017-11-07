// @flow
import pluginTester from 'babel-plugin-tester'
import flowComment, { removeFlowComment, addFlowComment } from './src'

const createPlugin = (name = 'plugin', fn) => () => ({
  name,
  visitor: {
    Program(path) {
      fn(path)
    },
  },
})

const removePlugin = () => ({
  name: 'remove-comments',
  visitor: {
    Program(path, { file }) {
      removeFlowComment(file.ast.comments)
    },
  },
})

pluginTester({
  plugin: createPlugin('default', flowComment),
  snapshot: true,
  tests: {
    'add comment top': `
    var a = 'a'
    // @flow
    `,
  },
})

pluginTester({
  plugin: removePlugin,
  snapshot: true,
  tests: {
    'remove comments': '// @flow',
  },
})

pluginTester({
  plugin: createPlugin('add-comments', addFlowComment),
  snapshot: true,
  tests: {
    'already @flow': `
    // @flow
    const a = 1
    `,
    'add comments': '"use strict";',
    func: 'function sum(a, b) { return a + b; }',
    var: 'const a = 2',
  },
})
