# 最佳实践 - 通用模板

> 通过最少量的代码，实际操作一下，总结一份 Webpack5 的通用配置文件模板。

## 初始化项目

::: tip
Webpack5 最小支持的 Node.js 版本已经为 8。
:::

```bash
mkdir webpack-template

cd webpack-template/

npm init -y
```

## 安装 Webpack

::: tip
当前（2021 年）执行安装命令时，默认安装的是 Webpack5。  
如果需要安装 Webpack4，就执行 `npm install webpack@4 --save-dev`
:::

```bash
# 包含 Webpack 核心内容
npm install webpack --save-dev

# 包含 Webpack 操作的常见命令
npm install webpack-cli --save-dev
```

## 创建入口文件

入口文件默认地址为 `webpack-template/src/index.js`，`src/` 下面存放项目源码。

## 执行打包（必须指定 mode）

下面的命令依次包含了入口文件、出口文件（通过 `--output-path` 指定）和模式。

```bash
webpack ./src/index.js --output-path ./dist --mode=development
```

在通用模板中，会使用配置文件来简化命令行选项。

## 通用模板

上面介绍的是从无到有创建一个 Webpack 最小工程的前置步骤。

在使用 Webpack 的过程，大部分就是跟配置文件打交道的过程。默认的配置文件名称是 `webpack.config.js`，根据需要可以进行拆分配置。

常用的配置项包括：

* mode（模式，不可省略）
* entry（入口，不可省略）
* output（出口，不可省略）
* module（模块的配置 - 不同类型文件的配置 - loader 配置）
* plugins（插件）
* devServer（开发服务器的配置）

默认配置文件 `webpack.config.js` 的基本构成如下：

### 开发模板
```javascript
"use strict";
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ProvidePlugin, DefinePlugin } = require('webpack');
const resolve = (dir) => {
    return path.join(__dirname, dir);
}
module.exports = {
    mode: 'development',
    entry: {
        app: [resolve("src/main.js")]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: { '^/api': '' },
            },
        }
    },
    output: {
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].js'
    },
    watchOptions: {
        ignored: /node_modules/
    },
    resolve: {
        alias: {
            '@': resolve("src"),
            '@ant-design/icons/lib/dist$': resolve('src/lib/icon.js'),
            vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['.mjs', '.js', '.jsx', '.vue'],
        fallback: { "crypto": require.resolve("crypto-browserify"), "stream": require.resolve("stream-browserify"), vm: require.resolve('vm-browserify'), "path": require.resolve("path-browserify") }
    },
    module: {
        rules: [
            {
                test: /\.(m?js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                whitespace: 'condense'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        include: resolve('src/icons'),
                        use: [{
                            loader: 'svg-sprite-loader',
                            options: {
                                symbolId: 'icon-[name]'
                            }
                        }]
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(s?css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `@import "~@/styles/variables.scss";`
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|mp3)(\?.*)?$/,
                type: 'asset',
                exclude: resolve("src/icons"),
                //解析
                parser: {
                    //转base64的条件
                    dataUrlCondition: {
                        maxSize: 4 * 1024, // 25kb
                    }
                },
                generator: {
                    //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                    filename: 'img/[name].[contenthash:8][ext]',
                    //打包后对资源的引入，文件命名已经有/img了
                    publicPath: '../'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "web",
            favicon: resolve("public/favicon.ico"),
            template: resolve("public/index.html"),
            inject: 'body',
            templateParameters: {
                cdn: {
                    js: [],
                    css: []
                }
            }
        }),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: resolve('public'),
                    to: resolve('dist'),
                    toType: 'dir',
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: [
                            '.DS_Store',
                            '**/*.html'
                        ]
                    }
                }
            ]
        }),
        new DefinePlugin({
            "_production": false
        }),
        new ProvidePlugin({
            _: 'lodash'
        })
    ]
}
```
### 生产模板
```javascript
"use strict";
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { DefinePlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { VueCDN, AxiosCDN, VueRouterCDN, VuexCDN, i18n, timJsSdk } = require('./src/plugins/cdn');
const resolve = (dir) => {
    return path.join(__dirname, dir);
}
const cdn = {
    css: [],
    js: [VueCDN, AxiosCDN, VueRouterCDN, VuexCDN, i18n, timJsSdk]
};
module.exports = {
    mode: 'production',
    entry: {
        app: [resolve("src/main.js")]
    },
    output: {
        filename: 'js/[name].[contenthash:8].js',
        chunkFilename: 'js/[name].[contenthash:8].js',
        publicPath: 'https://cdn.dobettest.cn'
    },
    resolve: {
        alias: {
            '@': resolve("src"),
            echart: resolve('src/lib/echarts.js'),
            '@ant-design/icons/lib/dist$': resolve('src/lib/icon.js'),
            vue$: 'vue/dist/vue.esm.js'
        },
        extensions: ['.cjs', '.js', '.vue'],
        fallback: { "crypto": require.resolve("crypto-browserify"), "stream": require.resolve("stream-browserify") }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                whitespace: 'condense'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        include: resolve('src/icons'),
                        use: [{
                            loader: 'svg-sprite-loader',
                            options: {
                                symbolId: 'icon-[name]'
                            }
                        }]
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(s?css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                // publicPath 是资源相对于上下文的相对路径
                                // 例如：对于 ./css/admin/main.css publicPath 将会是 ../../
                                // 而对于 ./css/main.css publicPath 将会是 ../
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            }
                        }
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: `@import "~@/styles/variables.scss";`
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|mp3)(\?.*)?$/,
                type: 'asset',
                exclude: resolve("src/icons"),
                //解析
                parser: {
                    //转base64的条件
                    dataUrlCondition: {
                        maxSize: 4 * 1024, // 25kb
                    }
                },
                generator: {
                    //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
                    filename: 'img/[name].[contenthash:8][ext]',
                    //打包后对资源的引入，文件命名已经有/img了
                    publicPath: '../'
                }
            }
        ]
    },
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
    },
    performance: {
        maxEntrypointSize: 10000000,
        maxAssetSize: 30000000
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true
                    }
                }
            }),
            new CssMinimizerPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial'
                },
                commons: {
                    name: 'chunk-commons',
                    test: /[\\/]src[\\/]js[\\/]/,
                    minChunks: 2, //  minimum common number
                    priority: 5,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
        new HtmlWebpackPlugin({
            title: "web",
            favicon: resolve("public/favicon.ico"),
            template: resolve("public/index.html"),
            inject: 'body',
            templateParameters: {
                cdn: {
                    js: cdn['js'],
                    css: cdn['css']
                }
            }
        }),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: resolve('public'),
                    to: resolve('dist'),
                    toType: 'dir',
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        ignore: [
                            '.DS_Store',
                            '**/*.html'
                        ]
                    }
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[contenthash:8].css',
            chunkFilename: 'css/[contenthash:8].css'
        }),
        new BundleAnalyzerPlugin(),
        new IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        }),
        new CompressionWebpackPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: /\.js$|\.css/, //匹配文件名
            threshold: 10240, //对超过10k的数据压缩
            minRatio: 0.8
        })
    ]
}
```
