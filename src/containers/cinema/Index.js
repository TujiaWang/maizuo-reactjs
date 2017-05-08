/*
 * @Author: tujiawang 
 * @Date: 2017-05-08 10:59:59 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 15:38:49
 */
import React,{Component} from 'react';
import 'whatwg-fetch';
import CinemaList from './CinemaList';

export default class Cinema extends Component{
    constructor(props){
        super(props);
        this.state = {
            cinemas : [] // 用于保存影院信息
        };
    }
    componentDidMount() {
        let url = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/cinema?__t=1494212559354';
        fetch(url).then((response) => response.json()).then((json) => {
            // console.log(JSON.parse(json));
            this.setState({
                cinemas : JSON.parse(json).data.cinemas
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    dis(arr){
        return [...(new Set(arr))];
    }
    render(){
        return (
            <div className="cinema-list">
                正在开发
            </div>
        );
    }
} 