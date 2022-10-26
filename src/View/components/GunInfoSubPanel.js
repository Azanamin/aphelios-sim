

function GunInfoSubPanel( props ) {

    return (
        <>
            <h5 style={{color: props.gun.description.hexCode}}>
                <img style={{width: "30px", height: "30px", marginRight: "10px"}}
                    src={"assets/mini_icon/" + props.gun.name + ".png"}
                    alt="" >
                </img>
                {props.gun.name}
            </h5>
        </>
    );
}

export default GunInfoSubPanel;