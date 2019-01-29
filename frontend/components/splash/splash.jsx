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

            <div className="greeting-row">
              <div className="greeting-img first" />

              <div className="greeting-writing weird">
                <h2>Its weird.</h2>
                <p>
                  Everyone at tea time is stepping a little out of their
                  comfort zone. This makes it so much easier to actually
                  learn something unexpected about the people around you.
                  Because open minds are a prerequisite around here.
                </p>
              </div>
            </div>

            <div className="greeting-row">
              <div className="greeting-writing">
                <h2>We won't meet otherwise.</h2>
                <p>
                  In all likelihood, our paths won’t cross for any reason.
                  So often, we only meet people through work, school, or
                  friends of friends. And even then, it’s questionable. So
                  basically, we manufacture serendipity
                </p>
              </div>

              <div className="greeting-img second" />
            </div>

            <div className="greeting-row">
              <div className="greeting-img third" />
              <div className="greeting-writing">
                <h2>Your hands are made for high fiving!</h2>
                <p>
                  And your eyes are made…for eye contact! Real humans are so
                  much cooler than their tweets or Instagram pictures. Tea
                  time has real humans! #nofilter!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="greeting-content-banner">
          <div className="banner-inner-box">
            <h1>Actually talk to people.</h1>
            <Link className="YES" to="/events">
              Let's Get Tea
            </Link>
          </div>
        </div>

        <div className="greeting-wrapper">
          <div className="greeting-body">

            <div className="greeting-quotes">
              <div className="blockquotes-wrap">
                "I met people who I continue to be in touch with almost a year 
                later, and people who I shared delightful conversations 
                with that day but no more. Both are their own kind of fun."
                 <span className="source">
                  Freia, NYC
                </span>
              </div>
              <div className="blockquotes-wrap">
                "I’m not the type of person who talks to strangers. This
                        doesn’t mean I don’t want to. Tea With Strangers just makes
                        it easier because you know everyone there wants it too."  
                <span className="source">  Molly, SF</span>
              </div>
            </div>

            <div className="greeting-row">
              <div className="greeting-img fourth" />
            </div>

            <h3 className="greeting-bottom-header">
              So why are thousands of people doing it?
            </h3>

            <div className="greeting-row">
              <div className="greeting-img fifth" />

              <div className="greeting-writing last">
                <h2>We won't meet otherwise.</h2>
                <p>
                  In all likelihood, our paths won’t cross for any reason.
                  So often, we only meet people through work, school, or
                  friends of friends. And even then, it’s questionable. So
                  basically, we manufacture serendipity
                </p>
                <p>
                  In all likelihood, our paths won’t cross for any reason.
                  So often, we only meet people through work, school, or
                  friends of friends. And even then, it’s questionable. So
                  basically, we manufacture serendipity
                </p>
                <p>
                  In all likelihood, our paths won’t cross for any reason.
                  So often, we only meet people through work, school, or
                  friends of friends. And even then, it’s questionable. So
                  basically, we manufacture serendipity
                </p>
              </div>
            </div>

            
           
            

          </div>
        </div>
      </div>;
}


export default splashComponent;
