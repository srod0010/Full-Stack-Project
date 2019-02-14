import React from 'react';


class sessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: '',
            city: '',
            image: '',
            profPic: 0
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
                <div className="signup-wrapper">
                    {this.renderErrors()}
                    <form onSubmit={this.handleSubmit} className="signup-form">
                        <div className="signup-fields">
                            <h2>Join us for a meal</h2>
                            <h4 className="signup-description">1000s of people around the world are discovering the joy of new meals and conversations with strangers</h4>
                            
                            <input type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")} />
                            
                            <input type="text" placeholder="Email Address" value={this.state.email} onChange={this.update("email")} />
                            
                            <input type="text" placeholder="City" value={this.state.city} onChange={this.update("city")} />
                            
                            <input type="password" placeholder="Password (at least 8 characters you won't forget!" value={this.state.password} onChange={this.update("password")} />

                            <br />
                            <p>Select a profile image:</p>

                            <div onChange={this.update("image")} value={this.state.image} className="options-profile-img">
                                <div onClick={() => this.setState({
                                    profPic: 0,
                                    image:
                                        "http://isd-soft.com/wp-content/uploads/2017/02/DCeCHa_logo.png"
                                })} className={"profile-image-div " + (this.state.profPic === 0 ? "selected-class" : "")}>
                                    <img src="http://isd-soft.com/wp-content/uploads/2017/02/DCeCHa_logo.png" />
                                </div>
                                <div onClick={() => this.setState({
                                    profPic: 1,
                                    image:
                                        "https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Chef_2-512.png"
                                })} className={"profile-image-div " + (this.state.profPic === 1 ? "selected-class" : "")}>
                                    <img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Chef_2-512.png" />
                                </div>
                                <div onClick={() => this.setState({
                                    profPic: 2,
                                    image:
                                        "https://cdn4.iconfinder.com/data/icons/professions-2-2/151/61-512.png"
                                })} className={"profile-image-div " + (this.state.profPic === 2 ? "selected-class" : "")}>
                                    <img src="https://cdn4.iconfinder.com/data/icons/professions-2-2/151/61-512.png" />
                                </div>
                                <div onClick={() => this.setState({
                                    profPic: 3,
                                    image:
                                        "https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Chef-2-512.png"
                                })} className={"profile-image-div " + (this.state.profPic === 3 ? "selected-class" : "")}>
                                    <img src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Chef-2-512.png" />
                                </div>
                                <div onClick={() => this.setState({
                                    profPic: 4,
                                    image:
                                        "https://cdn0.iconfinder.com/data/icons/food-icons-rounded/110/Cocktail-512.png"
                                })} className={"profile-image-div " + (this.state.profPic === 4 ? "selected-class" : "")}>
                                    <img src="https://cdn0.iconfinder.com/data/icons/food-icons-rounded/110/Cocktail-512.png" />
                                </div>
                            </div>

                            <br />
                            
                            
                            <input className="signup-submit"type="submit" value="Let's get dinner!" />
                            <input className="signup-submit demo" type="submit" onClick={() => this.props.demo(demoUser)} value="Demo Login" />
                            <h4> {this.props.navLink} </h4>

                            
                        </div>
                    </form>
                </div>  
            )

        }

    }
}

export default sessionForm;