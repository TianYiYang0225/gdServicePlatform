import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import Header from "../../components/header/header";
import { CookiesProvider } from 'react-cookie'

class App extends Component {
    constructor(props){
        super(props);
        try{
            console.log('缓存key:',localStorage.getItem('key'));
            if(localStorage.getItem('key') !==null){
                this.state={
                    userName:this.props.location.state.nickName,
                    key:localStorage.getItem('key'),
                    login:true,
                };
            }else{
                this.state={
                    userName:undefined,
                    loginStatus:undefined,
                    login:false,
                    key:null
                };
            }
        }catch(err){
            this.state={
                userName:undefined,
                loginStatus:undefined,
                login:false,
                key:null
            };
        }
        //console.log(this.state.key)


    }

    clickHandleForum(){
        if(this.state.login === true){
            function jump(){
                window.open('http://gengdan.cc/dajiangtang')
            }
            jump();
        }else{
            this.props.history.push('/login')
        }

    }
    clickHandleClaim(){
        if(localStorage.getItem('key') !== null){
            this.props.history.push('/found')
        }else{
            this.props.history.push('/login')
        }

    }
    clickHandleMap(){
        if( localStorage.getItem('key') !== null){
            function jump(){
                window.open('http://gdmap.applinzi.com')
            }
            jump();
        }else{
            this.props.history.push('/login')
        }

    }
    clickState() {
        if (this.state.login === true)
            return this.state.userName;
        else {
            return '未登录';
        }
    }
    clickLoginAndOut() {
        if (this.state.userName === undefined)
            this.props.history.push('/login');
        else {
        }
    }
    handleClickOut() {
        if (this.state.login === false) {
            alert('未登录');
        } else {
            fetch('http://47.94.17.111/rest-auth/logout/', {    //发送退出登录的请求
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    if (res.ok) {
                        console.log(res);
                        this.setState({login: false});
                        localStorage.removeItem('key');
                        console.log('缓存key是：', localStorage.getItem('key'));
                    } else {
                        alert("logout failed");
                    }
                })
                .catch(function (error) {
                    console.log('logout failed', error)
                })
        }
    }
  render() {
        var iconStyle = {
          fontSize:25,
            color:'red'
        };
        var iconStyleWifi = {
            fontSize:21
        };


    return (
        <CookiesProvider>
        <div className="App-all">
            <QueueAnim delay={300} duration={600} type="top">
                <div key="1"  className="App-Header">
                    <div  className="App-Header-Left" >
                        <i className="fa fa-sign-out fa-lg" aria-hidden="true" onClick={this.handleClickOut.bind(this)}/>
                    </div>
                    <div className="App-Header-Right" onClick={this.clickLoginAndOut.bind(this)}>
                        <i className="fa fa-user-o fa-lg" aria-hidden="true"/>
                        <Header title={this.clickState()} />
                    </div>

                </div>

            </QueueAnim>
            <div className="App-main">
                <QueueAnim delay={300} duration={600} type="left">
                    <div key="2"  className="App-Forum" >
                        <button className="appForumButton" onClick={this.clickHandleForum.bind(this)}>
                            <i style={iconStyle} className="fa fa-times lg" aria-hidden="true" />
                            <i style={iconStyleWifi} className="fa fa-rss lg" aria-hidden="true"/>
                                <p>耿丹讲堂</p>
                        </button>
                    </div>
                </QueueAnim>
                <QueueAnim delay={300} duration={600} type="right">
                    <div key="3" className="App-Claim" >
                            <button className="appForumButton" onClick={this.clickHandleClaim.bind(this)}>
                                <i className="fa fa-suitcase fa-2x" aria-hidden="true"/>
                                <p>失物招领</p>
                            </button>
                    </div>
                </QueueAnim>
                <QueueAnim delay={300} duration={600} type="left">
                    <div key="4" className="App-Map" >
                        <button className="appForumButton" onClick={this.clickHandleMap.bind(this)}>
                            <i className="fa fa-map-marker fa-2x" aria-hidden="true"/>
                            <p>校园地图</p>
                        </button>
                    </div>
                </QueueAnim>
            </div>
        </div>
        </CookiesProvider>
    );
  }
}

export default App;
