/*
 * @Author: tujiawang 
 * @Date: 2017-05-08 16:21:47 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 16:35:31
 */
import React,{Component} from 'react';
import './card.less';

export default class Card extends Component{
    render(){
        return (
            <div className="material">
                <div className="cardquery">
                    <label htmlFor="">卡号：</label>
                    <input type="text" placeholder="请输入卡号" />
                    <div className="line"></div>
                </div>
                <div className="cardquery">
                    <label htmlFor="">密码：</label>
                    <input type="text" placeholder="请输入密码" />
                    <div className="line"></div>
                </div>
                <input type="button" className="card_query_bottom" value="查询"/>
            </div>
        );
    }
}