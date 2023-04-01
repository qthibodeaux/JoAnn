import { Box, Heading, Image, Paragraph } from 'grommet'
import One from '../assets/3gk.jpg'
import Two from '../assets/gks.JPEG'

function Grandkids() {
  return (
    <Box id='grandkids'>
        <Box
            
            width='100%'
        ><Image fit='contain' fill='horizontal' src={One}/></Box>
        <Box
          gap='medium' 
          pad='medium' 
          margin='0.5rem'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem' }}
        >
            <Heading size='small' level='2'>A Letter from the Grandkids</Heading>
            <Heading size='small' level='3'>Dear Grandma,</Heading>
            <Paragraph>As we gather together to celebrate your retirement, we wanted to take a moment to express our love and gratitude for all that you have done for us over the years. You have been such an important part of our lives, and we will always cherish the memories we have shared with you.</Paragraph>
            <Paragraph>You have been an inspiration to us in so many ways. Your hard work, dedication, and perseverance have shown us that anything is possible with a little determination. You have taught us to never give up on our dreams and to always strive for excellence.</Paragraph>
            <Paragraph>Thank you for being the best grandmother anyone could ask for. We love you and wish you a happy and fulfilling retirement.</Paragraph>
            <Box
                height='small'
                width='100%'
            ><Image fit='contain' fill='horizontal' src={Two}/></Box>
            <Paragraph>With love and admiration,</Paragraph>
            <Paragraph>Jayla, Trinity, Tyler, James, & Jordyn</Paragraph>
        </Box>
    </Box>
  )
}

export default Grandkids

