export default {
    /**
     *  1. 在 umi 中，约定的存放页面代码的文件夹是 pages，是复数，可以添加 singular 为 true 来让 page 变为约定的文件夹
     *  2. component 表示 page(s) 下的文件名
     */
    singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {path: '/', redirect: '/helloworld'},
            {
                path: '/helloworld',
                component: './HelloWorld',
            },
            {
                path: '/dashboard',
                routes: [
                    {path: '/dashboard/analysis', component: 'Dashboard/Analysis'},
                    {path: '/dashboard/monitor', component: 'Dashboard/Monitor'},
                    {path: '/dashboard/workplace', component: 'Dashboard/WorkPlace'}
                ]
            },
            {path: 'puzzlecards', component: './puzzlecards'},
        ]
    }],
    plugins: [
        ['umi-plugin-react', {
            antd: true,          // antd 插件会引入 antd组件库，并实现按需编译
            dva: true,
        }],
    ],
}