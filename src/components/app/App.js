import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/image/UW.png';

class App extends Component {

    state = {
        selectedChar: null,
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id,
        })
    }
    
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}/>    
                        </ErrorBoundary>
                    </div>
                    <img src={decoration} alt="vision" className="bg-decoration" />
                </main>
            </div>
        )
    }
}

export default App;