import React from 'react';
import s from './ProfileInfo.module.css';
import picture from '../../../assets/images/maxresdefault.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src={picture}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;