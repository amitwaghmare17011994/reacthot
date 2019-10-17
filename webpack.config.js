const path = require("path");
var webpack = require("webpack");

module.exports = (env, options) => {
	const isDevMode = options.mode === "development";

	return {
		entry: ["react-hot-loader/patch", "./src/index.jsx"],
		devServer: {
			contentBase: path.join(__dirname, "public"),
			compress: true,
			port: 9000,
		},
		output: {
			path: __dirname + "/public/",
			filename: "bundle.js",
		},

		devtool: isDevMode ? "source-map" : false,
		 
		module: {
			rules: [
				{
					test: /\.(j|t)sx?$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							cacheDirectory: true,
							babelrc: false,
							presets: [
								[
									"@babel/preset-env",
									{ targets: { browsers: "last 2 versions" } }, // or whatever your project requires
								],
 								"@babel/preset-react",
							],
							plugins: [
								// plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
 								["@babel/plugin-proposal-class-properties", { loose: true }],
								"react-hot-loader/babel",
							],
						},
					},
				},
			],
		},
		 
	};
};
