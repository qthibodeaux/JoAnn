import { useState } from 'react';
import { Box, Button, Carousel, Image, Layer } from 'grommet';
import One from '../assets/1.jpg'
import Two from '../assets/2.jpg'
import Three from '../assets/3.jpg'
import Four from '../assets/4.jpg'
import Five from '../assets/5.jpg'
import Six from '../assets/6.jpg'
import Seven from '../assets/7.jpg'
import Eight from '../assets/8.jpg'
import Nine from '../assets/9.jpg'


function Gallery() {
    const [open, setOpen] = useState(false)
    const [pic, setPic] = useState(null)
    
    const onOpen = (val) => {
        setOpen(true)
        setPic(val)
    }
    const onClose = () => setOpen(false)

  return (
    <Box align='center' pad='large' id='gallery'>
        <Carousel controls={false} play={3000}>
            <Box 
                height='small'
            >
                <Image fit='cover' src={One}/>
            </Box>
            <Image fit='cover' src={Two}/>
            <Image fit='cover' src={Three}/>
        </Carousel>
        <Box
            fill='horizontal'
        >
            <Box
                direction='row'
                fill='horizontal'
            >
                <Box height='xsmall' width='50%' onClick={() => onOpen(One)}><Image fit='cover' src={One}/></Box>
                <Box height='xsmall' width='50%' onClick={() => onOpen(Two)}><Image fit='cover' src={Two}/></Box>
            </Box>

            <Box
                direction='row'
                fill='horizontal'
            >
                <Box height='xsmall' width='50%' onClick={() => onOpen(Three)}><Image fit='cover' src={Three}/></Box>
                <Box height='xsmall' width='50%' onClick={() => onOpen(Four)}><Image fit='cover' src={Four}/></Box>
            </Box>

            <Box
                direction='row'
                fill='horizontal'
            >
                <Box height='xsmall' width='50%' onClick={() => onOpen(Five)}><Image fit='cover' src={Five}/></Box>
                <Box height='xsmall' width='50%' onClick={() => onOpen(Six)}><Image fit='cover' src={Six}/></Box>
            </Box>

            <Box
                direction='row'
                fill='horizontal'
            >
                <Box height='xsmall' width='50%' onClick={() => onOpen(Seven)}><Image fit='cover' src={Seven}/></Box>
                <Box height='xsmall' width='50%' onClick={() => onOpen(Eight)}><Image fit='cover' src={Eight}/></Box>
            </Box>

            <Box
                direction='row'
                fill='horizontal'
            >
                <Box height='xsmall' width='50%' onClick={() => onOpen(Nine)}><Image fit='cover' src={Nine}/></Box>
                <Box height='xsmall' width='50%' onClick={() => onOpen(Three)}><Image fit='cover' src={Three}/></Box>
            </Box>
            
            {open && (
                <Layer
                    position="center"
                    onClickOutside={onClose}
                    onEsc={onClose}
                >
                    <Box
                        pad={{ top: 'xlarge', left: 'medium', right: 'medium' }}
                        gap='medium'
                        background='var(--color-bg)'
                        fill
                    >
                        <Button 
                            label='Close?'
                            primary
                            color='var(--color-primary)'
                            onClick={onClose}
                        />
                        <Box width='100%'><Image src={pic}/></Box>
                    </Box>
                </Layer>
            )}
        </Box>
    </Box>
  )
}

export default Gallery