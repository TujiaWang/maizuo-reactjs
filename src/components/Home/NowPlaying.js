/*
 * @Author: tujiawang 
 * @Date: 2017-05-02 17:56:08 
 * @Last Modified by:   tujiawang 
 * @Last Modified time: 2017-05-02 17:56:08 
 */
import React,{Component} from 'react';
import NowItem from './NowItem';

export default class NowPlaying extends Component{
    render(){
        // console.log(this.props.nowplaying);
        return (
            <ul>
                {this.props.nowplaying.map( (item,index) =>
                    <NowItem key={index} film={item}/>
                )}
            </ul>
        );
    }
}