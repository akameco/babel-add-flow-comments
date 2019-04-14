// @flow
/* ::
type Comment = {
  [key: string]: any,
  value: string,
  ignore: boolean,
}

type Comments = Array<Comment>
*/

const FLOW_DIRECTIVE = '@flow'

export default function flowComment(programPath /* : Object */) {
  const file = programPath.get('file')
  removeFlowComment(file.hub.file.ast.comments)
  programPath.addComment('leading', ` ${FLOW_DIRECTIVE}`, true)
}

export function removeFlowComment(comments /* : Comments */) {
  if (!Array.isArray(comments)) {
    throw new TypeError(`Expected a Array<Comment>, got ${typeof comments}`)
  }

  for (const comment of comments) {
    if (comment.value.includes(FLOW_DIRECTIVE)) {
      comment.value = comment.value.replace(FLOW_DIRECTIVE, '')
      if (!comment.value.replace(/\*/gu, '').trim()) {
        comment.ignore = true
      }
    }
  }
}

// line ? /* @flow */ or // @flow
export function addFlowComment(path /* : Object */) {
  if (!isFlowFile(path)) {
    path.addComment('leading', ` ${FLOW_DIRECTIVE}`, true)
  }
}

export function isFlowFile(path /* : Object */) {
  const file = path.get('file')
  if (!file || !file.hub) {
    return false
  }

  const { comments } = file.hub.file.ast

  if (comments) {
    return comments.some(v => v.value.includes(FLOW_DIRECTIVE))
  }

  return false
}
