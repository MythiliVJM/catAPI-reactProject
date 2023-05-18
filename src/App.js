import React from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';
import Navbar from './components/navBar';
import { getCatsFetch } from './components/catState';
import image from './components/catImage.webp';
// import Demo from './scss/demo';
// import { myData } from './components/data';
export default function App() {
    const cats= useSelector(state => state.cats.cats)
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(getCatsFetch());
    }, [dispatch]);
    console.log(cats);
return(
     <div>
         <Navbar/>
         <div className='main-title'>
         <h1>CAT SPECIES GALLERY</h1>
         <p>Images of different species of cats.  Lots  of cats for your viewing pleasure.</p>
         <hr />
         </div>
         <div className='Gallery'>
            {cats.map(cat=>
                <div key={cat.id} className='row'>
                <div className='column column-left'>
                    <img 
                      alt={cat.name} 
                      src={image}
                      width='200'
                      heigh="200"
                    />
                </div>
                <div className='column column-right'>
                       <h2>{cat.name}</h2>
                       <h5>Temperament: {cat.temperament}</h5>
                       <p>{cat.description}</p>
                </div>
                </div>
            )}
         </div>
     </div>
)}

