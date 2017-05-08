/*
 * @Author: tujiawang 
 * @Date: 2017-05-03 15:20:08 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-03 15:54:10
 */
import React,{Component} from 'react';
import NowPlayingItem from './NowPlayingItem';
import './filmItem.less';

export default class NowPlayingList extends Component{
    render(){
        return (
            <ul>
                {this.props.nowplaying.map( (item,index) => <NowPlayingItem film={item} key={index} /> )}
            </ul>
        );
    }
}