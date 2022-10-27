import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Loader(){
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/aphelios-sim');
    }, [])

    return (
        <> hello </>
    )
}

export default Loader;