import React from 'react';
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing"
import About from '../About/About';


class App extends React.Component{
    render(){
        return(
            <div className="app">
                {/*Nav Section*/}
                <Nav />
                {/*Landing Section*/}
                <Landing />
                {/*About Section*/}
                <About />
                {/*Projects Section*/}
                {/*Contact and Footer Section*/}


            </div>
        )
    }
}

export default App;