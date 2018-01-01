import React from 'react';
import {Link} from 'react-router-dom';


class PublishRow extends React.Component {
    render(){
        return(
            <div className="found_row">
                <div className="found_row_left">
                    <img className="list_img_style" src={this.props.gooddata.goods_name.picture} />
                </div>
                <div className="found_row_right">
                    <div className="list_title">{this.props.gooddata.goods_name.name}</div>
                    <div className="found_row_down">
                        <p>寻找中</p>
                        <p>2017-4-11</p>
                        <p>C区教室</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default PublishRow;