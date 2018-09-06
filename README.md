# my-keystone
my keystone created

一、安装、准备
1.安装node （version 8.11.4）
2.安装mongoDB (version 4.0)。 
官网下载，
创建一个数据库存储目录 /data/db ： sudo mkdir -p /data/db
启动 mongodb，默认数据库目录即为 /data/db： sudo mongod

新建项目。 npm init ,安装keystone :  npm install --save keystone
初始设置： 创建一个新文件，keystone.js ： 
  var keystone = require('keystone');

  keystone.init({
    'cookie secret': 'secure string goes here',
  });

  keystone.start();
  
启动项目 ： node keystone.js

切记：每次启动项目前，先启动mongodb . 命令：sudo mongod .

参考链接：https://v4.keystonejs.com/getting-started/setting-up/part-1/
