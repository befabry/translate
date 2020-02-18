import React from "react";

import UserCreate from "./UserCreate";

class App extends React.Component {
    state = { language: "english" };

    onLanguageChange = (language) => {
        this.setState({ language });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "50px" }}>
                <div>
                    Select a language:&nbsp;
                    <i
                        className="flag us"
                        onClick={() => this.onLanguageChange("english")}
                    />
                    <i
                        className="flag fr"
                        onClick={() => this.onLanguageChange("french")}
                    />
                </div>
                <UserCreate />
            </div>
        );
    }
}

export default App;
