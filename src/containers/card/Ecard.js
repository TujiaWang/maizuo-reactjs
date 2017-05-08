/*
 * @Author: tujiawang 
 * @Date: 2017-05-08 16:27:00 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 16:43:01
 */
import React,{Component} from 'react';
import './ecard.less';

export default class Ecard extends Component{
    render(){
        return (
            <div className="exchanege">
                <div className="cardquery">
                    <label htmlFor="">卡号：</label>
                    <input type="text" placeholder="请输入15位电子卖座卡号" />
                    <div className="line"></div>
                </div>
                <input type="button" className="card_query_bottom" value="查询"/>
            </div>
        );
    }
}