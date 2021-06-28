import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import news from '../images/news.jpg'


class Articles extends Component {
    render() {
        return (
            <div id="articles" style={{ backgroundImage: `url(${news})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                <Typography variant="h6" style={{ padding: '50px 100px', color: 'lightblue', fontWeight: '700' }}><u>From the Media</u></Typography>

                <Typography style={{ padding: '0px 100px', color: 'lightblue' }} >
                    <ul style={{ listStyle: "inside" }}>
                        <li><a target="_blank" style={{
                            color: 'blue', '&:hover': {
                                background: "#f00",
                            }
                        }} href="http://www.globes.co.il/news/article.aspx?did=1000817023">http://www.globes.co.il/news/article.aspx?did=1000817023   </a><span>  (In Hebrew)</span></li>
                        <li><a target="_blank" style={{ color: 'blue' }} href="http://reshet.tv/Shows/The_System/videomarklist,230748/"> http://reshet.tv/Shows/The_System/videomarklist,230748/ </a><span>  (In Hebrew, an interview with Rony Lan, from minute 25.04)</span></li>
                    </ul>
                </Typography>

                <Typography variant="h6" style={{ padding: '50px 100px', color: 'lightblue', fontWeight: '700' }}><u>Articles</u></Typography>

                <Typography style={{ padding: '0px 100px', color: 'lightblue' }} >
                    <ul style={{ listStyle: "inside" }}>
                        <li><a target="_blank" style={{ color: 'blue' }} href="https://www.linkedin.com/pulse/ceos-hr-managers-why-work-exclusively-one-headhunter-susie-marks">CEOs &amp; HR - Why work exclusively with one headhunter?</a><span>  - by Susie Marks</span></li>
                        <li><a target="_blank" style={{ color: 'blue' }} href="https://www.linkedin.com/pulse/job-seeker-oversell-susie-marks"> Job Seeker Oversell?</a><span>  - by Susie Marks</span></li>
                        <li><a target="_blank" style={{ color: 'blue' }} href="https://www.linkedin.com/pulse/ceos-hr-how-do-you-retain-your-competitive-edge-attract-susie-marks"> CEOs/HR - How Do You Retain Your Competitive Edge?</a><span>  - by Susie Marks</span></li>
                        <li><a target="_blank" style={{ color: 'blue' }} href="https://www.linkedin.com/pulse/culture-gaps-cultural-gaffs-doing-business-americans-susie-marks">  Culture Gaps or Cultural Gaffs?</a><span>  - by Susie Marks</span></li>
                        <li><a target="_blank" style={{ color: 'blue' }} href="https://www.linkedin.com/pulse/video-interview-how-do-i-prepare-susie-marks">How to Prepare for a Video Interview</a><span>  - by Susie Marks</span></li>
                        <li><a target="_blank" style={{ color: 'blue' }} href="https://www.linkedin.com/pulse/video-interview-how-do-i-prepare-susie-marks"> How to work with a Headhunter</a><span>  - by Susie Marks</span></li>
                    </ul>
                </Typography>

                <Typography variant="h4" style={{ padding: '100px 100px', color: "#002171", textAlign: 'center', fontWeight: '700' }}>Job Seeker - How to work with a Headhunter</Typography>
                <Typography style={{ padding: '0px 100px 100px 200px', color: '#091442' }} >Headhunters are blessed to be able to help people and make money doing it!  Definitely a win/win.  Our job is to source excellent candidates quickly for companies - we see both the companies and the candidates as our clients.
                We want to help you get an excellent position.  So here are a few “do’s” and “dont’s” to help you down the road</Typography>
                <Typography variant="h6" style={{ padding: '100px 100px', color: "#002171", textAlign: 'center', fontWeight: '700' }}>What to do?</Typography>
                <ul style={{ listStyle: "inside" }}>
                        <li>Please be responsive.  Sometimes responsiveness is the difference between getting a great position and not getting a great position.  How many times has someone responded to me 2 months later and expressed interest about the position only to be told that it is already filled?</li>
                        <li>Do monitor your LinkedIn inbox – chances are that someone (me!) is looking for you</li>
                        <li>Send me your CV in Word format.  When we send your CV to the client, we take out your details and add our logo.  So please don’t send a pdf or a googledocs link</li>
                        <li>Please keep in touch with me.  Don’t be afraid of being a nudge.  We both have a high stake in your success</li>
                        <li>If you want to prepare before the interview, let me know.  I will be happy to help.</li>
                        <Typography variant="h6" style={{ padding: '100px 100px', color: "#002171", textAlign: 'center', fontWeight: '700' }}>What not to do?</Typography>
                        <li>Please don’t disappear on me.  Clients are looking to fill their positions and want to see you as soon as possible, if I can’t find you, it can’t happen</li>
                        <li>Don’t tell me shades of the truth.  If you tell me that you have 15 years of experience managing remote teams and it turns out that you managed a team in Eilat, chances are I won’t be working with you again</li>
                        <li>Don’t show up late or not at all to the interview with the client.</li>
                        <li>Don’t come to the interview in non-representable clothing – there is only one chance to make a first impression</li>
                        <li>Don’t get too comfortable in an interview – either in body language or in words.  Even though you may feel a kinship with your interviewer, remember at all times that you are definitely being judged and observed.</li>
                        </ul>

            </div>
        );
    }
}

export default Articles;