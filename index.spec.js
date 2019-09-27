const hello = require('./index')

test('expect echo', () => {
  expect(hello).toBe('Hello world!')
})
