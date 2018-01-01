import React, {Component} from 'react';
import '../../../css/index.css'
import ReactDOM from 'react-dom';
import {history} from 'react-router-dom'
import PropTypes from "prop-types";
import {BrowserRouter, Route, hashHistory} from 'react-router-dom';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Upload,
    Modal,
    Select,
    Mention,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class LostdetailPublish extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            goods_id: this.props.location.state.goods_id,
            confirmDirty: false,
            autoCompleteResult: [],
            lostpublish_data: '',
            //上传图片
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
        console.log(this.state.goods_id)

    };


    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.form.validateFields((err, values) => {
    //         if (!err) {
    //             console.log('Received values of form: ', values);
    //         }
    //     });
    // };
    // handleSelectChange = (value) => {
    //     console.log(value);
    //     this.props.form.setFieldsValue({
    //         note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    //     });
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        let url = "http://47.94.17.111/api/v1/goods_list/"
        let test_value = {
            _id: 14,
            name: "钱包",
            type: "钱包",
            color: "黑色",
            picture: null,
            detail: "里边有一张工行银行卡和500多块钱",
            CREAT_TIME: "2017-11-12T08:29:14.491000Z",
            UPDATE_TIME: "2017-11-12T08:29:14.491000Z",
            token: "6663eeec7aab61768572a77bbbd6a44c83070516"
        }
        let token = "6663eeec7aab61768572a77bbbd6a44c83070516"


        this.props.form.validateFields((err, values) => {
                console.log(values)
                if (!err) {
                    console.log(test_value._id)
                    let phone = parseInt(values.phone)
                    let g_id = parseInt(this.state.goods_id)
                    console.log(values.phone)
                    fetch('http://47.94.17.111/api/v1/found_goods/?page=1&page_size=1', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Token 6663eeec7aab61768572a77bbbd6a44c83070516',
                        },
                        body: JSON.stringify({
                            title: values.title,
                            goods_name: g_id,
                            area: values.area,
                            location: values.location,
                            time: null,
                            status: "寻找失主中",
                            description: values.description,
                            temp_phone_number: phone,
                            temp_other_contact_information: values.information,
                        })
                    }).then(res => res.text()
                    ).then((res) =>
                        this.context.router.history.push({
                            pathname: '/lost',
                        })
                    ).catch(function (e) {
                        console.log("Oops, error");
                        alert("网络错误，请重试")
                    });
                }

            }
        )
        ;

    }

//上传图片

    handleCancel = () => this.setState({previewVisible: false})
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({fileList}) => this.setState({fileList})

//详情输入框
    onChange(editorState) {
        console.log(toString(editorState));
    }

    render() {
        console.log(this.state.lostpublish_data)
        const titleConfig = {
            rules: [{
                required: true, message: '请输入标题内容！',
            }],
        }

        const {TextArea} = Input;
        const {toString} = Mention;
        const {getFieldDecorator} = this.props.form;
        const {autoCompleteResult} = this.state;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{width: 60}}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        var selectStyle = {
            height: '100%',
            width: '100%',
        };
        //上传图片
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="foudn_detail_wrap">
                <div className="detail_title">描述详情</div>
                <Form onSubmit={this.handleSubmit.bind(this)} type="flex" className="from_style">
                    <FormItem
                        className="formitem_style"
                        label="标题"
                        hasFeedback
                    >
                        {getFieldDecorator('title', titleConfig)(
                            <Input placeholder='标题'/>
                        )}
                    </FormItem>
                    <FormItem
                        className="formitem_style"
                        label="拾取地点"
                    >
                        {getFieldDecorator('area', {
                            rules: [{required: true, message: '请选择你的丢失地点!'}],
                        })(
                            <div className="publish_styled_select">
                                <select style={selectStyle}>
                                    <option>丢失地点</option>
                                    <option value='A区教室'>A区教室</option>
                                    <option value='B区教室'>B区教室</option>
                                    <option value='C区教室'>C区教室</option>
                                    <option value='D区教室'>D区教室</option>
                                    <option value='国际交流中心'>国际交流中心</option>
                                    <option value='学生公寓1号楼'>学生公寓1号楼</option>
                                    <option value='学生公寓2号楼'>学生公寓2号楼</option>
                                    <option value='学生公寓3号楼'>学生公寓3号楼</option>
                                    <option value='学生公寓4号楼'>学生公寓4号楼</option>
                                    <option value='校外学生公寓'>校外学生公寓</option>
                                    <option value='体育馆'>体育馆</option>
                                    <option value='艺术楼'>艺术楼</option>
                                    <option value='教务楼'>教务楼</option>
                                    <option value='办公楼'>办公楼</option>
                                    <option value='英语系小院'>英语系小院</option>
                                    <option value='信息系楼'>信息系楼</option>
                                    <option value='洗浴中心'>洗浴中心</option>
                                    <option value='水房'>水房</option>
                                    <option value='教室公寓'>教室公寓</option>
                                    <option value='其他'>其他</option>
                                </select>
                            </div>
                        )}
                    </FormItem>
                    <FormItem
                        className="formitem_style"
                        label="拾取详细地点"
                        hasFeedback
                    >
                        {getFieldDecorator('location', {

                        })(
                            <Input placeholder="例：CJ07"/>
                        )}
                    </FormItem>
                    <FormItem
                        className="formitem_style"
                        label="联系电话"
                    >
                        {getFieldDecorator('phone', {
                            rules: [{
                                required: true, message: '请输入联系电话！',
                            }],
                        })(
                            <Input type="number" placeholder="例：18888888888"/>
                        )}
                    </FormItem>
                    <FormItem
                        className="formitem_style"
                        label="其他联系方式"
                    >
                        {getFieldDecorator('information', {

                        })(
                            <Input placeholder="例：18888888888"/>
                        )}
                    </FormItem>

                    {/*后期添加*/}
                    {/*<FormItem*/}
                    {/*className="formitem_style"*/}
                    {/*label="丢失时间"*/}
                    {/*>*/}
                    {/*{getFieldDecorator('time', {*/}
                    {/*rules: [{*/}
                    {/*required: true, message: '请输入联系电话！',*/}
                    {/*}],*/}
                    {/*})(*/}
                    {/*<Input placeholder="例：星期三第二节课"/>*/}
                    {/*)}*/}
                    {/*</FormItem>*/}

                    <FormItem
                        className="formitem_style_img"
                        label="详情描述"
                        hasFeedback
                    >
                        {getFieldDecorator('description', {
                            rules: [{
                                required: true, message: '请进行详细描述！',
                            }],
                        })(
                            <TextArea
                                className="detail_text"
                                rows={6}/>
                        )}
                    </FormItem>


                    <FormItem>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </FormItem>

                </Form>
            </div>
        );
    }
}

const WrappedLostdetailPublish = Form.create()(LostdetailPublish);
export default WrappedLostdetailPublish;