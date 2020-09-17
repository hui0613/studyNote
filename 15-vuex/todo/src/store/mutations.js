export default {
    initList(state,list) {
        state.list = list
    },
    setInputValue(state,str) {
        state.inputValue = str
    },
    addList(state) {
        let obj = {
            id: state.nextId,
            info: state.inputValue,
            done: false
        }
        state.list.push(obj)
        state.nextId++;
        state.inputValue = ''
    },
    removeItemList(state,id) {

        let index = state.list.findIndex(x => x.id === id)
        if (index != -1) {
            state.list.splice(index,1)
        }

    },
    statusChange(state,params) {
        let index = state.list.findIndex(x => x.id === params.id)
        state.list[index].done = params.status
    },
    removeDone(state) {
        state.list = state.list.filter(e => e.done === false)
    },
    changeListView(state,str) {
        state.viewStatus = str
    }
}