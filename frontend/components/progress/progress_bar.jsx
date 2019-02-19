import React from 'react';

import PropTypes from 'prop-types';
import { isAbsolute } from 'path';

export default class ProgressBar extends React.Component {
    
    render() {
        let sliderColor;
        let newWidth = (100 - (this.props.spots * 20)) + '%';
        (newWidth === "100%") ? sliderColor = "#8e0000" : sliderColor = "#eda20b";

        const styles = {
            width: `${newWidth}`,
            height: '100%',
            backgroundColor: `${sliderColor}`,
            borderRadius: "5px",
            textAlign: 'center'
            
        };
        
        return (
            <div className="progress" style={styles}></div>
        )
    }
}