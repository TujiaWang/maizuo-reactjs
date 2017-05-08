/*
 * @Author: tujiawang 
 * @Date: 2017-05-02 17:54:56 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 10:38:25
 */
import React,{Component} from 'react';

import NavBar from '../components/common/NavBar';
import SideBar from '../components/common/SideBar';
import Home from './Home';
import Cinema from './cinema/Index';
import Film from './film/Index';
import Card from './card/Index';
import Login from './member/Login';
import Detail from './film/Detail';

import {Router,Route,hashHistory} from 'react-router';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            sidebarShow : false
        }
    }
    // 定义一个方法用于切换侧边栏显示的状态
    toggleSidebar(){
        this.setState({
            sidebarShow : !this.state.sidebarShow
        });
    }
    render(){
        return (
            <div>
                <NavBar toggleSidebar={this.toggleSidebar.bind(this)}/>
                <SideBar sidebarShow={this.state.sidebarShow} toggleSidebar={this.toggleSidebar.bind(this)} />
                <Router history={hashHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/film" component={Film} />
                    <Route path="/cinema" component={Cinema} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/card" component={Card} />
                    <Route path="/login" component={Login} />
                </Router>
            </div>
        );
    }
}