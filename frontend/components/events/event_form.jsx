import React from 'react';
import {withRouter} from 'react-router-dom';
import moment from 'moment';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
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

  checkDate() {
    let proposedDate = moment(this.state.date)
    let validDate = moment().isBefore(proposedDate)

    if (!validDate) {
      let dateErrors = document.getElementById('event-errors')
      dateErrors.style.display = 'block';
      return false;
    } 

    return true;
  }

  handleSubmit(e) {
    e.preventDefault();
    let validDate = this.checkDate();

      if (validDate) {
        return this.props.action(this.state).then(() => this.props.history.push('/events'));
      }
   
  }

  render () {
    return (
      <div className="form-page-wrapper">
        <div className="event-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1 id="create-header">Host an event!</h1>
            <div id="event-errors">Events must be planned at least one day in advance!</div>
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