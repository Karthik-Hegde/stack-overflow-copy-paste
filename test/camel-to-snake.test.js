import test from 'ava'
import {camelToSnakeCase} from '../src'

test('converts camelCase to snake_case', t => {
  const original = 'snakeCaseString'
  const expected = 'snake_case_string'
  const actual = camelToSnakeCase(original)
  t.deepEqual(actual, expected)
})
