import React from 'react';
import {Link} from 'react-router-dom';
import Top from '../../components/my/top.js'
import PublishList from '../../components/my/publishlist.js'
import {history} from 'react-router-dom'
import PropTypes from "prop-types";


class PublishType extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };
    constructor(props, context) {
        super(props, context);
    };
    publishtypeClick(e){
        if(e.currentTarget.getAttribute('data-key') == "found"){
            this.context.router.history.push({
                pathname: '/foundpublish',
            });
        }else{
            this.context.router.history.push({
                pathname: '/lostpublish',
            });
        }
    };
    render() {
        return (
            <div className="publish_type">
                <div className="found_publish" onClick={this.publishtypeClick.bind(this)} data-key="found">
                    寻物启事
                </div>
                <div className="found_publish" onClick={this.publishtypeClick.bind(this)} data-key="lost">
                    失物招领
                </div>
            </div>
        );
    }
}

export default PublishType;