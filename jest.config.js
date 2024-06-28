// jest.config.js
module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
}
