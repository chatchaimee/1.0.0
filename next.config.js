const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE, NODE_ENV } = process.env;

module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    });

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 9999,
          openAnalyzer: true
        })
      );
    }

    return config;
  },
  exportPathMap: () => ({
    "/": { page: "/" }
  }),
  assetPrefix: NODE_ENV !== "development" ? "/1.0.0" : ""
};
