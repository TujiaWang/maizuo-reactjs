/*
 * @Author: tujiawang 
 * @Date: 2017-05-08 15:48:02 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 16:14:46
 */
import React,{Component} from 'react';
import './login.less';

export default class Login extends Component{
    render(){
        return (
            <form className="login-form">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="输入手机号/邮箱" />
                    <div className="input-bg"></div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="输入密码/验证码" />
                    <div className="input-bg"></div>
                </div>
                <input type="button" className="center-block" value="登录"/>
            </form>
        );
    }
}