import BoxSuccess from "@/views/box/BoxSuccess.vue"
import BoxCreate from "@/views/box/BoxCreate.vue"
import BoxList from "@/views/box/BoxList.vue"

export const boxRouter = [
    {
        path: '/box/success',
        name: 'BoxSuccess',
        component: BoxSuccess
    },
    {
        path: '/box/create',
        name: 'BoxCreate',
        component: BoxCreate
    },
    {
        path: '/box/list',
        name: 'BoxList',
        component: BoxList
    },

]