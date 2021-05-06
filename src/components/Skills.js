import React from 'react'
import "./Skills.css"
import Skill from "./Skill"

function Skills() {
    return (
        <>
            <div className="skills">
                <h2 className="h2">Compétences</h2>
                <Skill title="HTML/CSS" rating="5" />
                <Skill title="JAVASCRIPT" rating="4" />
                <Skill title="REACT" rating="2" />
                <Skill title="JAVA" rating="3" />
                <Skill title="C" rating="3" />
            </div>
            <div className="skills">
                <h2 className="h2">Langues</h2>
                <Skill title="Français" rating="5" />
                <Skill title="Anglais" rating="3" />
                <Skill title="Chinois" rating="5" />
            </div>
            {/*<Interests />*/}
        </>
    )
}

export default Skills
