import ReactDOM from 'react-dom';
import React, {Component} from 'react'
import '../../css/index.css'

class AreaSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
    };

    handlerIdChange() {
        let sel = ReactDOM.findDOMNode(this.refs.selId);
        let selValue = sel.options[sel.selectedIndex].value;
        // valuethis.props.filtStaff(selValue);
        this.props.onAreaTextInput(selValue)
    }

    render() {
        var selectStyle = {
            height: '100%',
            width: '100%',
        };
        return (
            <div className="search_type">
                <div className="styled_select">
                    <select id='orderSelect' ref="selId" style={selectStyle} onChange={this.handlerIdChange.bind(this)}>
                        <option value='丢失地点'>丢失地点</option>
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
            </div>
        );
    }
}

export default AreaSearch;