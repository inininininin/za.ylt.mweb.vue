import Vue from 'vue' 
const Coms = [
    /* 页面过度效果模板*/
    // 路由跳转左右移动动画效果 
    {
        name: "transitions",
        component: () =>
            import ('@/components/moduleComponents/transition')
    },
    /* 导航栏模板*/
    // 底部有边框的导航栏
    {
        name: "topNavBottomBorder",
        component: () =>
            import ('@/components/moduleComponents/topNav_bottomBorder')
    },
    // 导航栏
    {
        name: "topNav",
        component: () =>
            import ('@/components/moduleComponents/topNav')
    },
    // 返回加输入框，带底带标题
    {
        name: "topNavSearchScreening",
        component: () =>
            import ('@/components/moduleComponents/topNav_searchScreening')
    },
    // 左侧返回加输入框，右边按钮，带底带标题
    {
        name: "topNavSearchReturn",
        component: () =>
            import ('@/components/moduleComponents/topNav_searchReturn')
    },
    // 左侧返回加输入框，右边按钮，中间带类型选择，底部带标题
    {
        name: "topNavTypeChoose",
        component: () =>
            import ('@/components/moduleComponents/topNav_typeChoose')
    },
    // 左侧返回，中间输入框，右边按钮，底部带类型导航栏
    {
        name: "sourceManagementNav",
        component: () =>
            import ('@/components/moduleComponents/sourceManagementNav')
    },
    
    /* 列表模板*/
    // 文章列表模板 左侧标题及其时间，右侧图片
    {
        name: "moduleList",
        component: () =>
            import ('@/components/moduleComponents/moduleList')
    },
    // 门诊列表模板 左右二个li
    {
        name: "clinicList",
        component: () =>
            import ('@/components/moduleComponents/clinicList')
    },
    // 左侧文字，右侧图片
    {
        name: "listImg",
        component: () =>
            import ('@/components/moduleComponents/list_img')
    },
    
    
]

const vueComs = () => {
    Coms.forEach(item => {
        return Vue.component(item.name, item.component)
    })
}
export default vueComs