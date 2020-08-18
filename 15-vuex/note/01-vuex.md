## 核心概念

### State
> State 是提供唯一的公共数据源,所有的共享数据都必须存放在 state 中

##### 组件访问 state 中的数据

+ `this.$store.state.全局数据名称`

+ 使用 mapState 函数访问全局数据
    + 1. 从 `Vuex` 中按倒入 `mapState` 函数
    + 2. 通过 `mapState` 函数,将当前组件需要的全局数据,映射为当前组件的 `computed` 属性


### 使用 `Mutation` 来修改 Store 中的全局数据

> 在 `Mutations` 中定义函数,第一个参数为 `state`(即 `store` 实例中的`state`),从第二个参数开始为自定义参数

#### 调用 Mutations 中全局函数的方法

+ 1. `this.$store.commit('函数名称','参数')`

+ 2. 使用 `mapMutations` 函数来将 `mutaitons` 中函数映射为当前组件中 `methods` 中的方法

### Actions

> 对于异步的任务必须使用 Action.而不能使用 mutations ,但是 Action 中还是要通过 mutations 来操作数据

#### 调用 Actions 中异步函数

+ 1. `this.$store.dispatch('函数名称')`
+ 2. 使用 `mapAction` 函数,将 需要的 `actions` 中的函数映射到当前组件中 `methods`

### Getter

> 用于对 state 中数据进行加工处理形成新的数据,相当于组件中 `computed` 属性.当 state 中数据发生变化后, getter 中数据也会发生变化

#### 调用 getters 中的方法

+ 1. `this.$store.getters.函数名称`
+ 2. 使用 `mapGetters` 所需要的 getters 中函数映射到当前组件中的`computed` 属性中