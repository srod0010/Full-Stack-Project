import React from 'react';

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
    return this.props.action(this.state);
  }

  render () {
      console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Event Title" value={this.state.name} onChange={this.update('name')} />
          <input type="text" placeholder="Description" value={this.state.description} onChange={this.update('description')} />
          <input type="text" placeholder="Location" value={this.state.location} onChange={this.update('location')} />
          <input type="text" placeholder="City" value={this.state.city} onChange={this.update('city')} />
          <input type="text" placeholder="Date" value={this.state.date} onChange={this.update('date')} />
          <input type="text" placeholder="Open" value={this.state.open} onChange={this.update('open')} />
          {/* <textarea type="text" value={this.state.body} onChange={this.update('body')} /> */}
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default EventForm;