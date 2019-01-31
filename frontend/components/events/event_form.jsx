import React from 'react';
import {withRouter} from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.event);
    this.state = this.props.event || {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.event && !this.state) {
      let newEvent = Object.assign({},this.props.event);
      this.setState(newEvent);
    }
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.action(this.state).then(() => this.props.history.push('/events'));
  }

  render () {
      console.log(this.state)
    return (
      <div className="form-page-wrapper">
        <div className="event-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1 id="create-header">Host an event!</h1>
        
            <input className="form-inputs" type="text" placeholder="Event Title" value={this.state.name} onChange={this.update('name')} />
            <br/>
            <input className="form-inputs" type="text" placeholder="Description" value={this.state.description} onChange={this.update('description')} />
            <br/>
            <input className="form-inputs" type="text" placeholder="Address" value={this.state.location} onChange={this.update('location')} />
            <br/>
            <input className="form-inputs" type="datetime-local" placeholder="Date" value={this.state.date} onChange={this.update('date')} />
            <br/>
            <select className="create-dropdown" value={this.state.city} onChange={this.update('city')}>
              <option selected value="" disabled>City</option>
              <option value="San Francisco">San Francisco</option>
              <option value="New York">New York</option>
            </select>
            
            <br/>
            <input className="create-event-submit" type="submit" value="submit"/>
            
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(EventForm);