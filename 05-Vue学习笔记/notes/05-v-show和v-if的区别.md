v-if 是将元素从 DOM 树中删除，而 s-how 只是将元素的 display 修改成 none。
使用 v-if 会造成更多的资源消耗，在需要频繁切换时建议使用 v-show ，仅仅需要切换一次时使用 v-if 可以提高性能