import ReactDOM from 'react-dom';
import NabBar from "./components/navBar";
import Corpo from './components/corpo';
import Footer from './components/footer';

function App(){
    return(
        <section className="container">
            <NabBar/>
            <Corpo/>
            <Footer/>
        </section>
    )
}

ReactDOM.render(App(), document.querySelector('.root'));