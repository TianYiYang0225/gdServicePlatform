import React, {Component} from 'react';
import '../../../css/index.css'
import ReactDOM from 'react-dom';
import {history} from 'react-router-dom'
import PropTypes from "prop-types";
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


class LostPublish extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            summary_data: '',
            goods_id: '',
            confirmDirty: false,
            autoCompleteResult: [],
            lostpublish_data: '',
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        }
    };

    // nextstephandleClick(){
    //     this.context.router.history.push({
    //         pathname: '/lostdetailpublish',
    //         state: {
    //             goods_id:this.state.goods_id
    //         }
    //     });
    // }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
                if (!err) {
                    let formData = new FormData()
                    let file = {url: values.img, type: 'application/octet-stream', name: 'image.jpg'};
                    formData.append('files', file)
                    let data = {
                        "name": values.name,
                        "type": values.type,
                        "color": values.color,
                        "picture": null,
                        "detail": values.detail,
                    }
                    data = JSON.stringify(data)
                    console.log(values)


                    fetch('http://47.94.17.111/api/v1/goods_list/', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'Authorization': 'Token 6663eeec7aab61768572a77bbbd6a44c83070516',


                            },
                            body: data

                        }
                    ).then(res => res.text())
                        .then(function (res) {
                                let id = JSON.parse(res)._id
                                return id

                            }
                        ).then((id) =>
                        this.context.router.history.push({
                            pathname: '/lostdetailpublish',
                            state: {
                                goods_id: id
                            }
                        })
                    ).catch(function (e) {
                        console.log("Oops, error");
                        alert("网络错误")
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

    normFile = (e) => {

        if (Array.isArray(e)) {
            return e;
        }
        console.log(e.fileList)
        return e && e.fileList;
    }

    render() {
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
                <div className="detail_title">
                    <p>描述物品属性</p>
                </div>
                <div className="detail_title_down">
                    <p>智能匹配</p>
                </div>
                <Form onSubmit={this.handleSubmit.bind(this)} type="flex" className="from_style">
                    <FormItem
                        className="formitem_style"
                        label="物品名称"
                    >
                        {getFieldDecorator('name', titleConfig)(
                            <Input placeholder='物品名称'/>
                        )}
                    </FormItem>
                    <FormItem
                        className="formitem_style"
                        label="物品颜色"
                    >
                        {getFieldDecorator('color', titleConfig)(
                            <Input placeholder='物品颜色'/>
                        )}
                    </FormItem>

                    <FormItem
                        className="formitem_style"
                        label="分类"

                    >
                        {getFieldDecorator('type', {
                            rules: [{required: true, message: 'Please select your gender!'}],
                        })(
                            <div className="publish_styled_select">
                                <div className="styled-select">
                                    <select style={selectStyle}>
                                        <option value='全部'>物品种类</option>
                                        <option value='饭卡'>饭卡</option>
                                        <option value='钥匙'>钥匙</option>
                                        <option value='钱包'>钱包</option>
                                        <option value='手机'>手机</option>
                                        <option value='耳机'>耳机</option>
                                        <option value='文具'>文具</option>
                                        <option value='水杯'>水杯</option>
                                        <option value='数据线'>数据线</option>
                                        <option value='移动电源'>移动电源</option>
                                        <option value='其他'>其他</option>
                                    </select>
                                </div>
                            </div>
                        )}
                    </FormItem>
                    <FormItem

                        label="Password"

                    >
                        {getFieldDecorator('img', {
                            rules: [{
                                required: true, message: 'Please input your password!',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="file"/>
                        )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary"
                                htmlType="submit">下一步</Button>
                    </FormItem>

                </Form>
            </div>
        );
    }
}

const WrappedLostPublish = Form.create()(LostPublish);
export default WrappedLostPublish;