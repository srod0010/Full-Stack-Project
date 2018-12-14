import React from 'react';

const splashComponent = () => {
    return(
        <div className="outer">
            
            <div className='pic'>
                <div class="layer">
                </div>
            </div>
            <div class="pic-text">
                <h1 class="outer-text">New Restaurant You've Been Itching To Try?</h1>
                <h2 class="inner-text">Grab a Meal With Strangers</h2>
            </div>

            <div class="banner">
                <div class="banner-block first">
                    <h1>Try a new restaurant</h1>
                    <h2>Explore the city's best.</h2>
                </div>

                <div class="banner-block">
                    <h1>Ditch the date</h1>
                    <h2>Meet interesting people.</h2>
                </div>
                <div class="banner-block">
                    <h1>Enjoy a night out</h1>
                    <h2>See what happens.</h2>
                </div>
            </div>
            
        </div>
    )
}


export default splashComponent;
