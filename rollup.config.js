const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
import { version } from './package.json';

export default {
    input: 'src/index.ts',

    plugins: [
        nodeResolve(),
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
        json(),
        replace({
            __VERSION__: version
        })
    ],

    external: id => ['any-event', 'any-touch', 'tslib'].includes(id) || /^@/.test(id),
    
    output: [{
        format: 'es',
        name: 'PhotoTouch',
        file: `dist/index.es.js`,
        sourcemap:true
    },{
        format: 'cjs',
        name: 'PhotoTouch',
        file: `dist/index.js`,
        sourcemap:true
    }]
};