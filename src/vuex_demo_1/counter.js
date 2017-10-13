// Counter 组件
const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count () {
            return this.$store.state.count;
        }
    }
}

export default {
    Counter
}
