import React from 'react'
import "./Skill.css"
const Skill = () => {
    return (
        <div className='SkillSection'>
            <div className="heading"><h1>Skills</h1></div>
            
            <div className="experience">
                <div className="expheading">Passionate web developer with a knack for turning creative visions into seamless, interactive, and visually stunning online experiences. Committed to pushing boundaries, solving problems, and bringing ideas to life through elegant code</div>
                <div className="skills">
                <div className="frontend">
                <div className="Icon"><div className="frontIcon"></div></div>
                    <div className="skillheading">Frontend</div>
                    <div className="para">I like to code things from scratch, and enjoy bringing ideas to life in a browser</div>
                    <div className="subheading">Languages I speak</div>
                    <div className="language">HTML, CSS, JS</div>
                    <div className="subheading">Dev Tools</div>

                    <div className="tools">ReactJs</div>
                    <div className="tools">NodeJs</div>
                    <div className="tools">NodeJs</div>
                    <div className="tools">NodeJs</div>

                </div>
                <div className="backend">
                    <div className="Icon"><div className="backIcon"></div></div>
                    <div className="skillheading">Backend</div>
                    <div className="para">I like to code things from scratch, and enjoy bringing ideas to life in a browser</div>
<div className="subheading">Languages I speak</div>
<div className="language">JS, Typescript</div>
<div className="subheading">Dev Tools</div>

<div className="tools">NodeJs</div>
<div className="tools">NodeJs</div>

<div className="tools">NodeJs</div>
<div className="tools">NodeJs</div>

                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Skill
