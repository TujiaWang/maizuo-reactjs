/*
 * @Author: tujiawang 
 * @Date: 2017-05-02 18:00:48 
 * @Last Modified by:   tujiawang 
 * @Last Modified time: 2017-05-02 18:00:48 
 */
import React,{Component} from 'react';
import './comingitem.less';

export default class ComingItem extends Component{
    render(){
        return (
            <li className="coming-item">
                <img src={this.props.film && this.props.film.cover.origin} />
                <div>
                    <h2>{this.props.film.name}</h2>
                    <span>{this.props.film.premiereAt}</span>
                </div>
            </li>
        );
    }
}