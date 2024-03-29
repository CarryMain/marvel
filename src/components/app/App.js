import { lazy, Suspense } from "react";
import AppHeader from "../appHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import {MainPage,ComicsPage, SingleComicPage} from '../pages';
import Spinner from "../spinner/Spinner";


const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const Page404 = lazy(() => import('../pages/404'))
const SinglePage = lazy(() => import('../pages/SinglePage'))
const SingleComicPage = lazy(() => import('../pages/singleComicPage/SingleComicPage'))



const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="/comics" element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId" element={<SinglePage><SingleComicPage dataType='comic'/></SinglePage>}/>
                            <Route path="/character/:id" element={<SinglePage/>}/>
                            <Route path="*" element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;