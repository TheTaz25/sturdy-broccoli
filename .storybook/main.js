const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.tsx'],
	// Add any storybook addons
	addons: [
		'@storybook/addon-storysource',
		'@storybook/addon-knobs/register',
		'@storybook/addon-viewport/register',
	],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../')
		});

		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve('babel-loader'),
			options: {
				presets: [['react-app', { flow: false, typescript: true }]]
			}
		});
		config.resolve.extensions.push('.ts', '.tsx');

		return config;
	}
};

