import './comicsList.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../services/MarvelService';
import { useState, useEffect } from 'react';

const ComicsList = (props) => {

    const [comics, setComics] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(220)
    const [comicsEnd, setComicsEnd] = useState(false) 

    const {error, loading, getAllComics} = useMarvelService()

    useEffect(() => {
        onRequest(offset, true)
    }, [])
    
    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllComics(offset)
        .then(onComicsLoaded)
    }

    const onComicsLoaded = (comicsList) => {
        let ended = false 
        if(comicsList.length < 8) {
            ended = true 
        }

        setComics(comics => [...comics, ...comicsList])
        setNewItemLoading(newItemLoading => false) 
        setOffset(offset => offset + 8)
        setComicsEnd(comics => ended)
    }

    function renderItems(arr) {
        const items =  arr.map((item) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            return (
                <li className="comics__item" key={item.id}>
                    <a href={item.url}>
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img" />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}$</div>
                    </a>
                </li>
            )
        });
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(comics)
    const errorMessage = error ? <ErrorMessage/> : null
    const spinner = loading && !newItemLoading ? <Spinner/> : null 
    
    return ( 
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items} 
            <button className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': comicsEnd ? 'none' : 'block'}}
                    onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;