import babel from 'rollup-plugin-babel';

export default {
    entry: 'js/app.js',
    format: 'iife',
    plugins: [babel()],
    dest: 'dist/js/bundle.js',
    external: [
        'react',
        'react-dom'
    ],
    globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
