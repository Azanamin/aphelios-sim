import "../css/GunSkill.css"

function GunSkill( props ){

    const path = "assets/skill_icon/" + props.gun.name + ".jpg";

    return (
        !props.isSub ?
            <img src={path} alt="" className="main-skill-icon"></img>
        :   <img src={path} alt="" className="sub-skill-icon"></img>
    )
}

export default GunSkill;