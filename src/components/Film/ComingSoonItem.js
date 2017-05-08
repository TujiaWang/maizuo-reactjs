/*
 * @Author: tujiawang 
 * @Date: 2017-05-03 15:39:06 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 10:31:08
 */
import React,{Component} from 'react';

export default class ComingSoonItem extends Component{
    render(){
        return (
            <li className="film-list-item">
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