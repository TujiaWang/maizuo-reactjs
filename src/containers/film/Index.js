/*
 * @Author: tujiawang 
 * @Date: 2017-05-03 15:03:42 
 * @Last Modified by: tujiawang
 * @Last Modified time: 2017-05-08 14:39:26
 */
import React,{Component} from 'react';
import NowPlayingList from '../../components/Film/NowPlayingList';
import ComingSoonList from '../../components/Film/ComingSoonList';
import './film.less';

export default class Film extends Component{
    constructor(props){
        super(props);
        this.state = {
            current : 'now', // 表示当前组件显示哪一个
            nowplaying : [], // 正在热映
            comingsoon : []  // 即将上映
        }
    }
    componentDidMount() {
        // 获取正在热映的电源
        let url1 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page=1&count=5';
        fetch(url1).then((response) => response.json()).then((json) => {
            console.log(JSON.parse(json));
            this.setState({
                nowplaying : JSON.parse(json).data.films
            });
        }).catch((err) => {
            console.log(err);
        });

        // 获取即将上映的电源
        let url2 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/coming-soon?__t=1489757848983&page=1&count=5';
        fetch(url2).then((response) => response.json()).then((json) => {
            // console.log(JSON.parse(json));
            this.setState({
                comingsoon : JSON.parse(json).data.films
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    render(){
        return (
            <div className="films">
                <div className="film-tab">
                    <span className={this.state.current == 'now' ? 'on' : ''} onClick={ () => this.setState({'current' : 'now'}) }>正在热映</span>
                    <span className={this.state.current == 'coming' ? 'on' : ''} onClick={ () => this.setState({'current' : 'coming'}) }>即将上映</span>
                </div>
                {this.state.current == 'now' ? <NowPlayingList nowplaying={this.state.nowplaying} /> : <ComingSoonList comingsoon={this.state.comingsoon} />}
            </div>
        );
    }
}