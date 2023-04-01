import { useState } from 'react'
import { Box, Button, Heading, Layer, Text } from 'grommet'
import { Menu } from 'grommet-icons'
import Ma from '../assets/glimpse.jpg'
import Blue from '../assets/bluebonnets.jpg'
import Seven from '../assets/7.jpg'
import Son from '../assets/sons.jpg'
import Daughter from '../assets/daughters.jpg'
import Gks from '../assets/3gk.jpg'
import Bg from '../assets/bb.jpg'

function HeaderLayer({ closer }) {
    const [activeNav, setActiveNav] = useState('#')

  return (
    <Layer full animation='fadeIn'
        background={{
            image: `url(${Bg})`,
            filter: 'blur(200px) brightness(50%)'
        }}
    >
        <Box align='end' fill='horizontal' pad='small'>
            <Button icon={<Menu color='black' />} onClick={closer}/>
        </Box>
        
        <Box align='center' gap='medium' margin={{ top: '0.1rem'}} fill>
            <Heading color='blue' level='2' margin={{ top: 'small', bottom: 'none' }}>Joann Thibodeaux</Heading>
            <Heading color='blue' size='small' level='2' margin={{ top: 'none', } }>Retirement Celebration</Heading>


            <Box
                border
                background={{
                    image: `url(${Ma})`
                }}
                pad='large'
                width='70%'
                style={{ borderRadius: '10px' }}
                href='#hero'
                as='a'
                onClick={() => {
                    setActiveNav('#hero') 
                    closer()
                }}
                className={activeNav === '#hero' ? 'active' : ''}
            ><Text weight='bold' color='light-2'>JoAnn</Text></Box>

            <Box
                border
                background={{
                    image: `url(${Blue})`
                }}
                pad='large'
                width='70%'
                style={{ borderRadius: '10px', filter: 'brightness(70%) saturate(110%) hue-rotate(-10deg)' }}
                href='#info'
                as='a'
                onClick={() => {
                    setActiveNav('#info') 
                    closer()
                }}
                className={activeNav === '#info' ? 'active' : ''}
            ><Text weight='bold' color='light-2'>Commencement</Text></Box>

            <Box
                border
                background={{
                    image: `url(${Seven})`
                }}
                pad='large'
                width='70%'
                style={{ borderRadius: '10px', filter: 'brightness(70%) saturate(110%) hue-rotate(-10deg)' }}
                as='a'
                href='#gallery'
                onClick={() => {
                    setActiveNav('#gallery') 
                    closer()
                }}
            ><Text weight='bold' color='dark-2'>Gallery</Text></Box>
            
            <Box
                border
                background={{
                    image: `url(${Son})`
                }}
                pad='large'
                width='70%'
                style={{ borderRadius: '10px' }}
                href='#sons'
                as='a'
                onClick={() => {
                    setActiveNav('#sons') 
                    closer()
                }}
            ><Text weight='bold' color='dark-2'>Sons</Text></Box>

            <Box
                border
                background={{
                    image: `url(${Daughter})`
                }}
                pad='large'
                width='70%'
                style={{ borderRadius: '10px' }}
                href='#daughters'
                as='a'
                onClick={() => {
                    setActiveNav('#daughters') 
                    closer()
                }}
            ><Text weight='bold' color='white'>Daughters</Text></Box>

            <Box
                border
                background={{
                    image: `url(${Gks})`
                }}
                pad='large'
                width='70%'
                style={{ borderRadius: '10px' }}
                href='#grandkids'
                as='a'
                onClick={() => {
                    setActiveNav('#grandkids') 
                    closer()
                }}
            ><Text weight='bold' color='white'>Grandkids</Text></Box>
        </Box>
    </Layer>
  )
}

export default HeaderLayer