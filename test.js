// @flow
import pluginTester from 'babel-plugin-tester'
import { removeFlowComment, addFlowComment } from './src'

const removePlugin = () => {
  return {
    name: 'remove-comments',
    visitor: {
      Program(path: Object, { file }: Object) {
        // remove @flow
        removeFlowComment(file.ast.comments)
      },
    },
  }
}

const addPlugin = () => {
  return {
    name: 'add-comments',
    visitor: {
      Program(path: Object) {
        addFlowComment(path)
      },
    },
  }
}

pluginTester({
  plugin: removePlugin,
  snapshot: true,
  tests: {
    'remove comments': '// @flow',
  },
})

pluginTester({
  plugin: addPlugin,
  snapshot: true,
  tests: {
    'add comments': '"use strict";',
    func: 'function sum(a, b) { return a + b; }',
    var: 'const a = 2',
  },
})
