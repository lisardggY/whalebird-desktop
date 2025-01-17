// https://github.com/tootsuite/mastodon/blob/master/app/javascript/mastodon/components/autosuggest_textarea.js
const textAtCursorMatch = (
  str: string,
  cursorPosition: number,
  separators: Array<string> = ['@', '#', ':']
): [number | null, string | null] => {
  let word: string

  const left = str.slice(0, cursorPosition).search(/\S+$/)
  const right = str.slice(cursorPosition).search(/\s/)

  if (right < 0) {
    word = str.slice(left)
  } else {
    word = str.slice(left, right + cursorPosition)
  }

  if (!word || word.trim().length < 3 || separators.indexOf(word[0]) === -1) {
    return [null, null]
  }

  word = word.trim().toLowerCase()

  if (word.length > 0) {
    return [left + 1, word]
  } else {
    return [null, null]
  }
}

export default textAtCursorMatch
