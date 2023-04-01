import { Box, Button, Header, Text } from 'grommet'
import styled from 'styled-components';
import { Menu } from 'grommet-icons'

const InvisibleIcon = styled(Menu)`opacity: 0;`
const StyledHeading = styled(Text)`
    font-family: 'Great Vibes', cursive;
    font-size: 2rem;
    color: black;
`;

function Navbar({ opener }) {
  return (
    <Header
        direction='row'
        align='center'
        fill
        pad='small'
        sticky="scrollup"
        background='rgba(15, 37, 87, 0.1)'
    >
        <Box>
            <Box>
                <Button icon={<InvisibleIcon />} />
            </Box>
        </Box>
        <Box fill>
            <StyledHeading textAlign='center'>JoAnn</StyledHeading>
        </Box>
        <Box>
            <Button icon={<Menu color='black' />} onClick={opener}/>
        </Box>
    </Header>
  )
}

export default Navbar