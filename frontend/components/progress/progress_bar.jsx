import React from 'react';

import PropTypes from 'prop-types';
import { isAbsolute } from 'path';

export default class ProgressBar extends React.Component {
    
    render() {
        let newWidth = (100 - (this.props.spots * 20)) + '%';
    let styles = {
        width: `${newWidth}`,
        height: '100%',
        backgroundColor: "#eda20b",
        borderRadius: "5px",
        textAlign: 'center'
        
    };
        
        return (
            <div className="progress" style={styles}></div>
        )
    }
}