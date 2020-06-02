import React,{useState} from 'react';
import {Menu} from 'antd';
import {Switch, Route} from 'react-router-dom';
import '../static/css/Mycourse.less';
import Unpay from './mycourse/Unpay';
import Pay from './mycourse/Pay';

function Mycourse(props){

     //=>根据当前的路由地址，验证初始选中的MENU到底是PAY还是UNPAY
    const [current,setcurrent] = useState(props.location.pathname === '/mycourse/pay' ? 'pay' : 'unpay');

    const handleClick = (ev) => {
        //=>ANTD的MENU组件,在点击的时候把事件对象重构了(用自己构建的值替换事件对象)
        setcurrent(ev.key)
        //=>点击调转到指定的路由地址
        props.history.push(ev.key === 'pay' ? '/mycourse/pay' : '/mycourse');
    }

    return (
    <section className='MycourseBox'>
        <Menu onClick={handleClick}
              selectedKeys={[current]}
              mode="horizontal">
            <Menu.Item key='unpay'>未支付</Menu.Item>
            <Menu.Item key='pay'>已支付</Menu.Item>
        </Menu>
        <Switch>
            <Route path='/mycourse' exact component={Unpay}/>
            <Route path='/mycourse/pay' component={Pay}/>
        </Switch>
    </section>);


}
export default Mycourse;