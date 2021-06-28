import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import handsShake from '../images/handsShake.jpg'


class Executives extends Component {
    render() {
        return (
            <div id="executives" style={{ backgroundImage: `url(${handsShake})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}}>
               <Typography variant="h6" style={{ padding: '100px 100px', color: "#002171", textAlign: 'center', fontWeight: '700' }}>People are your organization’s most valuable asset!<br/>
               L-il Executive Search specializes in placing executives in leading positions in Israel<br/><br/>
               Have you acquired valuable business experience, and earned a degree from a top-tier institution?</Typography>
                <Typography style={{ padding: '0px 200px', color: 'lightBlue' }} ><strong>L-il offers C-level executives “one stop shop” in their job hunting:</strong><br /><br />
                    <ul style={{ listStyle: "inside" }}>
                        <li>We identify suitable positions.</li>
                        <li>We help connect you to leading consultants.</li>
                        <li>And most importantly, we provide personal care all along the way.</li>
                      </ul>
                </Typography>
                <Typography variant="h6" style={{ padding: '50px 100px', color: "lightBlue", textAlign: 'center', fontWeight: '700' }}>Check out the latest news, and opportunities from L-il Executive Search:<br/>
                <a target="_blank" style={{ color: 'blue'}} href='https://www.linkedin.com/company/l-il-executive-search'>https://www.linkedin.com/company/l-il-executive-search</a>
                </Typography>
            </div>
        );
    }
}

export default Executives;