/*
 * @Author: tujiawang 
 * @Date: 2017-05-08 14:32:45 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 15:04:50
 */
import React,{Component} from 'react';
import Area from './Area';
import CinemaItem from './CinemaItem';

export default class CinemaList extends Component{
    render(){
        return (
            <dl>
                <dt>{this.props.cinema.district.name}</dt>
                
            </dl>
        );
    }
}