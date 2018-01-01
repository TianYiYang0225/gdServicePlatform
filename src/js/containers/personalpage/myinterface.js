import React from 'react';
import {Link} from 'react-router-dom';
import Top from '../../components/my/top.js'
import PublishList from '../../components/my/publishlist.js'
import FooteBar from '../../components/footebar'


class MyInterFace extends React.Component {
    render() {
        return (
            <div className="found_wrap">
                <div className="found_list">
                    <Top/>
                    <PublishList/>
                </div>
                <FooteBar/>
            </div>
        );
    }
}

export default MyInterFace;