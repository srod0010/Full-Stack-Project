import React from 'react';
import {Link} from 'react-router-dom';

const splashComponent = () => {
    return(
        <div className="outer">
            
            <div className='pic'>
                <div className="layer">
                </div>
            </div>
            <div className="pic-text">
                <h1 className="outer-text">New Restaurant You've Been Itching To Try?</h1>
                <h2 className="inner-text">Grab a Meal With Strangers</h2>
                <div className="splash-signup">
                    <Link to="/signup">
                        Lets Eat!
                    </Link>

                </div>
            </div>

            <div className="banner">
                <div className="banner-block first">
                    <h1>Try a new restaurant</h1>
                    <h2>Explore the city's best.</h2>
                </div>

                <div className="banner-block">
                    <h1>Ditch the date</h1>
                    <h2>Meet interesting people.</h2>
                </div>
                <div className="banner-block">
                    <h1>Enjoy a night out</h1>
                    <h2>See what happens.</h2>
                </div>
            </div>
            
        </div>
    )
}


export default splashComponent;
