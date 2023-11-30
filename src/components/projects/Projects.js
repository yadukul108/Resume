import React from 'react'
import "./Projects.css"
const Projects = () => {
  return (
    <div className='Projects'>
<div className="heading"><h1>Projects</h1></div>   
<div className="work">
  <div className="image"></div>
  <div className="explanation">
  <div className="heading1">Featured Project</div>
  <div className="heading2">SWAAS</div>
  <div className="description">Optimizing Doctor Availability and Appointment 
Allocation in Hospitals through Digital Technology and Al Integration. <br/>This is a direct front facing platform for the patient where he explore the facilities provided
</div>
  <div className="toolsUsed">ReactJS, NodeJs, AWS cloud</div>
  <div className="git"><div className="gitimage"></div><div className="link"></div></div>



  </div>

  </div>
  <div className="work">
  <div className="image2"></div>
  <div className="explanation">
  <div className="heading1">Featured Project</div>
  <div className="heading2">NewsAPP</div>
  <div className="description">Discover a new way to stay informed with [Your News App Name], a cutting-edge news application crafted with precision using ReactJS. Experience news like never before as we bring you the latest updates, trending stories, and in-depth coverage from around the world, all in one place.</div>
  <div className="toolsUsed">ReactJS, News API, Bootstrap</div>
  <div className="git"><div className="gitimage"></div><div className="link"></div></div>



  
  </div>

  </div>  
   
    </div>
  )
}

export default Projects
