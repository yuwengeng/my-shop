import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';

/*IMPORT COMPONENT*/
import Login from './person/Login';
import Register from './person/Register';
import Info from './person/Info';
import Tip from './person/Tip';

/*IMPORT API*/
import {checkLogin} from '../api/person';
import '../static/css/person.less';


function Person(props){
    const [isLogin,setisLogin] = useState(false)

    //=>验证是否登录
    useEffect(() => {
        const check= async () => {
            let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
            setisLogin(isLogin);
        };
        check();
    }, [])
    // async componentWillMount() {

    /* 验证登录的两种问题?
     * 我们之前聊过，当路由切换的时候，对应的组件会重新的渲染，但是渲染也要分情况
     *   1. 之前渲染其它组件的时候把当前组件彻底从页面中移除了，再次渲染当前组件，走的是第一次挂载的流程（也就是一切从头开始）
     *
     *   2. 如果当前组件之前没有彻底在页面中移除（本组件内的子组件在切换时）,每一次走的是更新的流程(子组件路由切换,父组件也要更新)，不是重新挂载的流程
     *  最终需要组件初始和更新时两次验证
     *
    useEffect(() => {
        const check = async () =>{
            let result = await checkLogin(),
            isLogin = parseFloat(result.code) === 0 ? true : false;
            setisLogin(isLogin);
        } 
        check();  
    }, [props])
    */

    return ( <section>
        <Switch>

            <Route path='/person/info' render={() => {
                //=>基于RENDER返回的不是受路由管控的组件 ,render函数做简单权限校验
                if (isLogin) {
                    return <Info/>;
                }
                return <Tip/>;
            }}/>
            <Route path='/person/login' component={Login}/>
            <Route path='/person/register' component={Register}/>
            <Redirect from='/person' to='/person/info'/>
        </Switch>
    </section>);

}

export default connect()(Person);