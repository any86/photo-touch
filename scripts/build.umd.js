const chalk = require('chalk');
const parseArgs = require('minimist')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const {
    terser
} = require('rollup-plugin-terser');
const {
    build
} = require('./build');
const { compress } = require('minimist')(process.argv.slice(2));

console.log(chalk.blue(`🤖 正在${compress ? '压缩' : '生成'}umd模块!`));

const options = {
    input: `./packages/photo-touch/src/index.ts`,
    output: {
        file: `./packages/photo-touch/dist/photo-touch.umd.js`,
        format: 'umd',
        name: 'PhotoTouch',
    sourcemap:true
    },
    plugins: [nodeResolve()],
    tsConfig: {
        target: "ES5",
    },
    terser: terser({
        output: {
            comments: false
        }
    })
}
if (compress) {
    options.output.file = options.output.file.replace('.js', '.min.js');
    options.plugins[terser()];
}
build(options);