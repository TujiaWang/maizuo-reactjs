/*
 * @Author: tujiawang 
 * @Date: 2017-05-02 17:54:31 
 * @Last Modified by:   tujiawang 
 * @Last Modified time: 2017-05-02 17:54:31 
 */
import React,{Component} from 'react';
import Carousel from '../components/Home/Carousel';
import NowPlaying from '../components/Home/NowPlaying';
import ComingSoon from '../components/Home/ComingSoon';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            billboards : [], // 轮播的内容
            nowplaying : [], // 正在热映
            comingsoon : [] // 即将上映
        }
    }
    componentDidMount() {
        let url1 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/billboard/home?__t=1489757848973';
        fetch(url1).then((response) => response.json()).then((json) => {
            // console.log(JSON.parse(json));
            this.setState({
                billboards : JSON.parse(json).data.billboards
            });
        }).catch((err) => {
            console.log(err);
        });

        let url2 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/now-playing?__t=1489757848979&page=1&count=5';
        fetch(url2).then((response) => response.json()).then((json) => {
            // console.log(JSON.parse(json));
            this.setState({
                nowplaying : JSON.parse(json).data.films
            });
        }).catch((err) => {
            console.log(err);
        });

        let url3 = 'http://localhost:3000/proxy?url=http://m.maizuo.com/v4/api/film/coming-soon?__t=1489757848983&page=1&count=3';
        fetch(url3).then((response) => response.json()).then((json) => {
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
            <div>
                <Carousel billboards={this.state.billboards} />
                <NowPlaying nowplaying={this.state.nowplaying} />
                <ComingSoon comingsoon={this.state.comingsoon} />
            </div>
        );
    }
}