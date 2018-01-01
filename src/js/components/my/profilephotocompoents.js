import React from 'react';
import {Link} from 'react-router-dom';
import '../../../css/index.css'


class ProfilePhotoCompoent extends React.Component {
    render() {
        return (
            <div className="profile_photo_compoent">
                <div className="profile_photo"></div>
                <div className="student_number_compoent">
                    <div className="">150809130</div>
                    <div className="to_personal">></div>
                </div>


            </div>

        );
    }
}

export default ProfilePhotoCompoent;