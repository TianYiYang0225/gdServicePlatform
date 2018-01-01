import React from 'react';
import ReactDOM from 'react-dom';
import '../../../css/index.css'
import {history} from 'react-router-dom'
import PropTypes from "prop-types";


class FoundRow extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            summary_data: ''
        }
    };

    foundrowClick(e) {
        this.context.router.history.push({
            pathname: '/founddetail',
            state: {
                summary_data: this.state.summary_data,
                goodsdata: this.props.goodsdata
            }
        });
    }

    componentDidMount() {
        var url = "http://47.94.17.111/api/v1/goods_list/" + this.props.goodsdata.goods_name + ".json"
        console.log(url)
        if ("fetch" in window) {
            fetch(url).then(function (response) {
                return response.json();
            }).then(function (jsonData) {
                return jsonData;
            }).then((e) => {
                this.setState({
                    summary_data: e
                })
            }).catch(function () {
                console.log('出错了');
            });
        } else {
            // 不支持
            console.log(321)
        }
    }

    render() {
        console.log(this.state.summary_data)
        let time = this.props.goodsdata.CREAT_TIME
        time = time.split('.')
        time = time[0].split('T')
        let data = time[0]
        if (this.state.summary_data.picture == null) {
            var list_picture = 'http://s.gengdan.cc/images/bg.jpg'
        } else {
            var list_picture = this.state.summary_data.picture
        }


        return (
            <div className="found_row"
                 onClick={this.foundrowClick.bind(this)}
                 data-id={this.props.goodsdata}
                 data-key={this.state.summary_data}>
                <div className="found_row_left">
                    <img className="list_img_style"
                         src={list_picture}/>
                </div>
                <div className="found_row_right">
                    <div className="list_title">{this.state.summary_data.name}</div>
                    <div className="found_row_down">
                        <p>{this.props.goodsdata.status}</p>
                        <p>{data}</p>
                        <p>{this.props.goodsdata.area}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FoundRow;