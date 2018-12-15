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

    componentDidMount() {
        this.props.clearErrors();
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
        let demoUser = {email: "pass", password: "password"};

        if(this.props.formType ==='Login'){
        return(
            <div className="page-wrapper">
                <div className="login-wrapper">
                    <form onSubmit={this.handleSubmit} className="form-wrapper">
                        <h2>Hey stranger!</h2>
                        <p>Its good to have you back. Please sign in below</p>
                        
                        {this.renderErrors()}
                        <input type="text" placeholder="Email Address" value={this.state.email} onChange={this.update("email")}/>
                        <br/>
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.update("password")}/>
                        <br/>
                        <input className="submit-button" type="submit" value="sign in"/>
                        <input className="demo-submit-button" type="submit" onClick={() => this.props.processForm(demoUser)} value="Demo login"/>
                        <br/>
                        
                        {this.props.navLink}
                        
                    </form>
                </div>
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
                        <input className="submit-button" type="submit" onClick={() => this.props.demo(demoUser)} value="demo" />
                    </form>
                </div>  
            )

        }

    }
}

export default sessionForm;