import { Box, Heading, Image, Paragraph } from 'grommet'
import Son from '../assets/sons3.JPEG'
import Two from '../assets/4.jpg'

function Sons() {
  return (
    <Box id='sons'>
        <Box
            
            width='100%'
        ><Image fit='contain' fill='horizontal' src={Son}/></Box>

        <Box
            gap='medium' 
            pad='medium' 
            margin='0.5rem'
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem' }}
        >
            <Heading size='small' level='2'>Words from her sons</Heading>
            <Paragraph>Thank you for being an amazing role model and showing us the importance of hard work, dedication, and perseverance. We are so grateful for all you have taught us.</Paragraph>
            <Box
                
                width='100%'
            ><Image fit='contain' fill='horizontal' src={Two}/></Box>
            <Paragraph>You have had an amazing career, and we know you put your heart and soul into everything you did. As a mother and a person, your work and kindness to others has been an amazing example on how everyone should treat one another.</Paragraph>
        </Box>
    </Box>
  )
}

export default Sons