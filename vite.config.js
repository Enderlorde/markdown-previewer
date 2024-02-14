import postcssSimpleVars from 'postcss-simple-vars';
import colors from './src/colors';

export default {
    root: "./src",
    css: {
        postcss: {
            plugins: [
                postcssSimpleVars({variables:colors})
            ],
        }
    }
}