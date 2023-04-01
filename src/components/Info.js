import { Box, Heading, Text } from 'grommet'

function Info() {
  return (
    <Box
      id='info'
      gap='medium' 
      pad={{ vertical: 'large', horizontal: 'medium'}}
      margin='0.5rem'
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: '1rem' }}
    >
        <Heading size='small'>Today's Commencement</Heading>
        <Text>Welcome</Text>
        <Text>Dinner</Text>
        <Text>Tribue to JoAnn</Text>
        <Text>Friends and Family Congratulations</Text>
        <Text>Dessert and Dancing</Text>
        <Text>Closing Remarks</Text>
    </Box>
  )
}

export default Info