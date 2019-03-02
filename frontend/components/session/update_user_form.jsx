import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateUserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser[0] || null;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents()
    }

    update(field) {
        console.log(this.state);
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        return this.props.updateCurrentUser(this.state).then(() => this.props.history.push('/events'))
    }

    render() {
        // debugger
        return(

            <div className="signup-wrapper">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className="signup-fields">
                        <h2>Update Your Profile!</h2>
                        <h4 className="signup-description">Let us know what's changed!</h4>

                        <input type="text" placeholder="Email Address" value={this.state.email} onChange={this.update("email")} />

                        <input type="text" placeholder="City" value={this.state.city} onChange={this.update("city")} />


                        <br />


                        <input className="signup-submit" type="submit" value="Update" />
                        <h4> {this.props.navLink} </h4>


                    </div>
                </form>
            </div>  
            
        )
    }
}

export default UpdateUserForm;