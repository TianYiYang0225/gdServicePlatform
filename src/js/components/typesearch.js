import ReactDOM from 'react-dom';
import React, {Component} from 'react'
import '../../css/index.css'


class TypeSearch extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleTypeTextInputChange = this.handleTypeTextInputChange.bind(this)
    };

    handleTypeTextInputChange() {
        let sel = ReactDOM.findDOMNode(this.refs.selId);
        let selValue = sel.options[sel.selectedIndex].value;
        // valuethis.props.filtStaff(selValue);
        this.props.onTypeTextInput(selValue)
    }

    render() {
        var selectStyle = {
            height: '100%',
            width: '100%',
        };
        return (
            <div className="search_type">
                <div className="styled_select">
                    <select id='orderSelect' ref="selId" style={selectStyle} onChange={this.handleTypeTextInputChange}>
                        <option value='全部'>物品种类</option>
                        <option value='证件'>证件</option>
                        <option value='钱包'>钱包</option>
                        <option value='箱包'>箱包</option>
                        <option value='卡类'>卡类</option>
                        <option value='钥匙'>钥匙</option>
                        <option value='衣物'>衣物</option>
                        <option value='首饰'>首饰</option>
                        <option value='票据'>票据</option>
                        <option value='数码'>数码</option>
                        <option value='电脑'>电脑</option>
                        <option value='其他'>其他</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default TypeSearch;