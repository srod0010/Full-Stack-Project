import React from 'react';
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component{
    constructor(props) {
        super();
        this.state = props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateField = this.updateField.bind(this);
    }

    updateField(field) {
        
        return e => this.setState({[field]: e.target.value})
    }

    

    handleSubmit(e) {
        
        let rating = parseInt(this.state.rating);
        let eventID = this.props.eventID;
        let stateCopy = Object.assign({}, this.state, {rating: rating}, {event_id: eventID});
        
        
        this.props.createReview(stateCopy);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="review-form">
                <textarea rows="10" cols="5" value={this.state.body} name="body" placeholder="Add rating and give your feedback!" onChange={this.updateField('body')} />
                <select name="rating" value={this.state.rating} onChange={this.updateField('rating')}>
                    <option value="1">1 Clap</option>
                    <option value="2">2 Claps</option>
                    <option value="3">3 Claps</option>
                    <option value="4">4 Claps</option>
                    <option value="5">5 Claps</option>
                </select>
                <input type="submit" value="submit" className="review-submit"/>
            </form>
            
            
            
        )
        
    }
    
}

export default ReviewForm;