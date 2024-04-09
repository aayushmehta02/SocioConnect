import React from 'react';
function Profileitem({profile: {
    user:{_id, name, avatar},
    status,
    compnay,
    location,
    skills, githubusername, social,
    website
}}) {
  return (
    <div className='profile bg-light'>
        <img src={avatar} alt='' className='round-img'/>
        <div>
            <h2>{name}</h2>
            <p>{status} {compnay && <span>at {compnay}</span> }</p>
            <p className='my-1'> {location && <span>at {location}</span> }</p>
            <a href={`https://github.com/${githubusername}`} target='_blank'> Github id: {githubusername}</a>
            <div className="icons my-1">
          {
            website && (
                <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x mx-500000"></i>
            </a>
            )
          }
           
           { social && <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x mx-50000"></i>
            </a>}
            { social && <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x mx-50000"></i>
            </a>}
            {social && <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x mx-50000"></i>
            </a>}
             {social && <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x mx-50000"></i>
            </a>}
           { social &&  <a href={social.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x mx-50000"></i>
            </a>}
          </div>
        </div>
        <ul>
            {skills.slice(0,4).map((skill, index)=>(
                <li key={index} className='text-primary'>
                <i className='fas fa-check'></i> 
                {skill}
                </li>
            ))}
        </ul>
    </div>
  )
}

Profileitem.propTypes = {}

export default Profileitem

