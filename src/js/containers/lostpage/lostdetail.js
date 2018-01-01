import React from 'react';
import {BrowserRouter, Route, hashHistory} from 'react-router-dom';
import Search from '../../components/search.js'
import FoundTable from '../../components/found/foundtable.js'
import GoodListData from '../Found Goods List.json'
import FooteBar from '../../components/footebar'

class FoundDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gooddate: GoodListData.results[1],
            summary_data: this.props.location.state.summary_data,
            goodsdata: this.props.location.state.goodsdata
        };
        console.log(this.state.summary_data)

    };
    timeChange(time){
        let date = time;
        date = date.split('.')
        date = date[0].split('T')
        return date[0]
    }

    render() {
        let create_time = this.timeChange(this.state.goodsdata.CREAT_TIME)

        if(this.state.goodsdata.time = null){
            var lost_time = "未确定"
        }else{
            var lost_time = this.timeChange(this.state.gooddate.time)
        }

        return (
            <div className="found_wrap">
            <div className="foudn_detail_wrap">
                <div>
                    <div className="found_detail_top">
                        <div className="found_title">{this.state.goodsdata.title}</div>
                        <div className="found_type">
                            <div className="creat_name"><p>{create_time}</p></div>
                            <p>类型：{this.state.summary_data.type}</p>
                            <p>拾取地区：{this.state.goodsdata.area}</p>
                            <p>拾取详细地点：{this.state.goodsdata.location}</p>
                            <p>拾取时间：{lost_time}</p>
                            <p>联系电话：{this.state.goodsdata.temp_phone_number}</p>
                            <p>其他联系方式：{this.state.goodsdata.temp_other_contact_information}</p>
                        </div>
                        <div className="description_style">详情描述</div>
                        <p className="found_description"> {this.state.goodsdata.description}</p>
                        <div className="found_picture">
                            <img className="list_img_style" src={this.state.gooddate.goods_name.picture}/>
                        </div>
                    </div>
                </div>
            </div>
                <FooteBar />
            </div>
        );
    }
}

export default FoundDetail;