var reporter = require('nodeunit').reporters.nested;
process.chdir(__dirname);

reporter.run(['commontests.js']);