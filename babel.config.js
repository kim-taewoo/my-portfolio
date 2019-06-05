module.exports = {
  presets: [
    [
      "@vue/app",
      {
        useBuiltIns: "entry",
        corejs: {
          version: 2,
          proposal: true
        }
      }
    ]
  ]
};
