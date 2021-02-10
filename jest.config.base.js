module.exports = (dir) => {
  const package = require(`${dir}/package.json`);

  return {
    testEnvironment: 'node',
    transform: {
      '^.+\\.(j|t)sx?$': 'babel-jest',
    },
    // testMatch: ["<rootDir>/**/*.test.[jt]s?(x)"],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    roots: [`<rootDir>`],
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/__mocks__/svgrMock.ts',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.ts',
      '\\.(css|less)$': 'identity-obj-proxy',
    },

    rootDir: dir,
    name: package.name,
    displayName: package.name,
  };
};
