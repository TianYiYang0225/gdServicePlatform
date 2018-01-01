import {BrowserRouter, Route, hashHistory, Switch} from 'react-router-dom';
import React from 'react';
import  App from './js/containers/navigationpage/App.js'
import UserLogin from './js/containers/navigationpage/login'
import UserRegistrationForm from './js/containers/navigationpage/userRegistrationForm'
import FooteBar from './js/components/footebar.js'
import FoundList from './js/containers/foundpage/foundlist.js'
import LostList from './js/containers/lostpage/lostlist.js'
import MyInterFace from './js/containers/personalpage/myinterface.js'
import FoundDetail from './js/containers/foundpage/founddetail.js'
import LostDetail from './js/containers/lostpage/lostdetail.js'
import PublishType from './js/containers/personalpage/publishtype.js'
import WrappedLostPublish from './js/containers/personalpage/lostpublish.js'
import WrappedFoundPublish from './js/containers/personalpage/foundpublish.js'
import WrappedLostdetailPublish from './js/containers/personalpage/lostdetailpublish.js'
import WrappedFounddetailPublish from './js/containers/personalpage/founddetailpublish.js'

class SiteRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="found_wrap">
                    <Route exact path='/' component={App}/>
                    <Route  path='/login' component={UserLogin}/>
                    <Route path='/registration' component={UserRegistrationForm}/>
                    <Route path="/found" component={FoundList}/>
                    <Route path="/founddetail" component={FoundDetail}/>
                    <Route path="/lost" component={LostList}/>
                    <Route path="/lostdetail" component={LostDetail}/>
                    <Route path="/my" component={MyInterFace}/>
                    <Route path="/publishtype" component={PublishType}/>
                    <Route path="/foundpublish" component={WrappedFoundPublish}/>
                    <Route path="/lostpublish" component={WrappedLostPublish}/>
                    <Route path="/founddetailpublish" component={WrappedFounddetailPublish}/>
                    <Route path="/lostdetailpublish" component={WrappedLostdetailPublish}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default SiteRouter;