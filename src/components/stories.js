import CardStories from "./perfilStories";
import Posts from "./posts";
import VideoPosts from "./videosPost";
import React from "react";
import { useState } from "react";



export default function Stories(){
    const [btnPrev, setBtnPrev] = useState('none');
const [btnNext, setBtnNext] = useState('block');
let cont = 0;

function Esquerda(){
    document.querySelector('.story').scrollBy(-100,0);
    cont--;
    if(cont<=0){
        setBtnPrev('none');
        setBtnNext('block');
    }
}

function Direita(){
    setBtnPrev('block');
    document.querySelector('.story').scrollBy(100,0);
    cont++;
    if(cont>=3){
        setBtnNext('none');
    }
}
    return(
        <section className="storie-feed">
            <div id="box-storie-button" >
                <CardStories/>
                <button id="prev" onClick={Esquerda} style={{display:`${btnPrev}`}}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
                    </svg>
                </button>
                <button id="next" onClick={Direita} style={{display:`${btnNext}`}}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
                    </svg>
                </button>
            </div>
            <Posts/>
            <VideoPosts/>
        </section>
    );
}