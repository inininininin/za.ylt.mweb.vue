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
    },
    {
        name: "topNavSearchScreening",
        component: () =>
            import ('@/components/moduleComponents/topNav_searchScreening')
    },
    {
        name: "topNavTypeChoose",
        component: () =>
            import ('@/components/moduleComponents/topNav_typeChoose')
    },
    {
        name: "moduleList",
        component: () =>
            import ('@/components/moduleComponents/moduleList')
    }
    
]

const vueComs = () => {
    Coms.forEach(item => {
        return Vue.component(item.name, item.component)
    })
}
export default vueComs