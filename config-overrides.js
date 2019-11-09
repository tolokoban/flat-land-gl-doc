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
    [{
            entry: `src/page/tutorial/clear/index.tsx`,
            template: 'public/index.html',
            outPath: `tuto-clear.html`
        },
        {
            entry: `src/page/tutorial/background/index.tsx`,
            template: 'public/index.html',
            outPath: `tuto-background.html`
        }
    ]
)

module.exports = {
    webpack: function(config, env) {
        multipleEntry.addMultiEntry(config);
        config = rewireYAML(config, env)

        const lastRule = config.module.rules.pop()
        lastRule.oneOf.unshift({
            //test: /\.(md|vert|frag)$/i,
            test: /\.md$/i,
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
