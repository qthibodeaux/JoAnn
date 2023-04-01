import { useState } from 'react';
import { Grommet, Box, Text } from 'grommet'; 
import { Daughters, Gallery, Grandkids, HeaderLayer, Hero, Info, Navbar, Sons } from './components/index'
import './App.css';

function App() {
  const [showSideBar, setShowSideBar] = useState(false)
  const opener = () => setShowSideBar(true)
  const closer = () => setShowSideBar(false)

  return (
    <Grommet className="App">
      <Navbar opener={opener}/>
      {showSideBar && <HeaderLayer closer={closer} />}
      <Hero />
      <Gallery />
      <Info />
      <Sons />
      <Daughters />
      <Grandkids />
      <Box 
        pad='xlarge'
      >
        <Text size='small'>XOXO Thibodeaux Family </Text>
      </Box>
    </Grommet>
  );
}

export default App;
