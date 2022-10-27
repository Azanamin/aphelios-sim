import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { GUN } from '../util/constants';
import Gun from '../util/model/Gun';
import GunQueue from '../util/model/GunQueue';
import GunMiniIcon from './components/GunMiniIcon';
import GunSkill from './components/GunSkill';
import Info from './Info';

function Container() {

    const [mainGun, setMainGun] = useState(GUN[0]);
    const [subGun, setSubGun] = useState(GUN[1]);

    const location = useLocation();

    let keyHandle = (event) => {
        if(event.keyCode === 87){
            const temp = subGun;
            setSubGun(mainGun);
            setMainGun(temp);
        }
        if(event.keyCode === 81){
            const temp = mainGun;
            temp.ammo -= 10;
            setMainGun(new Gun(temp.name, temp.ammo, temp.description));
        }
    }

    let clickHandle = (event) => {
        if(event.button === 0){
            setMainGun(new Gun(mainGun.name, mainGun.ammo - 1, mainGun.description))
        }
    }

    useEffect(() => {
        if(mainGun.ammo <= 0){
            next();
        }
    }, [mainGun])

    useEffect(() => {
        if(location.pathname !== "/") {
            clickHandle = (event) => {}
            keyHandle = (event) => {}
        }
    })

    const [queue, setQueue] = useState(new GunQueue());

    const nav = useNavigate();

    const next = () => {
        let temp = new Gun(mainGun.name, 50, mainGun.description);
        queue.enqueue(temp);
        let nextGun = queue.dequeue();
        setMainGun(nextGun);
    }

    

    return( 
        <>
        <div className='background'
        onKeyDown={location.pathname === "/" ? keyHandle : undefined} 
        onMouseDown={location.pathname === "/" ? clickHandle : undefined} tabIndex={-1} >
            <img src="assets/background/background.jpg" alt=""></img>
        </div>

        <div className='container mt-5' id='main' 
        onKeyDown={location.pathname === "/aphelios-sim" ? keyHandle : undefined} 
        onMouseDown={location.pathname === "/aphelios-sim" ? clickHandle : undefined} tabIndex={0}
        style={{position: "relative"}}> 

            <div className='skill-container'>
                <GunSkill gun={mainGun} isSub={false} />
                <GunSkill gun={subGun} isSub={true} />
                <div style={{display: "inline-block", verticalAlign: "top", marginLeft: "10px"}}>
                    {queue.queue.map(item => 
                        <GunMiniIcon gun={ item } key={item.name}/>
                    )} 
                </div>
            </div>
            <div className="info">
                <div style={{color: "white"}}>
                    left click: -1 main ammo | Q: -10 main ammo | W: switch main and sub gun
                </div>
            </div>
            <Info main={mainGun} sub={subGun}/>
        </div>
        <Outlet />
        </>
    );
}

export default Container;