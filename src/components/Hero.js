import { Box, Heading, Paragraph } from 'grommet'
import styled from 'styled-components';
import Ma from '../assets/ma.png'

const MomBox = styled(Box)`
    background: linear-gradient(var(--color-bg-variant), transparent);
    width: 80%;
    height: 30rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding: 5rem 1.5rem 1.5rem 1.5rem;
`;

function Hero() {
  return (
    <Box id='hero'>
        <Heading margin={{ top: 'small', bottom: 'none' }}>Joann Thibodeaux</Heading>
        <Heading size='small' margin={{ top: 'none', bottom: 'large' }}>Retirement Celebration</Heading>

        <Box 
            fill='horizontal'
            align='center'
            margin={{ top: 'none', bottom: 'large' }}
        >
            <MomBox>
                <img src={Ma} alt="pic of mom"  />
            </MomBox>
        </Box>

        <Box 
            gap='medium' 
            pad='medium' 
            margin={{ horizontal: '0.5rem' }}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem' }}
        >
            <Heading size='small' level='2'>Dear Friends and colleagues,</Heading>
            <Paragraph>Today, we gather to celebrate the retirement of one of the esteemed members of the Prairie View and Hempstead community. After years of dedicated service, it is time to bid farewell to our dear friend as she moves on to the next chapter of her life.</Paragraph>
            <Paragraph>Throughout her career, JoAnn has been a valuable member of the USPS but also the community. She has inspired us with her unwavering commitment to excellence, kindness, and her contributions have made a lasting impact on everyone she interacts with.</Paragraph>
            <Paragraph>We express our deepest gratitude for many years of service. We wish her all the best in her retirement and look forward to hearing about her new adventures in the years to come.</Paragraph>
            <Paragraph>Cheers to a job well done and a retirement well deserved!</Paragraph>
            <Paragraph>XOXOJoann's family!</Paragraph>
        </Box>
    </Box>
  )
}

export default Hero