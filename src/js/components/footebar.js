import React from 'react';
import '../../css/index.css'
import {history} from 'react-router-dom'
import PropTypes from "prop-types";


class FooteBar extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            checked_found: false,
            checked_lost: false,
            checked_my: false,
            url: window.location.href.split('/')

        }

    };

    found_handleClick() {
        this.context.router.history.push('/found')
    };
    lost_handleClick(){
        this.context.router.history.push('/lost')
    }
    my_handleClick(){
        this.context.router.history.push('/my')
    }

    componentWillMount(){
        let url_arr = window.location.href.split('/');
        let present_url = url_arr[url_arr.length-1];
        if (present_url == 'found') {
            if (this.state.checked_found != true) {
                this.setState({
                    checked_lost: this.state.checked_found,
                    checked_my: this.state.checked_found,
                    checked_found: !this.state.checked_found,
                })
            }



        } else if (present_url == 'lost') {
            if (this.state.checked_lost != true) {
                this.setState({
                    checked_found: this.state.checked_lost,
                    checked_my: this.state.checked_lost,
                    checked_lost: !this.state.checked_lost,
                })
            }

        } else if (present_url == 'my') {
            if (this.state.checked_my != true) {
                this.setState({
                    checked_found: this.state.checked_my,
                    checked_lost: this.state.checked_my,
                    checked_my: !this.state.checked_my
                })
            }

        }
    }



    componentWillReceiveProps(){
        let url_arr = window.location.href.split('/');
        let present_url = url_arr[url_arr.length-1];
        if (present_url == 'found') {
            if (this.state.checked_found != true) {
                this.setState({
                    checked_lost: this.state.checked_found,
                    checked_my: this.state.checked_found,
                    checked_found: !this.state.checked_found,
                })
            }



        } else if (present_url == 'lost') {
            if (this.state.checked_lost != true) {
                this.setState({
                    checked_found: this.state.checked_lost,
                    checked_my: this.state.checked_lost,
                    checked_lost: !this.state.checked_lost,
                })
            }

        } else if (present_url == 'my') {
            if (this.state.checked_my != true) {
                this.setState({
                    checked_found: this.state.checked_my,
                    checked_lost: this.state.checked_my,
                    checked_my: !this.state.checked_my
                })
            }

        }
        
    }



    render() {
        // var rowStyle_found = {
        //     backgroundColor: this.state.checked_found ? 'rgb(52, 148, 91)' : 'rgb(62, 203, 105)'
        // };
        // var rowStyle_lost = {
        //     backgroundColor: this.state.checked_lost ? 'rgb(52, 148, 91)' : 'rgb(62, 203, 105)'
        // };
        // var rowStyle_my = {
        //     backgroundColor: this.state.checked_my ? 'rgb(52, 148, 91)' : 'rgb(62, 203, 105)'
        // };
        var rowStyle_found = {
            color: this.state.checked_found ? 'rgb(52, 148, 91)' : 'rgb(187, 187, 187)'
        };
        var rowStyle_lost = {
            color: this.state.checked_lost ? 'rgb(52, 148, 91)' : 'rgb(187, 187, 187)'
        };
        var rowStyle_my = {
            color: this.state.checked_my ? 'rgb(52, 148, 91)' : 'rgb(187, 187, 187)'
        };

        return (
            <div className="footebar_wrap">
                <div className="footebar_wrap_list" id="found"
                     style={rowStyle_found}
                     onClick={this.found_handleClick.bind(this)}>
                    <i className="fa fa-archive fa-lg"  aria-hidden="true" />
                    寻物启事

                </div>
                <div className="footebar_wrap_list" id="lost"
                     style={rowStyle_lost}
                     onClick={this.lost_handleClick.bind(this)}>
                    <i className="fa fa-shopping-bag fa-lg"  aria-hidden="true" />
                    失物招领
                </div>
                <div className="footebar_wrap_list_thr" id="my"
                     style={rowStyle_my}
                     onClick={this.my_handleClick.bind(this)}>
                    <i className="fa fa-user fa-lg"  aria-hidden="true" />
                    我的
                </div>
            </div>
        );
    }
};

export default FooteBar;