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
                  Everyone at meal time is stepping a little out of their
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
                  much cooler than their tweets or Instagram pictures. Meal
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
              Let's Get A Meal
            </Link>
          </div>
        </div>

        <div className="greeting-wrapper">
          <div className="greeting-body">
            <div className="greeting-quotes">
              <div className="blockquotes-wrap">
                "I met people who I continue to be in touch with almost a year later, and people who I shared delightful conversations with that day but no more. Both are their own kind of fun."
                <span className="source">Freia, NYC</span>
              </div>
              <div className="blockquotes-wrap">
                "I’m not the type of person who talks to strangers. This doesn’t mean I don’t want to. Tea With Strangers just makes it easier because you know everyone there wants it too."
                <span className="source"> Molly, SF</span>
              </div>
            </div>

            <div className="greeting-row">
              <div className="greeting-img fourth" />
            </div>

            <h3 className="greeting-bottom-header">
              THERE'S NO SUCH THING AS A STRANGER.
            </h3>

            <div className="greeting-row">
              <div className="greeting-img fifth" />

              <div className="greeting-writing">
                <p>
                  You'd never think of yourself as a stranger. But everyone
                  else does. You know your story. Your embarrassments. Your
                  joy. Your idiocyncrasies — the thing that make you, you.
                  But they don't.
                </p>
                <p>
                  And everyone has these — whether or not we know what they
                  are. Everyone around you is a person, loaded with stories
                  that you can't even begin to fathom. They're different
                  from yours, but the fact that we all have them is what
                  brings us together.
                </p>
                <p>
                  In a stranger's story, we might discover parts of our own.
                  And in seeing where a stranger is coming from, we might
                  realize they're actually not so strange. But we don't
                  discover much just by thinking about it. So let's find
                  out.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="greeting-content-banner">
          <div className="banner-inner-box">
            <h1>Do we get to high five yet?</h1>
            <Link className="YES" to="/events">
              YES
            </Link>
          </div>
        </div>

        <footer className="home-footer">
          <div className="list">
            <div className="list-position">
              <a className="no-cursor" href="#">
                About
              </a>
              <Link to="/events">Meal Times</Link>
              <a className="no-cursor" href="#">Facebook</a>
                <a href="https://www.linkedin.com/in/sfrodrigues/">
                LinkedIn
              </a>
              <br />
              <a className="no-cursor" href="#">
                Terms of Service
              </a>
              <a className="no-cursor" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="aboutus">
            <p>
              Meals With Strangers is all about making our cities feel more
              like neighborhoods. We're more "connected" than ever before,
              but we're also more alone. And all we want to do is bring
              people together because, well, the world is better that way.
            </p>
            <p>
              We're not doing anything groundbreaking. We're creating
              something that would've been incredibly unnecessary 20 years
              ago. But while we get busier, it's easy to forget the value of
              a conversation for no reason. A conversation that's
              intentionally unintentional.

            </p>
          </div>
        </footer>
      </div>;
}


export default splashComponent;
