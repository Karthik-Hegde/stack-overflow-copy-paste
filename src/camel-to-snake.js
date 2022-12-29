export default camelToSnakeCase

/**
 * Original Source: https://stackoverflow.com/a/54246501
 *
 * This method converts a camelCase string to a snake-case string
 *
 * @param {String} str - The camelCase string
 * @return {String} - The snake-case version of camelCase string
 */
function camelToSnakeCase(str) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}
