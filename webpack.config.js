import path from 'path'
import { fileURLToPath } from 'url'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CompressionPlugin from 'compression-webpack-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProd = process.env.NODE_ENV === 'production'

export default {
  mode: isProd ? 'production' : 'development',
  stats: 'minimal',

  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].[contenthash:8].js' : '[name].js',
    chunkFilename: isProd ? '[name].[contenthash:8].js' : '[name].js',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2017',
        },
      },
      {
        test: /\.css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'fonts/[name][ext]' },
      },
      {
        test: /\.ico$/i,
        type: 'asset/resource',
        generator: { filename: '[name][ext]' },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      inject: 'body',
      minify: isProd && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[contenthash:8].css' : '[name].css',
      chunkFilename: isProd ? '[id].[contenthash:8].css' : '[id].css',
    }),

    isProd && new CompressionPlugin({ algorithm: 'gzip' }),
    isProd &&
      new CompressionPlugin({
        algorithm: 'brotliCompress',
        filename: '[path][base].br',
      }),
  ].filter(Boolean),

  optimization: {
    minimize: isProd,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: { format: { comments: false } },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          enforce: true,
        },
      },
    },
    runtimeChunk: { name: 'runtime' },
  },

  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },

  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',

  performance: {
    hints: false,
  },
}
