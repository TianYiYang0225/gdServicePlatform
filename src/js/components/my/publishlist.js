import React from 'react';
import {Link} from 'react-router-dom';
import PublishRow from './publishrow.js'
import GoodListData from '../../containers/Found Goods List.json'


class PublishList extends React.Component {
    constructor(props) {
        super(props);
    };
    render(){
        var rows = [];
        GoodListData.results.forEach((gooddata) => {
            rows.push(<PublishRow gooddata={gooddata}/>);
            // rows.push(123)
        });
        return(
            <div className="found_table">
                <div >
                    {rows}
                </div>
            </div>

        );
    }
}
export default PublishList;