// vue.config.js
// process.env.NODE_ENV 全局环境变量>production>development
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
// console.log(process.env)
module.exports = {
    // 部署生产环境和开发环境下的URL
    // baseUrl: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    // webpack-dev-server 相关配置,它支持webPack-dev-server的所有选项
    devServer: {
        open: true,
        host: 'local.xc2018.com.cn',
        port: 80,
        https: false,
        hotOnly: false,
        proxy: { // 设置代理
            '/dev': {
                // target: 'mall.xc2018.com.cn', // 测试🐔
                // target: 'http://192.168.0.160:8080', // 周伟亮
                target: 'http://192.168.0.121:8080', // 陈 本地
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/dev': '/' // 需要rewrite重写的,
                }
            }
        }
    },
    // 如果你想要在生产构建时禁用 eslint-loader，你可以用如下配置
    // lintOnSave: process.env.NODE_ENV !== 'production',
    lintOnSave: process.env.NODE_ENV !== 'production',
    // css相关配置
    css: {
        // 启用 CSS modules
        modules: false,
        // 是否使用css分离插件
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
            }
        }
    },
    /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     *  打包之后发现map文件过大，项目文件体积很大，设置为false就可以不输出map文件
     *  map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。
     *  有了map就可以像未加密的代码一样，准确的输出是哪一行哪一列有错。
     * */
    productionSourceMap: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('base', resolve('src/base'))
    },
    // vux 相关配置,使用vux-ui
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        })
    }
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: false,
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // use thread-loader for babel & TS in production build ,enabled by default if the machine has more than 1 cores
    // parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: {},
    // 第三方插件配置
    // pluginOptions: {
    // }
    // outputDir在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
    // outputDir: "mycli3",
    // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
    // assetsDir: "assets",
    // 指定生成的 index.html 的输出路径  (打包之后，改变系统默认的index.html的文件名)
    // indexPath: "myIndex.html",
    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
    // filenameHashing: false,
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。(默认false)
    // runtimeCompiler: false,
}
