import { useState } from "react"

export default function Usuario(){
    const [nome, setNome] = useState('Denji');
    const [foto, setFoto] = useState('/assets/stories/denji-pochita.png');

    function MudaNome(){
        setNome(prompt('Digite seu nome de usuário'));
        if(foto !== undefined && setFoto !== ''){
            setNome('Denji')
        }

    }
    function MudaFoto(){
            setFoto(prompt('Insira o link da sua foto de perfil'));
        if(foto !== undefined && setFoto !== ''){
            setFoto('/assets/stories/denji-pochita.png');
        }
    }

    return(
        <header className="header-sidebar">
            <img data-test="profile-image" onClick={MudaFoto} src={foto} alt="perfil-user" />
            <div>
                <h2 data-test="name">
                    {nome}
                    <ion-icon test="edit-name" onClick={MudaNome} name="pencil-sharp"></ion-icon>
                </h2>
                <h3>@Sr.{nome}</h3>
            </div>
        </header>
    )
}