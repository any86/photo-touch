const typescript = require('@rollup/plugin-typescript');
const json = require('@rollup/plugin-json');
const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
import { version } from './package.json';

export default {
    input: 'packages/photo-touch/src/index.ts',

    plugins: [
        typescript({
            exclude: 'node_modules/**',
            typescript: require('typescript'),
        }),
        nodeResolve(),
        json(),
        replace({
            __VERSION__: version
        })
    ],

    // external: id => ['any-event', 'any-touch', 'tslib'].includes(id) || /^@/.test(id),
    
    output: [{
        format: 'umd',
        name: 'PhotoTouch',
        file: `./packages/photo-touch/dist/index.umd.js`,
        sourcemap:true
    }]
};