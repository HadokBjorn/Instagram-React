import { useState } from "react";

export default function RenderPost(props,i){

    const [idLike, setIdLike] = useState('block');
    const [idLiked, setIdLiked] = useState('none');
    const [curtidas, setCurtidas] = useState(Number(props.curtidas));
    const [saved, setSaved] = useState('block');
    const [unSaved, setUnSaved] = useState('none');

    function Curtir() {
        setCurtidas(curtidas + 1);
        setIdLike('none');
        setIdLiked('block');
    }
    function DesCurtir(){
        if(idLiked === 'block'){
            setCurtidas(curtidas - 1);
            setIdLike('block');
            setIdLiked('none');
        }
    }
    function SavePost() {
        setSaved('none');
        setUnSaved('block');
    }
    function UnSavePost(){
        if(unSaved === 'block'){
            setSaved('block');
            setUnSaved('none');
        }
    }
    return(
        <section data-test="post" className="post-container" id={i}>
            <header className="top-post">
                <div className="card-perfil">
                    <img src={props.perfi} alt={props.nome} />
                    <p>{props.nome}</p>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </header>
            <div className="img-post">
                <img data-test="post-image" src={props.post} alt={props.nome}/>
            </div>
            
            <article className="bottom-post">
                <header className="interaction">
                    <div className="like-post">
                        <ion-icon data-test="like-post" onClick={Curtir} style={{display:`${idLike}`}} className="curtir" id={`sem-curtida${i}`} name="heart-outline"></ion-icon>
                        <ion-icon onClick={DesCurtir} style={{display:`${idLiked}`, color:'red'}} className="like-red" id={`curtida${i}`} name="heart"></ion-icon>
                        <ion-icon name="chatbubble-outline" id={`icon-coment${i}`}></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon data-test="save-post" onClick={SavePost} style={{display:`${saved}`}} name="bookmark-outline"></ion-icon>
                    <ion-icon onClick={UnSavePost} style={{display:`${unSaved}`}} name="bookmark"></ion-icon>
                </header>
                <article className="like-info">
                    <img src={props.perfiCurtidor} alt={props.nome}/>
                    <p>curtido por <b>{props.seguidor}</b> e <b data-test="likes-number">outras {curtidas} pessoas</b></p>
                </article>
            </article>
            <div className="card-coments">
                    <img src={props.perfi} alt={props.nome}/>
                    <p><b>{props.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                    <ion-icon name="heart-outline"></ion-icon>
            </div>
            <footer id="rodape-post">
                <main className="coments " >
                <div className="card-coments">
                    <img src={props.perfi} alt={props.nome}/>
                    <p><b>{props.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="card-coments">
                    <img src={props.perfi} alt={props.nome}/>
                    <p><b>{props.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="card-coments">
                    <img src={props.perfi} alt={props.nome}/>
                    <p><b>{props.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="card-coments">
                    <img src={props.perfi} alt={props.nome}/>
                    <p><b>{props.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="card-coments">
                    <img src={props.perfi} alt={props.nome}/>
                    <p><b>{props.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                </main>
                <footer className="addComent">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input className="input-coments" type="text" id={`add-comentario${i}`} placeholder="Adicionar comentário..."/>
                    <button id={`publicar${i}`} class="publicar">Publicar</button>
                </footer>
            </footer>
        </section>
    )
}