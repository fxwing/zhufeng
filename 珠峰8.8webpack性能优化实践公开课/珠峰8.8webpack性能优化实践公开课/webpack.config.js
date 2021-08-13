const path  = require("path");
const FriendlyErrorsWebpackPlugin= require("friendly-errors-webpack-plugin");
const notifier = require('node-notifier');
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const smw = new SpeedMeasureWebpackPlugin();
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const HtmWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = smw.wrap({
    mode:"development",//配置的模式
    devtool:"source-map",//调试工具的选择
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[name].js'  
    },
    resolve:{
        extensions:[".js",".vue",".json"],  //文件越多的放在最前面
        alias:{
            bootstrap:path.resolve(__dirname,"node_modules/bootstrap/dist/css/bootstrap.css")
        }
    },
    externals:{
        jquery:'jQuery'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.resolve(__dirname,"src"),
                // exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            cacheDirectory:true
                        }
                    }
                    // "cache-loader",
                    // "babel-loader"
                ]    
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
       new  FriendlyErrorsWebpackPlugin({
           //运行错误的提醒
           onErrors:(servertity,errors)=>{
               let error = errors[0];
               notifier.notify({
                   title:"webpack编译失败",
                   message:servertity+":"+error.name,
                   subtitle:error.file || ""
               })
           }
       }),
       new BundleAnalyzerPlugin({
           analyzerMode:"disabled",//不启动展示打包报告的http服务器
           generateStatsFile:true //要生成states.json文件
       }),
       new HtmWebpackPlugin({
           template:"./src/index.html"
       }),
       new webpack.IgnorePlugin({
           resourceRegExp:/^\.\/locale$/,//资源正则 (语言包)
           contextRegExp:/moment$/  //上下文  目录正则
       })
    ]
})