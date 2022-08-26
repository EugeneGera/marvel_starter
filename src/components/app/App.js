import { Component } from "react/cjs/react.development";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        showRandomChar: true
    }

    render () {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    {this.state.showRandomChar ? <RandomChar/> : null}
                    <div className="char__content">
                        <CharList/>
                        <CharInfo/>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
}

export default App;