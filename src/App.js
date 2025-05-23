
import './App.css';
import AboutUs from "./components/aboutus/about.js";
import Header from "./components/header/header.js";
import MembersList from "./components/memberslist/memberslist.js";
import Section from "./components/section/section.js";

function App(){
  return ( 
  <div>
    <Header />
    <div className="center-screen">
      <Section title="About Us" >
        <AboutUs/>
      </Section>
      <Section title="Members">
         <MembersList/>
      </Section>
    </div>
  </div>
  );
}

export default App;
