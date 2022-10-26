import { useEffect } from "react";
import { useState } from "react";


function GunInfoSubPanel( props ) {

    const [gun, setGun] = useState(undefined);

    useEffect(() => {
        setGun(props.gun)
        console.log(gun);
    }, [props.gun])

    return gun ? (
        <>
            <h5 style={{color: gun.description.hexCode}}>
                <img style={{width: "30px", height: "30px", marginRight: "10px"}}
                    src={"assets/mini_icon/" + gun.name + ".png"}
                    alt="" >
                </img>
                {gun.name}
            </h5>
        </>
    ) : <></>;
}

export default GunInfoSubPanel;