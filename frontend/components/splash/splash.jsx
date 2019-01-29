import React from 'react';
import {Link} from 'react-router-dom';

const splashComponent = () => {
    return <div className="outer">
        <div className="pic">
          <div className="layer">
            <div className="pic-text">
              <h1 className="outer-text">
                New Restaurant You've Been Itching To Try?
              </h1>
              <h2 className="inner-text">Grab a Meal With Strangers</h2>
              <div className="splash-signup">
                <Link to="/signup">Lets Eat!</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="banner-content">
            <div className="banner-block first">
              <h1>Show up for dinner time</h1>
              <h2>You and a few others join a host at a cafe</h2>
            </div>

            <div className="banner-block">
              <h1>Have a real conversation</h1>
              <h2>You talk for two hours about anything</h2>
            </div>
            <div className="banner-block">
              <h1>See what could happen</h1>
              <h2>That's it. No strings attached</h2>
            </div>
          </div>
        </div>

        <div className="greeting-wrapper">
          <div className="greeting-body">
            <h3 className="greeting-bottom-header">
              So why are thousands of people doing it?
            </h3>

            <div className="greeting-first">
              <div className="greeting-first-img" />

              <div className="greeting-writing">
                <h2>Its weird.</h2>
                <p>
                  Everyone at tea time is stepping a little out of their
                  comfort zone. This makes it so much easier to actually
                  learn something unexpected about the people around you.
                  Because open minds are a prerequisite around here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>;
}


export default splashComponent;
