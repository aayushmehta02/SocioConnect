// import React from 'react'

// function Profiletop({profile:{
   
//     company,
//     location,
//     website,
//     social,
    
//     skills,

//     user: {name, avatar}
// }}) {
//   return (
//     <div>
//             <div className="profile-top bg-primary p-2">
//           <img
//             className="round-img my-1"
//             src={avatar}
//             alt=""
//           />
//           <h1 className="large">{name}</h1>
//           <p className="lead"> {company && <span>at {company}</span> }</p>
//           <p>{location && <h3>{location}</h3>}</p>
//           <div className="icons my-1">
//           {
//             website && (
//                 <a href={website} target="_blank" rel="noopener noreferrer">
//               <i className="fas fa-globe fa-2x"></i>
//             </a>
//             )
//           }
           
//            { social && <a href={social.twitter} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-twitter fa-2x"></i>
//             </a>}
//             { social && <a href={social.facebook} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-facebook fa-2x"></i>
//             </a>}
//             {social && <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-linkedin fa-2x"></i>
//             </a>}
//              {social && <a href={social.youtube} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-youtube fa-2x"></i>
//             </a>}
//            { social &&  <a href={social.instagram} target="_blank" rel="noopener noreferrer">
//               <i className="fab fa-instagram fa-2x"></i>
//             </a>}
//           </div>
//           <div className="skills-containaer">
//                     <div className="skills">
//                         {skills.map((skill, index) => (
//                             <div key={index} className="p-1">
//                                 <i className="fas fa-check" /> {skill}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//           </div>
//           </div>
    
//   )
// }

// Profiletop.propTypes = {
//     // profile: PropTypes.object.isRequired
// }

// export default Profiletop
