/*
 * @Author: tujiawang 
 * @Date: 2017-05-02 17:59:36 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 10:56:03
 */
import React,{Component} from 'react';
import './nowitem.less';
import {hashHistory} from 'react-router';

export default class NowItem extends Component{
    handleClick(id){
        hashHistory.push('detail/'+id);
    }
    render(){
        return (
            <li className="now-item" onClick={this.handleClick.bind(this,this.props.film.id)}>
                <img src={this.props.film && this.props.film.cover.origin} />
                <div>
                    <h2>{this.props.film.name}</h2>
                    <p>{this.props.film.cinemaCount}家影院上映{this.props.film.scheduleCount}</p>
                    <span>{this.props.film.grade}</span>
                </div>
            </li>
        );
    }
}