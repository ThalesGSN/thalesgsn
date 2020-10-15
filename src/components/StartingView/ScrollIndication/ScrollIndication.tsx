import React from "react";
import {ScrollIcon, ScrollIndicationContainer} from "./ScrollIndication.styles";
import './StartingView.animations.css';

const ScrollIndication = () => {
    return (
        <ScrollIndicationContainer>
            <ScrollIcon />
        </ScrollIndicationContainer>
    );
};

export default ScrollIndication;