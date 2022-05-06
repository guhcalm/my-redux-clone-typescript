import path from 'path';
import html from 'html-webpack-plugin';
import { CF } from './webpack.types.d';

const config: CF = env => ({
    entry: path.resolve( 'src', 'index.ts' ),
    output: { path: path.resolve( 'dist' ), filename: 'bundle.js' },
    mode: env.WEBPACK_SERVE ? 'development' : 'production',
    resolve: { extensions: [ '.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.json' ]},
    plugins: [new html({ template: path.resolve( 'public', 'index.html' ) })],
    module: { rules: [
        { test: /\.(js|ts)x?$/, exclude: /node_modules/, use: 'babel-loader' },
        { test: /\.(css|scss)$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]},
        { test: /\.(htm)l?$/, use: 'html-loader' }
    ]}
});

export default config;