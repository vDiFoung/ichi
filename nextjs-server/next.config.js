
module.exports = {
  webpack: (config, {buildId, dev, isServer, defaultLoaders}) => {
    /**
     * Styles in regular CSS files: https://github.com/zeit/styled-jsx
     * You can import css and use it with styled-jsx
     * Can use SCSS but I can not found loader for nesting in SCSS
     *
     * Nếu css file name import vào ko chứa .global hoặc .resolve thì style-jsx là scoped.
     */
    config.module.rules.push({
      test: /\.(s*)css$/,
      use: [
        defaultLoaders.babel,
        // 'style-loader', // creates style nodes from JS strings
        // 'css-loader', // translates CSS into CommonJS
        // 'sass-loader', // compiles Sass to CSS, using Node Sass by default
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: function (fileName) {
              if (fileName.includes('.global')) {
                return 'global';
              } else if (fileName.includes('.resolve')) {
                return 'resolve';
              } else {
                return 'scoped';
              }
            }
          }
        }
      ]
    });
    
    return config;
  },
  
  env: {
    // remoteServer: 'http://192.168.100.9:2709',
    remoteServer: 'http://localhost:2709',
    domainName: 'http://localhost:3000',
    publicKey: '-----BEGIN PUBLIC KEY-----\n' +
      'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIAUhFuNCaW6Y64uij9nD5dhfAJw6g7S\n' +
      'v7BhdwgKS7QKrbnM2qyi8hmVrFeFM8popzTcMmcp1QCPgK/kbqjKyYUCAwEAAQ==\n' +
      '-----END PUBLIC KEY-----',
    
  }
};
