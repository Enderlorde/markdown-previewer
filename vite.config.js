import postcssSimpleVars from 'postcss-simple-vars';
import colors from './src/colors';

export default {
    root: "./src",
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    css: {
        postcss: {
            plugins: [
                postcssSimpleVars({variables:colors})
            ],
        }
    }
}