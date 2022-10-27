import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import "./css/GunInfo.css";
import { GUN } from "../util/constants";
import { Fade } from "react-bootstrap";

function GunInfo(){

    const [gun, setGun] = useState("");

    const param = useParams();

    useEffect(() => {
        if(document.getElementsByClassName("main") != null) document.getElementById("main").style.opacity = "0.5";
        for (const item of GUN) {
            if(item.name === param.gunName) {
                setGun(item);
                break;
            }
        }
    })

    return (
        <Fade in={true}>
            <div className="gun-info">
                <img style={{
                        width: "30px", 
                        height: "30px", 
                        display: "inline-block",
                        marginTop: "2px",
                        marginLeft: "2px"   
                    }} 
                    src={"assets/mini_icon/" + gun.name + ".png"}>
                </img>
                {gun && <h5 className="gun-name" style={{color: gun.description.hexCode}}> {gun.name} - {gun.description.viet} </h5>}
                <Link to="/aphelios-sim/" className="return" onClick={() => {document.getElementById("main").style.opacity = 1}}>x</Link>
            </div>
        </Fade>
    );
}

export default GunInfo;