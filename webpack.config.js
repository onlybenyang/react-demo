const path = require('path');

module.exports = {

    /*入口*/
    entry: [
    	'react-hot-loader/patch',
    	path.join(__dirname, 'src/index.js')
    ],

    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
    	extensions: ['.js', '.jsx'],
    	alias: {
    		pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router')
    	}
	},
	module: {
		rules: [
			{
				"exclude": "/node_modules/",
				// "include": "./src/",
				"loader": "babel-loader",
				"options": {
				  "presets": ["es2015", "react"],
				  "plugins": [
				    "react-hot-loader/babel"
				  ]
				},
				"test": /\.jsx?$/
			}
	    ]
	},
	devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true
    },
    devtool: 'inline-source-map'
};
