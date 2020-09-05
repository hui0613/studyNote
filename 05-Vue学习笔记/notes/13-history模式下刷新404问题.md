### vue路由history模式刷新页面出现404问题

vue hash模式下，URL中存在'#'，用'history'模式就能解决这个问题。但是history模式会出现刷新页面后，页面出现404。解决的办法是用nginx配置一下。
在nginx的配置文件中修改

#### 方法一

```
location /{
    root   /data/nginx/html;
    index  index.html index.htm;
    if (!-e $request_filename) {
        rewrite ^/(.*) /index.html last;
        break;
    }
}
```

#### 方法二

vue.js官方教程里提到的 [https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)
```
 server {
        listen       8081;#默认端口是80，如果端口没被占用可以不用修改
        server_name  myapp.com;
        root        D:/vue/my_app/dist;#vue项目的打包后的dist
        location / {
            try_files $uri $uri/ @router;#需要指向下面的@router否则会出现vue的路由在nginx中刷新出现404
            index  index.html index.htm;
        }
        #对应上面的@router，主要原因是路由的路径资源并不是一个真实的路径，所以无法找到具体的文件
        #因此需要rewrite到index.html中，然后交给路由在处理请求资源
        location @router {
            rewrite ^.*$ /index.html last;
        }
        #.......其他部分省略
  }
```