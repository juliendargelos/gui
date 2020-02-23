import autoExternal from 'rollup-plugin-auto-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import bundleSize from 'rollup-plugin-bundle-size'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import cleaner from 'rollup-plugin-cleaner'
import alias from '@rollup/plugin-alias'
import serve from 'rollup-plugin-serve'
import html from '@rollup/plugin-html'
import ts from 'rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'

import pkg from './package.json'
import tsconfig from './tsconfig.json'

const development = process.env.ROLLUP_WATCH
const production = !development

const demo = process.env.DEMO || development
const build = !demo

const config = {
  input: 'src/index.ts',
  output: { sourcemap: true },
  plugins: [
    build && autoExternal(),
    build && bundleSize(),
    alias({
      resolve: ['.ts'],
      entries: Object
        .entries(tsconfig.compilerOptions.paths)
        .map(([find, [replacement]]) => ({ find, replacement }))
    })
  ]
}

export default [
  build && {
    ...config,
    output: [
      { ...config.output, file: pkg.main, format: 'cjs' },
      { ...config.output, file: pkg.module, format: 'es' }
    ],
    plugins: [
      ...config.plugins,
      ts(),
      eslint(),
      cleaner({ targets: [pkg.main.replace(/\/[^\/]+$/, '')] }),
    ]
  },

  build && {
    ...config,
    output: {
      ...config.output,
      file: pkg.browser,
      format: 'umd',
      name: 'GUI'
    },
    plugins: [
      ...config.plugins,
      ts({
        transpileOnly: true,
        tsconfig: tsconfig => ({ ...tsconfig, target: 'es5' })
      }),
      nodeResolve({ extensions: ['.ts', '.js'] }),
      commonjs(),
      terser()
    ]
  },

  demo && {
    ...config,
    input: 'demo/index.ts',
    output: {
      ...config.output,
      file: production ? 'docs/demo/index.js' : 'demo-dist/index.js',
      format: 'iife',
      globals: {
        crypto: 'crypto'
      }
    },
    plugins: [
      ...config.plugins,
      ts({
        tsconfig: tsconfig => ({
          ...tsconfig,
          target: 'es5',
          declaration: false
        })
      }),
      postcss(),
      cleaner({ targets: ['demo-dist'] }),
      nodeResolve({ extensions: ['.ts', '.js'] }),
      commonjs(),
      html({ title: `${pkg.name} demo` }),
      production && terser(),
      development && serve('demo-dist')
    ]
  }
].filter(Boolean)
