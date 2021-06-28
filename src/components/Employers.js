import React, { Component } from 'react';
import { Typography } from '@material-ui/core';


class Employers extends Component {
    render() {
        return (
            <div id="imployers">
                <Typography variant="h4" style={{ padding: '100px 100px', color: "#002171", textAlign: 'center', fontWeight: '700' }}>People are your organization’s most valuable asset<br />
                Top talent makes the difference!</Typography>
                <Typography style={{ padding: '0px 100px 100px 200px', color: '#091442' }} >The international business market is abundant with talented people filling top positions in R&D, Engineering, Marketing and Finance .working for other companies<br /><br />
                These people could be working for you!<br /><br />
                Professionals who earned degrees from prestigious universities, or acquired valuable international business experience, will enhance your organization with their talent, international
                experience and door-opening resumes.<br />
                We, at L-il Executive Search specialize in head hunting and placing international professionals in leading positions in Israel and abroad, investing great effort in locating excellent
                managers and key employees and in matching the right person to the required job.<br /><br />
                    <ul style={{ listStyle: "inside" }}>
                        <li>We provide global placement and head hunting services for companies seeking C level talents</li>
                        <li>We enhance the organization’s managerial and technological capabilities</li>
                        <li>We headhunt for specific expertise/positions all around the world</li>
                        <li>We find the right person according to your needs</li>
                        <li>We search for top talent from the best organizations and academic institutions all over the world</li>
                        <li>We strive to provide personalized quality service, adapted to your requirements</li></ul>
                </Typography>
            </div>
        );
    }
}

export default Employers;