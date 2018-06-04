# learning-react

## 开始准备

1. 初始化npm

       npm init


1. 通过npm 安装webpack,在你的项目根目录下运行以下命令

       npm install --save-dev webpack webpack-cli

##  安装react相关包

`react`是核心包， `react-dom`是操作dom包

    npm install --save react react-dom

## 安装babel相关包
1. 安装`cli`和`loader`
       
       npm install --save-dev babel-cli babel-loader

2. 在项目根目录创建`.babelrc`文件

      文件最简单的配置

      `{
"presets":["env","react"]
}`

3. 安装`preset-env`和`preset-react`

       npm install --save-dev babel-preset-env babel-preset-react

这样一个简单的基于webpack的打包环境就配置好了。最主要的是使用了babel的预配置插件，使用`babel-preset-react`可以编译jsx等react相关代码。


参考文档

[React](https://hulufei.gitbooks.io/react-tutorial/content/introduction.html)

[Redux](http://www.redux.org.cn/)
