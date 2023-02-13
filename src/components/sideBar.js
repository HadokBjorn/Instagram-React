import Sugestoes from "./sugestoes";
import Usuario from "./usuario";

export default function SideBar(){
    return(
        <sidebar>
            <Usuario/>
            <article>
                <h3>Sugestões para você</h3>
                <h2>Ver tudo</h2>
            </article>

            <Sugestoes/>
            
            <footer>
                <h3>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma
                </h3>
                <h3>© 2021 INSTAGRAM DO FACEBOOK</h3>
            </footer>
        </sidebar>
    )
}