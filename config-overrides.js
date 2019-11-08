"use strict"

/**
 * For any page called `foobar`, you must provide this file: `src/app/foobar/index.tsx`
 * and the build process will generate `public/foobar.html`
 */
const PAGES = ['tutorial/clear']


const rewireYAML = require('react-app-rewire-yaml')
const MultipleEntry = require('react-app-rewire-multiple-entry')


const multipleEntry = MultipleEntry(
    [
        {
            entry: `src/page/tutorial/clear/index.tsx`,
            template: 'public/index.html',
            outPath: `tuto-clear.html`
        }
    ]
)

module.exports = {
    webpack: function(config, env) {
        multipleEntry.addMultiEntry(config);
        config = rewireYAML(config, env)
        return config;
    }
}
