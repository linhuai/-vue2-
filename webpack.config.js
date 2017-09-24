module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		publicPath: '/dist/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: ["vue-loader"]
			},
			{
				test: /\.css$/,
				use: ["vue-style-loader", "css-loader"]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use:[
						{
							loader: "url-loader",
							options: 'images/[name].[hash:7].[ext]'
						}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [
						{
						loader: 'url-loader',
						options: {
							limit: 1000,
							name: 'fonts/[name].[hash:7].[ext]'
						}
					}
				]
			},
			{
			    test: /\.styl$/,
			    use: ["vue-style-loader", "css-loader", "stylus-loader"]
			}
		]
	}
}