import React from 'react';
import {Switch, Route } from 'react-router-dom';

/*IMPORT COMPONENT AND CSS*/
import List from './course/List';
import Info from './course/Info';
import '../static/css/course.less';

export default function Home(){

        return <section className='courseBox'>
            <Switch>
                <Route path='/course' exact component={List}/>
                <Route path='/course/info' component={Info}/>
            </Switch>
        </section>;
}