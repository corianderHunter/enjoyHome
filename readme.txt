本工程基于generator-ionic-gulp生成.

https://github.com/tmaximini/generator-ionic-gulp#readme

配置开发环境的步骤:

1. 安装gulp
sudo npm install -g gulp

2. 进入zrsm_worker目录,安装npm依赖:
npm install

3. 启动项目
gulp

此时开发的web站点将通过默认浏览器打开, livereload也生效了.
修改代码的过程中,可以实时的在浏览器里看到变化.


项目源码结构:

1. js代码在app/scripts下, 又细分成多个目录.
2. scss代码写在app/styles目录下.
3. html代码写在app/templates下.

一个页面会分别有一个js文件, 一个scss文件和一个html文件, 分别对应这个angular view的controller, 样式和html标签, 它们分别在一下目录:
app/scripts/controllers, app/styles/views, app/templates.

请尽量不要引入其他的第三方样式库, 因为有可能和ionic的样式冲突, 关于ionic:
http://ionicframework.com/


