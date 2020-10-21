import React from "react";
import {ProfileContainerArticle} from "./ProfileContainer.styles";
import {useTranslation} from "react-i18next";
import ProfilePicImg from '../../../Assets/profilePic.jpeg';
import {useSystemDarkMode} from "../../../hooks/useSystemDarkMode";
import ProfilePic from "./ProfilePic";

const ProfileContainer = () => {
    const isDarkMode = useSystemDarkMode();
    const {t} = useTranslation();

    return (
        <ProfileContainerArticle>
            <ProfilePic/>
            <p>Thales Nunes</p>
        </ProfileContainerArticle>
    );
};

export default ProfileContainer;