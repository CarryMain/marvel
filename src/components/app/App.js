import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';

import decoration from '../../resources/image/UW.png';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
                <img src={decoration} alt="vision" className="bg-decoration" />
            </main>
        </div>
    )
}

export default App;