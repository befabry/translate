import React from "react";

const Context = React.createContext("english");

export default Context;

export class LanguageStore extends React.Component {
    state = { language: "english" };

    onLanguageChange = (language) => {
        this.setState({ language });
    };

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    onLanguageChange: this.onLanguageChange
                }}
            >
                {/*Allow us to use components inside our component*/}
                {this.props.children}
            </Context.Provider>
        );
    }
}
