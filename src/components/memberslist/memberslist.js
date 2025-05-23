import { Member } from '../member/member';
import StyleButton from "../stylebutton/stylebutton";
import './memberslist.css';
import { useState } from 'react';
import Confetti from 'react-confetti';

 const people = [
  { name: "Jaanu", city: "Hyderabad" },
  { name: "Ravi", city: "Delhi" },
  { name: "Priya", city: "Mumbai" },
  { name: "Amit", city: "Chennai" },
  { name: "Neha", city: "Bangalore" },
  { name: "Arjun", city: "Kolkata" },
  { name: "Sita", city: "Pune" },
  { name: "Rahul", city: "Ahmedabad" },
  { name: "Anjali", city: "Jaipur" },
  { name: "Vikram", city: "Lucknow" },
  { name: "Sneha", city: "Chandigarh" },
  { name: "Karan", city: "Surat" },
  { name: "Pooja", city: "Nagpur" },
  { name: "Rohit", city: "Indore" },
  { name: "Meena", city: "Bhopal" },
  { name: "Manoj", city: "Patna" },
  { name: "Divya", city: "Kanpur" },
  { name: "Nikhil", city: "Thane" },
  { name: "Tanya", city: "Visakhapatnam" },
  { name: "Deepak", city: "Vadodara" },
  { name: "Aisha", city: "Ludhiana" },
  { name: "Suresh", city: "Agra" },
  { name: "Komal", city: "Nashik" },
  { name: "Harish", city: "Faridabad" },
  { name: "Swati", city: "Meerut" },
  { name: "Tarun", city: "Rajkot" },
  { name: "Lavanya", city: "Varanasi" },
  { name: "Rakesh", city: "Srinagar" },
  { name: "Bhavna", city: "Amritsar" },
  { name: "Gopal", city: "Ranchi" },
  { name: "Phani", city: "Hitech" }
];
function MembersList() {
  const [luckyPerson, setluckyPerson] = useState("");
  const [showCelebration, setShowCelebration]=useState(false);
  const [isLoading, setLoading]=useState(false);

  function pickPerson() {
    setLoading(true);
    const randomNumber=Math.floor(Math.random()*people.length);
    const person=people[randomNumber];
    const luckyMessage=`${person.name} from ${person.city}`;

    setTimeout(function(){
      setluckyPerson(luckyMessage);
      setLoading(false);
      setShowCelebration(true);

    }, 5000)
    
  }
  return ( 
    <>
      {showCelebration && <Confetti numberOfPieces={2000}/>}
      <div className="member-container" style={{overflow: 'scroll'}}>
        {people.map(function(member) {
          return <Member name={member.name} city={member.city}/>
        })}
      </div>
      <div className='flex-center'>
        {isLoading &&  <h3>Loading...</h3>}
        <h2>{luckyPerson}</h2>
        <StyleButton text="Lucky Draw" onClick={pickPerson}/>
      </div> 
    </>
   );
}

export default MembersList;