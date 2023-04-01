import { Box, Heading, Image, Paragraph } from 'grommet'
import One from '../assets/daughters.jpg'
import Two from '../assets/d2.jpg'


function Daughters() {
  return (
    <Box id='daughters'>
        <Box
            width='100%'
        ><Image fit='contain' fill='horizontal' src={One}/></Box>
        <Box
            gap='medium' 
            pad='medium' 
            margin='0.5rem'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem' }}
        >
            <Heading size='small' level='2'>Words from her daughter-in-laws</Heading>
            <Paragraph>As you retire, we thank you for welcoming us into your family with open arms. You pull everyone in like they are family. From your coworkers to everyone you helped at the post office. Your kindness and generosity have meant the world to us and everyone who has been blessed by your presence.</Paragraph>
            <Box
                
                width='100%'
            ><Image fit='contain' fill='horizontal' src={Two}/></Box>
            <Paragraph>A true inspiration. You have always put your family first, and your love and commitment have not gone unnoticed. We love you so much, and can't wait to see what you will accomplish in this next chapter of your life.</Paragraph>
        </Box>
    </Box>
  )
}

export default Daughters