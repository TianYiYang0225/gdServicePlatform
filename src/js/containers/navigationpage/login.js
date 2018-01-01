import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd'
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import {withCookies} from 'react-cookie';
// import '../../node_modules/whatwg-fetch'
// import '../../node_modules/es6-promise'



const FormItem = Form.Item;

class userLogin extends React.Component {
    static contextTypes = {
        router: PropTypes.object,
    };
    // static propTypes = {
    //     cookies: Cookies.isRequired
    // };

    constructor(props, context) {
        super(props, context);
        this.state = {
            key: ''
        };
    }


    handleSubmit = (e) => {
        // const cookies =new Cookies();
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            console.log('登录信息：', values);
            //console.log(values.remember);
            if (!err){
                fetch('http://47.94.17.111/rest-auth/login/',
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: values.username,
                            password: values.password,
                            // email: values.email,
                        })
                    }
                ).then(function(response) {
                    console.log(response);
                    if(values.remember === true){
                        localStorage.setItem('name',values.username);
                        localStorage.setItem('password',values.password);
                        localStorage.getItem("name");
                        localStorage.getItem("password");
                        console.log('缓存了用户名和密码');
                    }else{
                            localStorage.removeItem('name');
                            localStorage.removeItem('password');
                            console.log('不缓存名字密码');
                    }
                    return response.json()
                }).then(function(json) {
                    console.log('parsed json', json);
                    if(values.remrember === true){
                        localStorage.setItem("key",json.key);
                        localStorage.getItem("key");
                    }
                    return json.key;
                }).then((key) => {
                    // console.log('所有e的消息:', e);
                    this.context.router.history.push({
                        pathname: '/',
                        state: {
                            nickName: values.username,
                            // key:key,
                        }
                    })
                }).catch(function(ex) {
                    alert('用户名/密码错误');
                })
            }
        });
    };
    // componentWillMount(){
    //     console.log('这是在测试:',localStorage.getItem("name"));
    //     console.log('测试密码:',localStorage.getItem('password'));
    //     //console.log(localStorage.getItem('remember'));
    // }
    forgotNotification() {
        this.context.router.history.push({
            pathname: '/forget',
        })

    };

    handleRegistration(e) {
        this.context.router.history.push({
            pathname: '/registration',
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const moveTime = 800;

        return (

            <Form onSubmit={this.handleSubmit} className="login-form">
                <QueueAnim delay={330} duration={moveTime} type="right">
                    <FormItem className="login-information" key="2">
                        {getFieldDecorator('username', {
                            initialValue:localStorage.getItem("name"),
                            rules: [{required: true, message: '请输入昵称'}]
                        })(
                            <Input className='xm' prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="昵称" />
                        )}
                    </FormItem>
                </QueueAnim>
                <QueueAnim delay={350} duration={moveTime} type="right">
                    <FormItem className="login-information" key="3">
                        {getFieldDecorator('password', {
                            initialValue:localStorage.getItem("password"),
                            rules: [{required: true, message: '请输入密码'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                   placeholder="密码"/>
                        )}
                    </FormItem>
                </QueueAnim>
                <QueueAnim delay={370} duration={moveTime} type="right">
                    <FormItem className="login-bottom" key="4">
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住我</Checkbox>
                        )}
                        <a className="login-form-forgot" onClick={this.forgotNotification}>忘记密码？</a>

                    </FormItem>
                </QueueAnim>
                <QueueAnim delay={390} duration={moveTime} type="right">
                    <FormItem className="login-bottom-btn" key="5">
                        <Button type="primary" htmlType="submit">登录</Button>
                    </FormItem>
                </QueueAnim>
                <QueueAnim delay={390} duration={moveTime} type="right">
                    <FormItem className="login-bottom-btn" key="6">
                        <Button className="zhuce" onClick={this.handleRegistration.bind(this)}>注册</Button>
                    </FormItem>
                </QueueAnim>
            </Form>

        )
    }
}

const UserLogin = Form.create()(userLogin);
export default UserLogin;