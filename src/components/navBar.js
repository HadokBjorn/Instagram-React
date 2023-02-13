function MudaTema(){
    document.body.classList.toggle("dark");
}

export default function NabBar(){
    return(
        <>
            <header className="header-mobile">
                <div className="left">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon onClick={MudaTema} name="moon-sharp"></ion-icon>
                </div>
                <img className="light-logo" src="../../assets/logo.png" alt="light-logo" />
                <img className="dark-logo" src="../../assets/logo-branca.png" alt="dark-logo"/>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </header>
            <header className="header-desktop">
                <div>                
                    <div className="left">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <img className="dark-logo" src="/assets/logo-branca.png" alt="dark-logo"/>
                        <img className="light-logo" src="/assets/logo.png" alt="light-logo"/>
                        <ion-icon onClick={MudaTema} name="contrast-sharp"></ion-icon>
                    </div>
                    <input placeholder="Pesquisar"/>
                    <div className="right">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </header>
        </>
    )
}