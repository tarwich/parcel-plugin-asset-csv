'use strict';

module.exports = (bundler) => {
  bundler.addAssetType('csv', require.resolve('./CSVAsset'));
};
