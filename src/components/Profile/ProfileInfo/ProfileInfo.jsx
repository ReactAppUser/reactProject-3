import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import picture from '../../../assets/images/maxresdefault.jpg'
import Preloader from '../../common/Preloader/preloader';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/smile.jpg"
import { isPropertySignature } from 'typescript';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const mainPhotoSelected = (event) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);

        }
    }

    const onSubmit =  (formData) => {
      saveProfile(formData).then(()=>{
        setEditMode(false);
      });
               };
              
    

    return (
        <div>
            <div>
                <img src={picture} />
            </div>

            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                {isOwner && <div><input type={"file"} onChange={mainPhotoSelected} /></div>}

                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileData goToEditMode={() => { setEditMode(true) }}
                 profile={profile} isOwner={isOwner} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
    }


const ProfileData = ({ profile, isOwner, goToEditMode }) => {

    return (<div>
        <div>
            {isOwner && <button onClick={goToEditMode}>Edit</button>}
        </div>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My profesional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => { return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> })}
        </div>
    </div>
    )
}

const Contact = ({ contactTitle, contactValue }) => {

    return (
        <div className={s.contact}><b>-{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;