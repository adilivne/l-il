import React, { Component } from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { Typography, ThemeProvider, Avatar, Card } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Rony from '../images/Rony.jpg';
import Susie from '../images/Susie.jpg';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


const styles = {
    header: {
        fontWeight: '700',
        color: '#0e1c5a',
        fontStyle: "oblique",
        margin: '100px',
        minWidth: '250px',
    },
    avatar: {
        minHeight: '200px',
        minWidth: '200px',
        border: '2px solid #091442'
    }
};

class About extends Component {
    render() {
        return (
            <div id="about" style={{ backgroundColor: "#e8eaf6" }}>
                <div style={{ display: 'flex' }}>
                    {/* <ThemeProvider theme={theme}> */}
                    <Typography variant="h3" style={styles.header}>About Us</Typography>
                    <Typography style={{ padding: '70px 100px 100px 0', fontWeight: '700', color: '#091442' }} >Quality employees are an essential resource to the success of a company.<br />
                        Finding the right person requires a professional and targeted search.<br /><br />

                        L-il Executive Search Ltd. specializes in placing international professionals in leading positions in Israel and throughout the world.<br /> Through our
                        partnerships with leading global executive search firms we provide the same quality and high response personalized retained executive search
                        services around the globe. We strive to provide personalized quality service, adapted to our clients' requirements.</Typography>
                    {/* </ThemeProvider> */}
                </div>

                <AvatarGroup style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Card style={{ flexDirection: 'column', maxWidth: '350px', backgroundColor: "#e8eaf6", border: 'none' }} variant="outlined" >
                        <Avatar alt="Rony" src={Rony} style={styles.avatar} /><br />
                        <LinkedInIcon color="primary" style={{ fontSize: 40 }} />
                        <h3>Rony Lan,    CEO & Owner, L-il</h3>
                    Rony combines 18 years of executive search and Human Resources management experience. Throughout the years she managed the recruitment of hundreds of C-level positions and she planned and directed a full complement of human resources programs for managers and employees located across the globe.
                    In 2008, Rony established L-il Executive Search Ltd., a boutique executive search group, specializing in placing top professionals in leading positions in Israel and abroad. The company rapidly became a leading executive search company in Israel.
                    Prior to opening L-il, Rony served as the head of HR in “Medis Technologies”, a group of High-tech and biotech companies.  Among her accomplishments, she established and managed the Human Resources function and department, growing the companies from small start-ups organization to a mature company, hiring hundreds of employees in all levels.
                    Having lived both in Israel and the US, Rony has established a wide network which provides exceptional search services for our clients with an emphasis on C-level positions.
                    Rony holds a B.A. in Sociology (cum laude) and an M.A. in Organizational Studies (cum laude), both from the Hebrew University in Jerusalem.<br />
                    </Card>
                    <Card style={{ flexDirection: 'column', maxWidth: '350px', backgroundColor: "#e8eaf6", border: 'none' }} variant="outlined">
                        <Avatar alt="Susie" src={Susie} style={styles.avatar} /><br />
                        <LinkedInIcon color="primary" style={{ fontSize: 40 }} />
                        <h3>Susie Marks, Executive Search</h3>
                    Susie has over 20 years of experience in headhunting and senior Human Resources positions in High Tech and the Services industries in the Israeli market. She is experienced with the corporate culture of international Fortune 500 companies and brings her passion for executive search and source top talent to her companies.
                    Born in the United States, Susie moved to Israel after finishing her studies. She started her executive search career in Sun Microsystems (today Oracle Corp.) and recruited dozens of key and executive positions over the 10 years that she was the Human Resources Manager.  After Sun Microsystems, she was headhunted to be the HR Director of IDT Global – an American company in the Tele-Services industry with a large 850 employee subsidiary in Jerusalem.  At IDT Global, Susie worked closely with senior executives both in Israel and in the United States.  After IDT, Susie had the opportunity to enter the Facility Management arena and worked for a number of years headhunting top talent in the property/facility sectors.
                    Susie’s vast HR experience affords her a 360 degree viewpoint allowing deep insights into the clients' needs.  As an American Israeli, she bridges the organizational cultures seamlessly.
                    Susie holds a B.A. in Psychology from the University of Wisconsin as well as a double M.A.(summa cum laude) from Towson University.<br />
                    </Card>
                </AvatarGroup>
                <Typography variant="h4" style={{ padding: '100px 100px', color: "#002171", textAlign: 'center', fontWeight: '700' }}>Mission & Values</Typography>
                <Typography style={{ padding: '0px 100px 100px 200px', color: '#091442' }} >
                Quality employees are an essential resource to the success of a company.
                Finding the right person requires a professional and targeted search.
                L-il Executive Search Ltd. specializes in placing international professionals in leading positions in Israel and throughout the world. Through our partnerships with  leading global executive search firms we provide the same quality and high response personalized retained executive search services around the globe. We strive to provide personalized quality service, adapted to our clients' requirements.<br/><br/>

                    <Typography variant="h6"><u>Expertise:</u></Typography>
<ul style={{ listStyle : "inside"}}>
                <li>Executive Search / Headhunting</li>
                <li>Talent management</li>
                <li>Organizational consulting</li>
                <li>C-level Recruitment Solutions</li>
                <li>Retained Search</li>
                <li>Business coaching</li>
                <li>Change management</li>
                <li>Leadership development</li>
                </ul><br/>
                Among our customers are leading global and Israeli companies and startups.<br/><br/>

                Our recruitment services include CEO, Executive Director and Board Director placements, pharmaceutical, healthcare, biomedical, agriculture, medical-device, sustainability, cleantech technology, technology, digital, financial services, real estate, professional services, private equity, venture capital, industrial manufacturing and distribution, energy, food services,  not-for-profit, and consumer and retail.</Typography>

            </div>
        );
    }
}

export default About;