import babel from 'rollup-plugin-babel';

export default {
    entry: 'js/app.js',
    dest: 'dist/js/bundle.js',
    format: 'iife',
    plugins: [
        babel()
    ],
    external: [
        'react',
        'react-dom'
    ],
    globals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
