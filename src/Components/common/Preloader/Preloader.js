import React from 'react';
import download from './../../../assets/images/load.svg'

let Preloader = () => {
    return <div style={{ background: 'white' }}>
        <img src={download} />
    </div>
}
export default Preloader;