import React from 'react'

function Profileabout({profile: {bio, skills},
user:{name}}) {
  return (
    <div>
    <div class="profile-about bg-light p-2">
    
          {bio && <div><h2 class="text-primary">{name}s Bio</h2>
          <p>
            {bio}
          </p></div>}
          <div class="line"></div>
          <h2 class="text-primary">Skill Set</h2>
          <div class="skills">
            <div class="p-1"><i class="fa fa-check"></i> HTML</div>
            <div class="p-1"><i class="fa fa-check"></i> CSS</div>
            <div class="p-1"><i class="fa fa-check"></i> JavaScript</div>
            <div class="p-1"><i class="fa fa-check"></i> Python</div>
            <div class="p-1"><i class="fa fa-check"></i> C#</div>
          </div>
        </div>
    </div>
  )
}

Profileabout.propTypes = {
    // profile: PropTypes.object.isRequired
}

export default Profileabout
