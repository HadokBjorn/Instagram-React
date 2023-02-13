import { useState } from "react";
import CardStories from "./perfilStories";
import Posts from "./posts";
import VideoPosts from "./videosPost";
import React from "react";

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
let cont = 0;

function esquerda(){
    const [buttonLeft, setButtonLeft] = useState('');
    document.querySelector('.story').scrollBy(-100,0);
    setButtonLeft('none');
    cont--;
    if(cont<=0){
            btnPrev.style.display = "none";
            btnNext.style.display = "block";
    }
}

function direita(){
    btnPrev.style.display = "block";
    document.querySelector('.story').scrollBy(100,0);
    cont++;
    if(cont>=3){
            btnNext.style.display = "none";
    }
}

export default function Stories(){
    return(
        <section className="storie-feed">
            <div id="box-storie-button" >
                <CardStories/>
                <button id="prev" onClick={esquerda}>
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
                <button id="next" onClick={direita}>
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