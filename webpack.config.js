const path = require('path');

module.exports = {
	entry: ['./node_modules/govuk-frontend/govuk/all.scss'],
	output: {
		path: path.resolve(__dirname, './node_modules/govuk-frontend/govuk')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/govuk-frontend/govuk/[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};