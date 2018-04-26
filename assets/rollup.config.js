// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'ts/app.tsx',
  output: {
    file: '../priv/static/js/app.js',
    format: 'iife',
    name: 'hello',
    sourcemap: true
  },
  plugins: [
    typescript(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
    })
  ]
};
