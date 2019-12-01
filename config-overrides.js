"use strict"

const FS = require("fs")

/**
 * For any page called `foobar`, you must provide this file: `src/app/foobar/index.tsx`
 * and the build process will generate `public/foobar.html`
 */
const PAGES = ['tutorial/clear']


const rewireYAML = require('react-app-rewire-yaml')
const MultipleEntry = require('react-app-rewire-multiple-entry')


const multipleEntry = MultipleEntry(
  ['clear', 'background', 'sprites-1'].map(name => ({
    entry: `src/page/tutorial/${name}/${name}.tsx`,
    template: 'public/index.html',
    outPath: `tuto-${name}.html`
  }))
)

module.exports = {
  webpack: function(config, env) {
    multipleEntry.addMultiEntry(config);
    config = rewireYAML(config, env)

    const lastRule = config.module.rules.pop()
    lastRule.oneOf.unshift({
      //test: /\.(md|vert|frag)$/i,
      test: /\.(md|vert|frag)$/i,
      loader: require.resolve('raw-loader')
    })
    config.module.rules.push(lastRule)

    return config;
  }
}



function flush(obj, name) {
  FS.writeFileSync(`${name}.json`, JSON.stringify(obj, replacer, '    '))
}


function replacer(k, v) {
  if (v instanceof RegExp) {
    return v.source
  }
  return v
}
