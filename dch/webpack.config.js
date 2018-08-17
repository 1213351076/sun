module.exports = {
	entry : {
		"index11": __dirname+"/src/index11.js",
		"sign11": __dirname+"/src/sign11.js",
		"list11": __dirname+"/src/list11.js",
		"details11": __dirname+"/src/details11.js",
		"shoping11": __dirname+"/src/shoping11.js",
	},
	output : {
		path: __dirname+"/dist",
		filename: "[name].js"
	},
    module: {
        rules: [{
            test: /\.js/,
            use: {
                loader: "babel-loader",
                options: {presets: ["env"]}
            },
            exclude: /node_modules/			
        },{
			test: /\.(scss|css)/,	
			use:[
				{loader: 'style-loader'},	
				{loader: 'css-loader'},
				{loader: 'sass-loader'}
			]
		}]
    },
    devServer: {
        contentBase: "./dist", 
        port: 8080
    } 
}