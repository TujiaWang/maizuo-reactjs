/*
 * @Author: tujiawang 
 * @Date: 2017-05-03 15:20:24 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 10:29:58
 */
import React,{Component} from 'react';
import ComingSoonItem from './ComingSoonItem';

export default class ComingSoonList extends Component{
    render(){
        return (
            <ul>
                {this.props.comingsoon.map( (item,index) => <ComingSoonItem film={item} key={index} /> )}
            </ul>
        );
    }
}