module.exports = {
  //   presets: ['@vue/cli-plugin-babel/preset'],
  //   plugins: [
  //     [
  //       'import',
  //       {
  //         libraryName: 'vant',
  //         libraryDirectory: 'es',
  //         style: true,
  //       },
  //       'vant',
  //     ],
  //   ],
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', { modules: false }],
  ],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
      },
    ],
  ],
}
