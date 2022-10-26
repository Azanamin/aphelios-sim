import { useEffect } from 'react';
import { useState } from 'react';
import GunInfoSubPanel from './components/GunInfoSubPanel';
import './css/Info.css'

function Info( props ){

    const [guns, setGuns] = useState([]);

    useEffect(() => {
        if(props.main.description.order < props.sub.description.order){
            setGuns([props.main, props.sub]);
        }
        else{
            setGuns([props.sub, props.main])
        }
    }, [props.main, props.sub])

    return (
        <div className='description'>
            <div style={{borderRight: "2px solid white"}}> 
                <GunInfoSubPanel gun={guns[0]} />
            </div>
            <div style={{borderLeft: "2px solid white"}}>
                <GunInfoSubPanel gun={guns[1]} />
            </div>
        </div>
    )
}

export default Info;