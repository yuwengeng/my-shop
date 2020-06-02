
import axios from 'axios';
import Qs from 'qs';

axios.defaults.baseURL = '';
axios.defaults.withCredentials = true;//=>允许跨域(并且允许携带COOKIE)
axios.defaults.transformRequest = (data = {}) => Qs.stringify(data);//=>把POST/PUT请求主体统一处理为X-WWW-URL-ENCODED格式   //表单数据格式序列化
axios.interceptors.response.use(result => result.data);//=>响应拦截器:以后在THEN中获取的结果就是主体内容
export default axios;

// 设置 withCredentials = true 作用是跨域的情况接收服务器response的set-cookies，
// 当启用这个选项的时候，服务器不能设置 Access-Control-Allow-Origin 为 *，如果是nginx可以使用$http_origin，
// 否则写成你真实请求的origin地址

