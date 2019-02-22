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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-inputs" type="text" placeholder="username" value={this.state.username} onChange={this.update('username')} />
                    <input className="create-event-submit" type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default UpdateUserForm;