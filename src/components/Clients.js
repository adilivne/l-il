import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card, Button, Typography } from '@material-ui/core'

export default function Clients(props) {
    var items = [
        {
            name: "Amir Toren, CEO at StarletDerma Ltd.",
            description: "I have known Rony and L-il Executive Search for several years and worked with her on several occasions. As CEO of a biotech company, I have worked with Rony and L-il on Executive Search. Rony did an excellent job: she identified the relevant companies and personnel who could fill the role, resulting in a successful new hire. Rony is very thorough, business minded and goal oriented, highly professional, pleasant, dedicated and well connected. She is also well trusted. I treasure her knowhow and personality"
        },
        {
            name: "Adva Markus, HR Director at Exalenz Bioscience Ltd.",
            description: "Rony and L-il Executive Search are true professionals with a deep knowledge of the market. Rony is extremely talented and knows executive search well. She has excellent interpersonal skills and quickly understood our needs. The CVs that she sent me were spot on – matching and even exceeding my expectations. I did not receive loads of CVs, rather handpicked relevant resumes only. I appreciated her quickness and responsiveness. Rony and L-il are a pleasure to work with. I will definitely will be happy to work with her in any occasion."
        },
        {
            name: "Orna Palgi, President and COO of Otic Pharma",
            description: "Otic Pharma expanded so I approached Susie and L-il Executive Search to help me with recruiting some people. The entire process was extremely efficient due to Susie's responsiveness, professionalism and motivation. I was describing to Susie in short the essence of the company and the capabilities I'm looking for. Few days later, Susie sent me 3 CVs which suit exactly! She understands precisely company's needs and candidate's strengths and weaknesses. Susie interviewed the candidates and provided me with a clear opinion. I was amazed by her ability to find exactly the right people per our wish list: all three people suggested by her were a fit so we can easily choose. This story repeated each time we were working together - she succeeded to find excellent people within days. The manpower of a company, especially for a small start-up company as Otic is, is the most important asset the company has. Thank you Susie and L-il for a great contribution to Otic Pharma!"
        },
        {
            name: 'Yael Glickman, VP Business Development at Micromedic Technologies Ltd (MCTC)',
            description: 'Rony and L-il Executive Search are a real pleasure to work with. In addition to being extremely dedicated and professional, with a deep understanding of the Israeli biotech industry, L-il Executive Search takes the time to comprehend all the relevant details and find the perfect match. This personal touch makes all the difference.'
        },
        {
            name: 'Tomer Nahum, CFO at Aspect Imaging',
            description: 'Rony and L-il Executive Search are true professionals and L-il is one of the few true professional HR placement agents in Israel, pleasant to work with and with deep knowledge of the biotech industry.'
        },
        {
            name: 'Yoel Ben-Artzi, Former Global Head of Customer Support at Given Imaging, Ltd.',
            description: "Susie and L-il Executive Search were \"my angels\". One day Susie knocked on my door without any previous correspondence and two weeks later, I had an offer.She was the perfect \"match-maker\" helping both parties to bring expectations to the right place and facilitating the agreement.  Great job Susie and thanks again!"
        },
        {
            name: 'Gil Ben-Menachem, Former  Head of Innovative Products, Business Development at Dexcel Pharma',
            description: 'L-il Executive Search is one of the few true professional HR placement agents in Israel, active in the field of Life Science and pharma in Israel. I had (and still have) the pleasure of working with L-il on several occasions, and throughout our acquaintance L-il Executive Search demonstrated professionalism, dexterity, knowledge, and dedication. L-il is very pleasant to work with and has vast knowledge of available openings in the industry, often on exclusive basis. Dearly recommended.'
        },
        {
            name: 'Naama Zamir, CPA, Former VP HR at Enzymotec',
            description: "When you are searching for an executive position you want to work with a recruitment firm that will understand your needs, help you sharpen the job description and eventually present you with a top tier candidates that will fit. I found  L-il Executive Search to be all the above and more- We worked together on several high end positions in Enzymotec and I found L-il to be very honest, professional, knowledgeable and sharp. I highly recommend L-il Executive Search\'s head hunting service"
        },
        {
            name: 'Limor Rubinstein, Former Human Resources Manager at Pointer Telocation',
            description: 'I had the pleasure to work with Rony and L-il Executive Search while Rony handled C-level positions for Pointer. Rony did an excellent job. Her broad business understanding as well as her searching and interviewing skills are truly remarkable. Combined with great social networking skills, Rony is able to create a state of the art matches between jobs/companies and candidates. I would highly recommend Rony and L-il to any company seeking high quality executives'
        }
    ]

    return (

        <div id="clients" style={{ backgroundColor: "#e8eaf6" }}>
            <Typography variant="h5" style={{ padding: '50px 50px', color: "#002171", textAlign: 'center', fontWeight: '700' }}>We believe in partnerships and relationships with our clients</Typography>
            <Carousel >
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

function Item(props) {
    return (
        <Card style={{
            backgroundColor: "#e8eaf6", border: '1px solid gray', borderRadius: "5%", backgroundColor: "#e8eaf6", margin: '20px 50px',
            boxShadow: '3px 3px 5px 6px #ccc'
        }}  >
            <Typography variant="h6" style={{ padding: '20px 20px', color: "#002171", fontWeight: '500' }}>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>
            </Typography>

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Card>
    )
}