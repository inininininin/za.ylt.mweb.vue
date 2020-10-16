import Vue from 'vue'

const Coms = [
    {
        name: "topNavBottomBorder",
        component: () =>
            import ('@/components/moduleComponents/topNav_bottomBorder')
    },
    {
        name: "topNav",
        component: () =>
            import ('@/components/moduleComponents/topNav')
    }
]

const vueComs = () => {
    Coms.forEach(item => {
        return Vue.component(item.name, item.component)
    })
}
export default vueComs