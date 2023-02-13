const posts = [
    {
    perfi:"/assets/perfis/makima-perfil.png",
    nome:"Makima",
    post:"/assets/posts/makima/makima-terno.jpg",
    perfiCurtidor: "/assets/stories/denji-pochita.png",
    seguidor:"Denji",
    curtidas:"45",
    },
    {
    perfi:"/assets/perfis/makima-perfil.png",
    nome:"Makima",
    post:"/assets/posts/makima/makima-dogs.jpg",
    perfiCurtidor: "/assets/stories/denji-pochita.png",
    seguidor:"Denji",
    curtidas:"450",
    },
    {
    perfi:"/assets/perfis/makima-perfil.png",
    nome:"Makima",
    post:"/assets/posts/makima/makima-conceitual.jpg",
    perfiCurtidor: "/assets/stories/denji-pochita.png",
    seguidor:"Denji",
    curtidas:"33 mil",
    },
    {
    perfi:"/assets/perfis/makima-perfil.png",
    nome:"Makima",
    post:"/assets/posts/makima/makima.gif",
    perfiCurtidor: "/assets/stories/denji-pochita.png",
    seguidor:"Denji",
    curtidas:"33 mil",
    },
    {
    perfi:"/assets/perfis/makima-perfil.png",
    nome:"Makima",
    post:"/assets/posts/power/power-denji-oculos.jpg",
    perfiCurtidor: "/assets/stories/denji-pochita.png",
    seguidor:"Denji",
    curtidas:"33 mil",
    },
];

export default function Posts(){
    return(
        posts.map((f,i)=>{
            return(
                <section className="post-container" id={i}>
                <header className="top-post">
                    <div className="card-perfil">
                        <img src={f.perfi} alt={f.nome} />
                        <p>{f.nome}</p>
                    </div>
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </header>
                <div className="img-post">
                    <img src={f.post} alt={f.nome}/>
                </div>
                
                <article className="bottom-post">
                    <header className="interaction">
                        <div className="like-post">
                            <ion-icon className="curtir" id={`sem-curtida${i}`} name="heart-outline"></ion-icon>
                            <ion-icon className="like-red" id={`curtida${i}`} name="heart"></ion-icon>
                            <ion-icon name="chatbubble-outline" id={`icon-coment${i}`}></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </header>
                    <article className="like-info">
                        <img src={f.perfiCurtidor} alt={f.nome}/>
                        <p>curtido por <b>{f.seguidor}</b> e <b>outras {f.curtidas} pessoas</b></p>
                    </article>
                </article>
                <div className="card-coments">
                        <img src={f.perfi} alt={f.nome}/>
                        <p><b>{f.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                </div>
                <footer id="rodape-post">
                    <main className="coments " >
                    <div className="card-coments">
                        <img src={f.perfi} alt={f.nome}/>
                        <p><b>{f.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="card-coments">
                        <img src={f.perfi} alt={f.nome}/>
                        <p><b>{f.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="card-coments">
                        <img src={f.perfi} alt={f.nome}/>
                        <p><b>{f.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="card-coments">
                        <img src={f.perfi} alt={f.nome}/>
                        <p><b>{f.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="card-coments">
                        <img src={f.perfi} alt={f.nome}/>
                        <p><b>{f.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
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
        })
    );
}