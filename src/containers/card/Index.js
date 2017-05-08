/*
 * @Author: tujiawang 
 * @Date: 2017-05-08 16:15:49 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 16:33:50
 */
import React,{Component} from 'react';
import Card from './Card';
import Ecard from './Ecard';
import './cards.less';

export default class Cards extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : 'scard'
        }
    }
    render(){
        return (
            <div className="card">
                <div className="card-tab">
                    <span className={this.state.current == 'scard' ? 'on' : ''} onClick={ () => this.setState({'current' : 'scard'}) }>卖座卡</span>
                    <span className={this.state.current == 'escard' ? 'on' : ''} onClick={ () => this.setState({'current' : 'escard'}) }>电子卖座卡</span>
                </div>
                {this.state.current == 'scard' ? <Card /> : <Ecard />}
            </div>
        );
    }
}