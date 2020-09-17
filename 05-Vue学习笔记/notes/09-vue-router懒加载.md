**一般的路由配置文件**
```
import Home from '../components/Home'
import About from '../components/About'

export default new VueRouter({
    routers:[
        {
            path:"/",
            name:"home",
            component:Home
        },
        {
            path:'/about',
            name:About,
            components:About
        }
    ]
})
```


当打包构建项目时，会将项目所有组件的 js 代码放在同一个文件中，这使得文件变得非常大，在首次加载时速度较慢，出现短暂的页面空白现象，使用路由的懒加载，将不同路由对应的组件分割成不同的代码块，存放在不同的js 文件中。

**使用路由懒加载的配置文件**
```
const Home = () => import('../components/Home')
const About = () => import('../components/About')

export default new VueRouter({
    routes:[
        {
            path:'/',
            name:Home,
            component:Home
        },
        {
            path:'About',
            name:About,
            component:About
        }
    ]
})
```


