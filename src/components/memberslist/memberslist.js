import { Member } from '../member/member';
import './memberslist.css';
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
  return ( 
    <>
      <h2>Member</h2>
      <div className="member-container">
        {people.map(function(member) {
          return <Member name={member.name} city={member.city}/>
        })}
      </div>
    </>
   );
}

export default MembersList;