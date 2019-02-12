const Asset = require('parcel-bundler/lib/Asset');
const Papa = require('papaparse');
const serializeObject = require('parcel-bundler/lib/utils/serializeObject');

class CSVAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }

  async parse(code) {
    const config = {
      header: true,
      dynamicTyping: true,
      ...(await this.getConfig(['.papaparserc', '.papaparse.js']) || {}),
    };

    return Papa.parse(code.trim(), config).data;
  }

  generate() {
    return serializeObject(
      this.ast,
      this.options.minify && !this.options.scopeHoist
    );
  }
}

module.exports = CSVAsset;
