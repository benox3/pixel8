import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/cjs/pixel8.js',
      format: 'cjs'
    },
    {
      file: 'dist/es/pixel8.js',
      format: 'es'
    },
  ],
  external: ['react'],
  plugins: [
    commonjs({
      include: 'node_modules/**'
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    })
  ]
};
