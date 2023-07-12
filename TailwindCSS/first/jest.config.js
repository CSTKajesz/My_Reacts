module.exports = {
    testMatch: ['**/__tests__/**/*.test.js'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js'],
    // esm: 'babel',
};
