const print = console.log
const stream = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .trim()
const lines = stream.split('\n')

print('stream', stream)
print('lines', lines)
