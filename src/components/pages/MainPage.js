import { useState } from "react";
import RandomChar from "../randomChar/RandomChar";
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import SearchPanel from '../searchPanel/SearchPanel';


const MainPage = () => {

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }

    return ( 
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <SearchPanel/>
                </ErrorBoundary>
            </div> 
            </div>
            
        </>
    )
}

export default MainPage