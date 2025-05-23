
import './App.css';
import AboutUs from './components/header/aboutus/about.js';
import Header from "./components/header/header.js";
import MembersList from "./components/memberslist/memberslist.js";
import { Member } from './components/member/member.js';

function App(){
  return ( 
  <div>
    <Header />
    <div className="center-screen">
      <AboutUs/>
      <MembersList/>
      <Member/>

    </div>

  </div>

 
  );
}

export default App;
