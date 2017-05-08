/*
 * @Author: tujiawang 
 * @Date: 2017-05-02 18:00:33 
 * @Last Modified by:   tujiawang 
 * @Last Modified time: 2017-05-02 18:00:33 
 */
import React,{Component} from 'react';
import ComingItem from './ComingItem';

export default class ComingSoon extends Component{
    render(){
        return (
            <div className="coming-container">
                <div className="dividing-line"><h2>即将上映</h2></div>
                <ul>
                    {this.props.comingsoon.map( (item,index) =>
                        <ComingItem key={index} film={item}/>
                    )}
                </ul>
            </div>
        );
    }
}