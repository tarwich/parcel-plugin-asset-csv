const Asset = require('parcel-bundler/lib/Asset');
const Papa = require('papaparse');
const serializeObject = require('parcel-bundler/lib/utils/serializeObject');

class CSVAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }

  parse(code) {
    const opts = await this.getConfig(['.papaparserc', '.papaparse.js']) || {
      header: true,
      dynamicTyping: true
    };

    return Papa.parse(code, opts).data;
  }

  generate() {
    return serializeObject(
      this.ast,
      this.options.minify && !this.options.scopeHoist
    );
  }
}

module.exports = CSVAsset;