import React from 'react';
import {Link} from 'react-router-dom';
import '../../../css/index.css'
import {history} from 'react-router-dom'
import PropTypes from "prop-types";

class PublishButtonCompoent extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };
    constructor(props, context) {
        super(props, context);
    };
    publishClick(e){
        this.context.router.history.push({
            pathname: '/publishtype',
        });
    };
    render() {
        return (
            <div className="publish_compoent">
                <div className="publish_number">
                    <p className="number">
                        123
                    </p>
                    <p className="publish">已发布</p>
                </div>
                <div className="publish_button" onClick={this.publishClick.bind(this)}>
                    +
                </div>
            </div>
        );
    }
}

export default PublishButtonCompoent;