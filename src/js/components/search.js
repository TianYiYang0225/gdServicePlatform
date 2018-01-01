import React from 'react';
import '../../css/index.css'
import TypeSearch from './typesearch.js'
import AreaSearch from './areasearch.js'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);

    };

    render() {
        return(
            <div className="search_mid">
                <TypeSearch
                    typeText={this.props.typeText}
                    onTypeTextInput={this.props.handleTypeTextInput}
                />
                <AreaSearch
                    areaText={this.props.areaText}
                    onAreaTextInput={this.props.handleAreaTextInput}
                />
            </div>
        );
    }
}

export default Search;