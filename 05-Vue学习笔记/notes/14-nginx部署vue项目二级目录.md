#### 背景：

- 使用 nginx 部署项目于二级目录
- Vue 项目采用 history 路由模式

### 1. 修改 vue.config.js 文件

```
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/projects/music'
        : '/',
}
```

**说明：`/projects/music` 就是项目部署目录，也是在访问项目时地址栏域名后面的部分**

> 例子：在 vue.config.js 配置如上的情况下，访问的 url 就是 `http://域名/projects/music`

**当然还需要 nginx 的配置相对应**

### nginx 配置

添加一个 serve

```
location /projects/{
    try_files $uri $uri/ @projectRouter;
    client_max_body_size 1024m;
    alias /自定义路径/projects/;
}
location @projectRouter {
    rewrite ^.*$ /index.html last;
}
```

- 说明

  -自定义路径就是 `projects` 目录所在的路径， 例如 `/home`、`/home/dmeo`

  - `@projectRouter` 是为了防止在刷新时出现 404 的情况，可以参考[vue 路由 history 模式刷新页面出现 404 问题](https://www.agonyy.top/detail.html?p=5f2eaa1963d0925b75a76b0d)

### 最后只需要将项目打包好的目录放在 projects 目录下就可以了，在访问项目时不需要加上 `index.html`
