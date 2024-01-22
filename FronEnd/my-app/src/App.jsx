import Pages from './pages/Pages'

import './index.css'
import Categorie from './components/Categorie';
import { BrowserRouter}from 'react-router-dom'
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiSmartphoneFill } from "react-icons/ri";
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav>
  <RiSmartphoneFill/>
<Logo to={"/"}> Phones </Logo>
</Nav>
<Search/>
<Categorie/>
<Pages/>
</BrowserRouter>
    
    </div>
  );
}
const Logo = styled(Link)`
text-decoration:none;
font-size: 1.5rem;
font-weight :400  ;
font-family : 'Lobster Two, cursive '
`
const Nav=styled.div`
padding: 2rem 0rem;
display:flex;
justify-content: flex-start;
align-items;
svg{
  font-size : 2rem;
}
`

export default App;
