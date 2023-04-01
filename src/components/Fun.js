import { useState } from 'react';
import { Box, Text } from 'grommet'
import { LinkPrevious } from 'grommet-icons';

const top = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const mid = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bot = ["Z", "X", "C", "V", "B", "N", "M"];

function Fun() {

  return (
    <Box>
        <Box>
            What is JoAnns favorite football team?
        </Box>
        <Box>
            
        </Box>
        <Box 
            direction='row'
            alignContent='center'
            justify='center'
            pad={{ top: 'medium' }}
            gap='small'
            fill='horizontal'
        >
            {top.map((val, index) => {
                return <Key keyVal={val} key={index}/>
            })}
        </Box>
        <Box 
            direction='row'
            alignContent='center'
            justify='center'
            pad={{ vertical: 'small'}}
            gap='small'
            fill='horizontal'
        >
            {mid.map((val, index) => {
                return <Key keyVal={val} key={index}/>
            })}
        </Box>
        <Box 
            direction='row'
            alignContent='center'
            justify='center'
            pad={{ bottom: 'medium'}}
            gap='small'
            fill='horizontal'
        >
            <Key keyVal='Enter'/>
            {bot.map((val, index) => {
                return <Key keyVal={val} key={index}/>
            })}
            <Key keyVal={<LinkPrevious color='white' size='small'/>} />
        </Box>
    </Box>
  )
}

function Key ({ keyVal }) {
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(true)
        setTimeout(() => {
            setIsClicked(false)
        }, 500)
    }

    return (
        <Box 
            className='key' 
            border
            background='dark-5'
            color='white'
            pad='small'
            style={{
                borderRadius: '5px'
            }}

            onClick={handleClick}
            animate={isClicked ? { keyframes: [{ opacity: 0.5 }, { opacity: 1 }] } : undefined }
        >
            <Text color='white' weight='bold'>{keyVal}</Text>
        </Box>
    )
}


export default Fun