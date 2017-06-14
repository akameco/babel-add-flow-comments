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

export function removeFlowComment(comments /* : Comments */) {
  if (!Array.isArray(comments)) {
    throw new TypeError(`Expected a Array<Comment>, got ${typeof comments}`)
  }

  for (const comment of comments) {
    if (comment.value.indexOf(FLOW_DIRECTIVE) >= 0) {
      comment.value = comment.value.replace(FLOW_DIRECTIVE, '')
      if (!comment.value.replace(/\*/g, '').trim()) {
        comment.ignore = true
      }
    }
  }
}

// line ? /* @flow */ or // @flow
export function addFlowComment(path /* : Object */) {
  path.addComment('leading', ` ${FLOW_DIRECTIVE}`, true)
}
