/*
 * @Author: tujiawang 
 * @Date: 2017-05-03 15:32:06 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 10:42:50
 */
import React,{Component} from 'react';
import {hashHistory} from 'react-router';

export default class NowPlayingItem extends Component{
    handleClick(id){
        hashHistory.push('detail/'+id);
    }
    render(){
        return (
            <li className="film-list-item" onClick={this.handleClick.bind(this,this.props.film.id)}>
                <img src={this.props.film && this.props.film.cover.origin} alt=""/>
                <div>
                    <h2>{this.props.film.name}</h2>
                    <p>{this.props.film.intro}</p>
                    <p>{this.props.film.cinemaCount}家影院正在上映{this.props.film.scheduleCount}</p>
                    <div className="score">
                        {this.props.film.grade} <i className="iconfont icon-arrow-right"></i>
                    </div>
                </div>
            </li>
        );
    }
}