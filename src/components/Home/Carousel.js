/*
 * @Author: tujiawang 
 * @Date: 2017-05-02 17:56:02 
 * @Last Modified by:   tujiawang 
 * @Last Modified time: 2017-05-02 17:56:02 
 */
import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import '../../containers/app.less';

export default class Carousel extends Component{
    render(){
        return (
            <ReactSwipe key={this.props.billboards} className="carousel" swipeOptions={{continuous:true,auto:3000}}>
                {this.props.billboards.map((item,index) => 
                    <div key={index}>
                        <img src={item.imageUrl} />
                    </div>
                )}
            </ReactSwipe>
        );
    }
}