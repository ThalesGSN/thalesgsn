import React, {useContext} from "react";
import {TypeLanguageContainer} from "./TypeLanguage.styles";
import DefaultContext from "../../../utils/contexts/DefaultContext";
// @ts-ignore ignoring because typewriter-effect library lack of support of TS
import Typewriter from 'typewriter-effect';
import {useTranslation} from "react-i18next";

const TypeLanguage = () => {
    const {programingLanguages} = useContext(DefaultContext);
    const {t} = useTranslation();
    const options = {
        strings: programingLanguages,
        autoStart: true,
        loop: true,
    };

    return (
        <TypeLanguageContainer>
            {t('typeWriter:before')} <Typewriter options={options} /> {t('typeWriter:after')}
        </TypeLanguageContainer>
    );
};

export default TypeLanguage;