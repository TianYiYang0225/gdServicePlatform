import React from 'react';
import {Link} from 'react-router-dom';
import ProfilePhotoCompoents from './profilephotocompoents.js'
import PublishButtonCompoents from './publishbuttoncompoents.js'

class Top extends React.Component {
    render(){
        return(
            <div className="top">
                <PublishButtonCompoents />
                <ProfilePhotoCompoents />
            </div>

        );
    }
}
export default Top;