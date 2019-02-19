import React from 'react';



export default class ProgressBar extends React.Component {
    
    render() {
        let newWidth = (100 - (this.props.spots * 20)) + '%';
        let sliderColor = (newWidth === "100%") ? "#8e0000" : "#eda20b";

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