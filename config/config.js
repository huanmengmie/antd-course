export default {
    //在 umi 中，约定的存放页面代码的文件夹是 pages，是复数，
    //可以添加 singular 为 true 来让 page 变为约定的文件夹
    singular: true,
    routes: [{
       path: '/',
       component: './HelloWorld'
    }],
    plugins: [
        ['umi-plugin-react', {

        }],
    ],
}