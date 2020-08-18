<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" :value="inputValue" @change="handelInput" />
    <a-button type="primary" @click="addItemList">添加事项</a-button>

    <a-list bordered :dataSource="infoList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @change="(e)=>{changeStatus(e,item.id)}">{{item.info}}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItem(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="footer">
        <!-- 未完成的任务个数 -->
        <span>{{unDoneList}}条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button
            :type="getViewStatus === 'all' ? 'primary':'default'"
            @click="changeList('all')"
          >全部</a-button>
          <a-button
            :type="getViewStatus === 'unDone' ? 'primary':'default'"
            @click="changeList('unDone')"
          >未完成</a-button>
          <a-button
            :type="getViewStatus === 'done' ? 'primary':'default'"
            @click="changeList('done')"
          >已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a @click="cleanDone">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {
    ...mapState(["list", "inputValue"]),
    ...mapGetters(["unDoneList", "getViewStatus", "infoList"]),
  },
  methods: {
    ...mapActions(["getList"]),
    ...mapMutations([
      "setInputValue",
      "addList",
      "removeItemList",
      "statusChange",
      "removeDone",
      "changeListView",
    ]),
    handelInput(e) {
      this.setInputValue(e.target.value);
    },
    addItemList() {
      console.log(this.inputValue.trim().length);
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning("文本框内容不能为空");
      } else {
        this.addList();
      }
    },
    removeItem(id) {
      this.removeItemList(id);
    },
    changeStatus(e, id) {
      // console.log(e, id);
      this.statusChange({ status: e.target.checked, id: id });
    },
    // 清除已完成
    cleanDone() {
      this.removeDone();
    },
    changeList(str) {
      this.changeListView(str);
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>