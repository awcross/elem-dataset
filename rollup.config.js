import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: 'index.js',
	dest: 'dist/index.js',
	format: 'umd',
	moduleName: 'elemDataset',
	plugins: [
		commonjs(),
		babel()
	]
};
