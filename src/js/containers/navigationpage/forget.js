import React, {Component} from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd'
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';

class Forget extends React.Component{
    handleConfirmBlur(){}
    checkPassowrd(){}
    render(){
        return(
            <Form>
                <FormItem
                    label="新的密码"
                    hasfeedback
                >
                    {getFieldDecorator('newPassword1',{
                        rules:[{
                            type:'password',message:'请输入密码'
                        },{
                            validator:this.checkConfirm,
                        }],
                    })(
                        <Input type="password"/>
                    )}
                </FormItem>
                <FormItem
                    label="再次输入"
                    hasfeedback
                >
                    {getFieldDecorator('newPassword2',{
                        rules:[{
                            type:'password',message:'请确认密码'
                        },{
                            validator:this.checkPassowrd,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem
                    label="旧的密码"
                    hasfeedback
                >
                    {getFieldDecorator('oldPassword',{
                        rules:[{
                            type:'password',
                        }]
                    })}
                </FormItem>
            </Form>
        )
    }
}