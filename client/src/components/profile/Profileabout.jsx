import React from 'react'

function Profileabout({profile: {bio, skills}, user:{name}}) {
  return (
    <div>
    <div class="profile-about bg-light p-2">
    
          {bio && <div><h2 class="text-primary">{name}s Bio</h2>
          <p>
            {bio}
          </p></div>}
          <div class="line"></div>
          <h2 className='text-primary'>Skill Set</h2>
    <div className='skills'>
      {skills.map((skill, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check' /> {skill}
        </div>
      ))}
        </div>
    </div>
    </div>
  )
}

Profileabout.propTypes = {
    // profile: PropTypes.object.isRequired
}

export default Profileabout
