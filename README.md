# `parcel-plugin-asset-csv`

Chris DMacrae is the original author of this library, but I couldn't find him
online anywhere to submit a pull request, so I fixed the code and pushed it up
here. His license is MIT, so I'll keep the same license. If anyone finds him,
let me know and I'll submit a PR.

> A parcel plugin for adding CSVs as a supported asset type

## Usage

Add the plugin to your project as a dependency:

```
npm install parcel-plugin-asset-csv --save
```

Then you can require CSVs in any asset type that outputs to JavaScript. _(e.g, .js or .ts)_:

`example.csv`
```csv
first name, last name, age
john, doe, 21
```

```js
const exampleCSV = require('./example.csv');

console.log(example.csv);
// => [['first name', 'last name', 'age', ['john', 'doe', '21']]

console.log(example.csv[0][0]);
// => 'first name'

console.log(example.csv[1][0]);
// => 'john'
```

## Configuring

The `papaparse` library used to parse CSV assets can be configured by placing a `.papaparserc` or `.papaparse.js` file in the root of your project. These must be a valid [papaparse config](https://www.papaparse.com/docs#config).

For example, in `.papaparse.js`:

```
module.exports = {
    delimiter: ",",
    quoteChar: "'",
    header: true, // Set to false to disable turning each row into an object with header keys
    transformHeader: (header) => header.toLowerCase() // Transform all header keys into lowercase
    dynamicTyping: true, // Set to false to disable converting columns into their true types (e.g, string to number)
    fastMode: false, // Set to true to speed up processing, as long as there are no `quoteChars` in your assets
    transform: (val, columnNumber) => val.toLowerCase() // Transforms each value, in this case making all values lowercase
}
```
