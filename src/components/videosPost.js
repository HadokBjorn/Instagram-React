const videosPost = [
    {
    perfi:"/assets/perfis/makima-perfil.png",
    nome:"Makima",
    perfiCurtidor: "/assets/stories/denji-pochita.png",
    seguidor:"Denji",
    curtidas:"33 mil",
    videoMp4:"/assets/video.mp4",
    videoOgv:"/assets/video.ogv",
    },
    {
    perfi:"/assets/perfis/makima-perfil.png",
    nome:"Makima",
    perfiCurtidor: "/assets/stories/denji-pochita.png",
    seguidor:"Denji",
    curtidas:"33 mil",
    videoMp4:"https://img.ifunny.co/videos/1191493d057b07d85c9710529aff950fab284c566b1ff2b01d8642e830bfadc9_1.mp4",
    videoOgv:"/assets/video.ogv",
    },
    {
    perfi:"/assets/perfis/makima-perfil.png",
    nome:"Makima",
    perfiCurtidor: "/assets/stories/denji-pochita.png",
    seguidor:"Denji",
    curtidas:"33 mil",
    videoMp4:"https://img.ifunny.co/videos/7d262bcf59b6c2e9ff2e911efe5fa40a6757682049cf60c41689bdf5ee0b00dc_1.mp4",
    videoOgv:"/assets/video.ogv",
    },
];

export default function VideoPosts(){
    return(
        videosPost.map((f,i)=>{
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
                    <video className="video" autoPlay muted loop controls> 
                        <source className="mp4" src={f.videoMp4} type="video/mp4" alt={f.nome}/>
                        <source src={f.videoOgv} type="video/ogv" alt={f.nome}/>
                    </video>
                </div>
                
                <article className="bottom-post">
                    <header className="interaction">
                        <div className="like-post">
                            <ion-icon className="curtir" id={`sem-curtida${i+6}`} name="heart-outline"></ion-icon>
                            <ion-icon className="like-red" id={`curtida${i+6}`} name="heart"></ion-icon>
                            <ion-icon name="chatbubble-outline" id={`icon-coment${i+6}`}></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </header>
                    <article className="like-info">
                        <img src={f.perfiCurtidor} alt={f.nome}/>
                        <p>curtido por <b>{f.seguidor}</b> e <b>outras {f.curtidas} pessoas</b></p>
                    </article>
                </article>
                <footer id="rodape-post">
                    <main className="coments " >
                        <div className="card-coments">
                            <img src={f.perfi} alt={f.nome} />
                            <p><b>{f.nome}</b> Não é o rosto que faz de alguém um monstro, são as escolhas que elas fazem para as suas vidas.</p>
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </main>
                    <footer className="addComent">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input className="input-coments" type="text" id={`add-comentario${i+6}`} placeholder="Adicionar comentário..."/>
                        <button id={`publicar${i+6}`} className="publicar">Publicar</button>
                    </footer>
                </footer>
            </section>
            )
        })
    )
}