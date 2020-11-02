import React from "react";
import './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img src='https://ikona-zakaz.com.ua/wp-content/uploads/2018/11/12-vodafone-logo-8914412851bae8edeba2d2c002a4ad68-600x300.png'/>
            </div> */}
            <div className='description-block'>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}
export default ProfileInfo;