import { useState } from 'react';
import { GUN } from '../util/constants';
import Gun from '../util/model/Gun';
import GunQueue from '../util/model/GunQueue';
import GunMiniIcon from './components/GunMiniIcon';
import GunSkill from './components/GunSkill';

function Container() {

    const [mainGun, setMainGun] = useState(GUN[0]);
    const [subGun, setSubGun] = useState(GUN[1]);

    const Swap = (event) => {
        if(event.keyCode === 87){
            const temp = subGun;
            setSubGun(mainGun);
            setMainGun(temp);
        }
    }

    const [queue, setQueue] = useState(new GunQueue());

    const next = () => {
        let temp = new Gun(mainGun.name, 50, mainGun.rating);
        queue.enqueue(temp);
        let nextGun = queue.dequeue();
        setMainGun(nextGun);
    }

    return( 
        <div className='container' onKeyDown={Swap} tabIndex={-1}> 
            <div className='skill-container'>
                <GunSkill gun={mainGun} isSub={false} />
                <GunSkill gun={subGun} isSub={true} />
                {queue.queue.map(item => 
                    <GunMiniIcon gun={ item } key={item.name}/>
                )} 
            </div>
            <div>
                <button className='btn-dark m-2' onClick={next}>Next Gun</button>
            </div>
        </div>
    );
}

export default Container;