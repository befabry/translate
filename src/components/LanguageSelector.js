import React from "react";

//We import the context only
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        console.log(this.context);

        return (
            <div>
                Select a language:&nbsp;
                <i
                    className="flag us"
                    onClick={() => this.context.onLanguageChange("english")}
                />
                <i
                    className="flag fr"
                    onClick={() => this.context.onLanguageChange("french")}
                />
            </div>
        );
    }
}

export default LanguageSelector;
