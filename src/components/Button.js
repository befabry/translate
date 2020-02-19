import React from "react";

import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    //1st way
    //Add a reference of contextType to our Context object
    //Has to be call contextType
    //static contextType = LanguageContext;

    renderSubmit(language) {
        return language === "english" ? "Submit" : "Envoyer";
    }

    renderButton(color) {
        return (
            <button className={`ui button ${color}`}>
                {/*3rd way use the Consumer*/}
                <LanguageContext.Consumer>
                    {({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        );
    }

    render() {
        //1st way, access to this.context
        //const text = this.context === "english" ? "Submit" : "Envoyer";

        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

//second way
//Button.contextType = LanguageContext;

export default Button;
