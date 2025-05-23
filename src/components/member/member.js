// export function Member(values) {
//   const memberName=values.name;
//   const memberCity=values.city;
//   return (
//     <div>
//       <h2>{memberName}</h2>
//       <p>{memberCity}</p>
//     </div>
//   );
// }
import './Member.css';
export function Member(props) {
  console.log(props.name);
  const memberName=props.name;
  const memberCity=props.city;
  return (
  <div class="memberCard">
    <h2>{memberName}</h2>
    <p className="member-sub-heading">{memberCity}</p>
  </div>
  );
}
