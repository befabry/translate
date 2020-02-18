import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
    renderLabel(value) {
        return value === "english" ? "Name" : "Nom";
    }

    render() {
        return (
            <div className="ui field">
                <label>
                    <LanguageContext.Consumer>
                        {(value) => this.renderLabel(value)}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );
    }
}

export default Field;
