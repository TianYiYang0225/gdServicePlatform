import React, {Component} from 'react'
import {Form, Input, Select, Button, AutoComplete} from 'antd';
import PropTypes from 'prop-types'

import 'antd/dist/antd.css'
// import 'cors'
// import {post} from '../fetch/post'

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };
    static contextTypes = {
        router: PropTypes.object
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('表单信息:', values);
                // let formData = new FormData();
                // formData.append('username', values.nickname);
                // formData.append('password1', values.password);
                // formData.append('password2',values.confirm);
                // formData.append('email', values.email);
                // console.log("formdata:",formData);
                let data = 'username=' + values.nickname +
                    '&password1=' + values.password +
                    '&password2=' + values.confirm +
                    '&email=' + values.email;
                // fetch('/rest-auth/registration/',
                //     {
                //         method: 'POST',
                //         headers: {
                //             'Accept': 'application/json',
                //             'Content-Type': 'application/x-www-form-urlencoded'
                //         },
                //         //body:JSON.stringify(values)
                //         body:data
                //     }
                // ).then(values => values.json())
                //     .then(json => {console.log(json)})
                // fetch('http://47.94.17.111/rest-auth/registration/', {
                //     method: 'POST',
                //
                //     headers: {
                //         'Content-Type': 'application/json',
                //         credentials: 'include',
                //     },
                //     body: JSON.stringify({
                //         username: values.nickname,
                //         password1: values.password,
                //         password2: values.confirm,
                //         email: values.email,
                //     }).then(function(response) {
                //         return response.json();
                //     })
                // })
                fetch('http://47.94.17.111/rest-auth/registration/',
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: values.nickname,
                            password1: values.password,
                            password2: values.confirm,
                            email: values.email,
                        })
                    }).then(res => res.json()).then(json => console.log(json));
                // if(this.json!==undefined){
                //     this.context.router.history.push({
                //         pathname:'/login',
                //     })
                // }
                // fetch('http://47.94.17.111/api/v1/account/',
                //     {
                //         method: 'GET',
                //     });
                // }).then((response) => response.json())
                //     .then((json) => {
                //         console.log("看看有啥："+JSON.stringify(json));
                //         // this.setState({ discounts: json.data })
                //     })  ;
                // var result = post('/rest-auth/registration/',{
                //     username:values.nickname,
                //     password:values.password,
                //     confirm:values.confirm,
                //     email:values.email
                // });
                // result.then(res => {
                //     return res.json()
                // }).then(json => {
                //     console.log(json)
                // })

            }
        });
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不相同');
        } else {
            callback();
        }
    };
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        console.log(reg.test(value));
        if (reg.test(value) === false) {
            callback('8-16位数字和字母组成');
        }
        callback();
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;

        // const formItemLayout = {
        //     labelCol: {
        //         xs: {span:5},
        //         sm: {span: 6},
        //     },
        //
        //     wrapperCol: {
        //         xs: {span: 16},
        //         sm: {span: 10},
        //     },
        // };
        // const tailFormItemLayout = {
        //     wrapperCol: {
        //         xs: {
        //             span: 24,
        //             offset:10,
        //         },
        //         sm: {
        //             span: 14,
        //             offset: 6,
        //         },
        //     },
        // };
        return (
            <Form onSubmit={this.handleSubmit} type="flex" className="Form-css">
                <FormItem
                    className="FormItem-css"
                    label="姓名"
                    hasFeedback
                >
                    {getFieldDecorator('nickname', {
                        rules: [{required: true, message: '请输入姓名', whitespace: true}],
                    })(
                        <Input placeholder="姓名"/>
                    )}
                </FormItem>
                <FormItem
                    className="FormItem-css"
                    label="邮箱"
                    hasFeedback
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '邮箱格式错误',
                        }, {
                            required: true, message: '请输入邮箱',
                        }],
                    })(
                        <Input placeholder="邮箱"/>
                    )}
                </FormItem>
                <FormItem
                    className="FormItem-css"
                    label="密码"
                    hasFeedback
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '请输入密码',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Input type="password" placeholder="密码"/>
                    )}
                </FormItem>
                <FormItem
                    className="FormItem-css"
                    label="确认"
                    hasFeedback
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: '请确认密码',
                        }, {
                            validator: this.checkPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} placeholder="再次输入"/>
                    )}
                </FormItem>

                <FormItem
                    className="FormItem-css"
                >
                    <Button type="primary" htmlType="submit">注册</Button>
                </FormItem>
            </Form>
        );
    }
}

const UserRegistrationForm = Form.create()(RegistrationForm);

export default UserRegistrationForm;