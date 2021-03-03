import axios from 'axios'

export function request(config) {
    //1 创建axios的实例
    const instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })
    // 2 axios的拦截器
    //2.1 请求拦截的作用
//     instance.interceptors.request.use(config=>{
//         console.log(config);
//         //1 config中的一些信息不符合服务器的要求 2 每次发送网络请求时，都希望在界面中显示一个请求图标 2 网络请求必须携带某些特殊信息
//         return config
//     },error => {
//         console.log(error);
//     });
// //   相应拦截
//     instance.interceptors.response.use(res=>{
//         console.log(res);
//     },error => {
//         console.log(error);
//     })
    return  instance(config)

}

