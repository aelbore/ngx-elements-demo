import { clean, terser, TSRollupConfig, build } from 'aria-build'
import buildOptimizer from '@angular-devkit/build-optimizer/src/build-optimizer/rollup-plugin.js'

(async function() {
  const filesize = require('rollup-plugin-filesize')

  const uglifyOptions = {
    safari10: true,
    output: {
      ascii_only: true,
      comments: false,
      webkit: true,
    },
    compress: {
      pure_getters: true,
      passes: 3,
      global_defs: {
        ngDevMode: false,
      },
    }
  }

  const options: TSRollupConfig = {
    input: './.tmp/app.js',
    plugins: [
      buildOptimizer({
        sideEffectFreeModules: [
          `node_modules/@angular/core/`,
          `node_modules/@angular/platform-browser/`,
          `node_modules/@angular/common/`,
          `node_modules/@angular/compiler/`,
          `node_modules/rxjs/`,
        ]
      }),
      terser(uglifyOptions),
      filesize()
    ],
    output: {
      file: './dist/app.js',
      format: 'es',
      sourcemap: true
    }
  }

  await clean('dist')
  await build(options)
})()