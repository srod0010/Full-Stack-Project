import React from 'react';


class sessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: '',
            city: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }
    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    

    render() {
        if(this.props.formType ==='Login'){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Please {this.props.formType} or {this.props.navLink}
                    {this.renderErrors()}
                    <input type="text" placeholder="email" value={this.state.email} onChange={this.update("email")}/>
                    <input type="password" placeholder="password" value={this.state.password} onChange={this.update("password")}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )} else{
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Please {this.props.formType} or {this.props.navLink}
                        {this.renderErrors()}
                        <input type="text" placeholder="username" value={this.state.username} onChange={this.update("username")} />
                        <br/>
                        <input type="text" placeholder="email" value={this.state.email} onChange={this.update("email")} />
                        <br/>
                        <input type="text" placeholder="city" value={this.state.city} onChange={this.update("city")} />
                        <br/>
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.update("password")} />
                        <br/>
                        <input type="submit" value="submit" />
                    </form>
                </div>  
            )

        }

    }
}

export default sessionForm;