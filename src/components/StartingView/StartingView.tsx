import React from "react";
import {GradientBackground, StartingViewContainer} from "./StartingView.styles";
import {useSystemDarkMode} from "../../hooks/useSystemDarkMode";
import ScrollIndication from "./ScrollIndication";
import TypeLanguage from "./TypeLanguage";

const StartingView = () => {
    const isDarkMode = useSystemDarkMode();

    return (
        <StartingViewContainer>
            <GradientBackground aria-hidden="true" darkMode={isDarkMode} />
            <ScrollIndication />
            <TypeLanguage />
        </StartingViewContainer>
    );
};

export default StartingView;