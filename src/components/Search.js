import { Mic } from "@material-ui/icons"
import Search from "@material-ui/icons/Search"
import { GoogleInput } from "./GoogleInputs"
import { GoogleButton } from "./GoogleButton"
import "./Search.css"


const Serch = () => {
    return (
        <>
            <form className="search">
            <GoogleInput>
                <Search className="serch_inputicon"/>
                <input/>
                <Mic className="mic_inputicon"/>
            </GoogleInput>
            <div className="search_buttons">
                <GoogleButton>Buscar con Google</GoogleButton>    
                <GoogleButton>Voy a tener suerte</GoogleButton>               
            </div>          

            </form>
        </>
    )
}

export default Serch
