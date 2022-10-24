import "../css/GunMiniIcon.css"

function GunMiniIcon( props ){

    const path = "assets/mini_icon/" + props.gun.name + ".png";

    return (
        <>
            <img src={path} alt="" className="mini-icon"></img>
        </>
    )
}

export default GunMiniIcon