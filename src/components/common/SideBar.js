/*
 * @Author: tujiawang 
 * @Date: 2017-05-02 17:54:09 
 * @Last Modified by:   tujiawang 
 * @Last Modified time: 2017-05-02 17:54:09 
 */
import React,{Component} from 'react';
import './sidebar.less';
import {hashHistory} from 'react-router';

export default class SideBar extends Component{
    // 用于跳转
    direct(path){
        hashHistory.push(path);
        this.props.toggleSidebar();
    }
    render(){
        return (
            <div className="sidebar-container" style={this.props.sidebarShow ? {display:'block'} : {display:'none'}}>
                <div className="sidebar">
                    <ul>
                        <li onClick={this.direct.bind(this,'/')}>
                            <span>首页</span>
                            <i className="iconfont icon-arrow-right"></i>
                        </li>
                        <li onClick={this.direct.bind(this,'/film')}>
                            <span>影片</span>
                            <i className="iconfont icon-arrow-right"></i>
                        </li>
                        <li onClick={this.direct.bind(this,'/cinema')}>
                            <span>影院</span>
                            <i className="iconfont icon-arrow-right"></i>
                        </li>
                        <li onClick={this.direct.bind(this,'/login')}>
                            <span>我的</span>
                            <i className="iconfont icon-arrow-right"></i>
                        </li>
                        <li onClick={this.direct.bind(this,'/card')}>
                            <span>卖座卡</span>
                            <i className="iconfont icon-arrow-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}