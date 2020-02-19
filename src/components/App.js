import React from "react";

import UserCreate from "./UserCreate";
//We import the store
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "../components/LanguageSelector";

class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{ marginTop: "50px" }}>
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;
