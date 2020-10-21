import React from "react";
import {ProfilePicContainer} from "./ProfilePic.styles";
import {useTranslation} from "react-i18next";
import {useSystemDarkMode} from "../../../../hooks/useSystemDarkMode";
import ProfilePicImg from '../../../../Assets/profilePic.jpeg';

const ProfilePic = () => {
    const {t} = useTranslation();

    return (
        <ProfilePicContainer image={ProfilePicImg}>
            <article aria-label={t('profilePicAlt')}/>
        </ProfilePicContainer>
    );
};

export default ProfilePic;