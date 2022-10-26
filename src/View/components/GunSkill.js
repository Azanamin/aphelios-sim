import { useNavigate } from "react-router-dom";
import "../css/GunSkill.css"

function GunSkill( props ){

    const path = "assets/skill_icon/" + props.gun.name + ".jpg";

    const nav = useNavigate();

    const clickHandle = (event) => {
        if(event.button === 0){
            nav("/" + props.gun.name);
        }
    }

    return (
        !props.isSub ?
            <div style={{width: "50px", height: "50px", display: "inline-block"}}>
                <img src={path} alt="" className="main-skill-icon" onClick={clickHandle}></img>
                <h5 style={{color: "white", width: "100%", textAlign: "center"}}>{props.gun.ammo}</h5>
            </div>
        :   
            <div style={{width: "50px", height: "50px", display: "inline-block", verticalAlign: "top"}}>
                    <img src={path} alt="" className="sub-skill-icon" onClick={clickHandle}></img>
            </div>
    )
}

export default GunSkill;