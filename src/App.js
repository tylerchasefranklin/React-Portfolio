import React from "react";

import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {   

    return (
        <Portfolio>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </Portfolio>
        
    );
};

export default App;