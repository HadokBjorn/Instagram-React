import RenderPost from "./renderPost";
import posts from "./dataPost";

export default function Posts(){
        return (
            posts.map((f,i)=>(
                <>
                <RenderPost perfi={f.perfi} 
                nome={f.nome}
                post={f.post}
                perfiCurtidor={f.perfiCurtidor}
                seguidor={f.seguidor}
                curtidas={f.curtidas}
                />
                </>
            ))
        )
}