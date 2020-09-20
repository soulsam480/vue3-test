module.exports = {
  configureWebpack: {
    target: "node",
    externals: {
      nedb: "commonjs nedb",
    },
  },
  pluginOptions: {
    electronBuilder: {
      /*  chainWebpackMainProcess: (config) => {
        // Chain webpack config for electron main process only
        config.target((args) => {
          args = "node";
          return args;
        });
      }, */
      // List native deps here if they don't work
      externals: ["nedb", "nedb-promises"],

      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: ["../../node_modules", "./node_modules"],
      nodeIntegration: true,
    },
  },
};
