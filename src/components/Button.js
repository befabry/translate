import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
    //1st way
    //Add a reference of contextType to our Context object
    //Has to be call contextType
    static contextType = LanguageContext;

    render() {
        const text = this.context === "english" ? "Submit" : "Voorleggen";

        return <button className="ui button primary">{text}</button>;
    }
}

//second way
//Button.contextType = LanguageContext;

export default Button;
