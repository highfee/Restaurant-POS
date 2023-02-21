// const withCss = module("@zeit/next-css");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }
    return config;
  },
};
