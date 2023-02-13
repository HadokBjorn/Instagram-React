const perfilStorie = [
    {
        img:"/assets/stories/denji-pochita.png",
        nome:"Denji",
    },
    {
    img:"/assets/perfis/makima-perfil.png",
    nome:"Makima",},
    {
        img:"/assets/posts/power/power-banheira.png",
        nome:"Power",
    },
    {
        img:"/assets/posts/Aki/aki-espada.png",
        nome:"Aki",
    },
    {
        img:"/assets/posts/anjo/anjo-horizonte.png",
        nome:"Angel",
    },
    {
        img:"/assets/posts/tubarao/tubarao-post.jpg",
        nome:"Beam",
    },
    {
        img:"/assets/posts/pochita/pochita-capivara.jpg",
        nome:"Pochita",
    },
    {
        img:"/assets/posts/himeno/himeno-sorrindo.jpg",
        nome:"Himeno",
    },
    {
        img:"/assets/posts/reze/reze-perfil.png",
        nome:"Reze",
    },
    {
        img:"/assets/posts/mitaka/mitaka-perfil.png",
        nome:"Mitaka",
    },
];

export default function CardStories(){
    return(
        <article className="story">
            {perfilStorie.map((f,i)=>{
                return(
                    <div className="card-story" id="first-card">
                        <img src={f.img} alt={f.nome} />
                        <p>{f.nome}</p>
                    </div>
            )})}
        </article>
    )
}