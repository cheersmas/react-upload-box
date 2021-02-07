import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

const banner = `/*
  * ${packageJson.name}
  * ${packageJson.description}
  * v${packageJson.version}
  * ${packageJson.license} License
  */
`;

export default {
  input: 'src/react-upload-box.tsx', // update it to point to correct component definition
  output: [
    {
      banner,
      exports: 'named',
      file: packageJson.main,
      format: 'cjs',
      strict: true
    },
    {
      banner,
      exports: 'named',
      file: packageJson.module,
      format: 'esm',
      strict: true
    },
    {
      file: packageJson.umd,
      format: 'umd',
      exports: 'named',
      strict: true,
      banner,
      name: 'ReactComponent',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  ],
  plugins: [
    typescript(),
    babel({
      extensions: ['tsx', 'ts'],
      babelHelpers: 'runtime',
      plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-optional-chaining'
      ]
    }),
    commonjs(),
    peerDepsExternal(),
    resolve(),
    terser({
      compress: {
        drop_debugger: true,
        drop_console: true
      },
      format: {
        comments: false
      }
    })
  ],
  external: ['react', 'react-dom', '@babel/runtime']
};
