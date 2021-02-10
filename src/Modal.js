
import './Modal.css'

function Modal({setUsername, setColor}){

    const clickHandler = (e) => {
        e.preventDefault();
        document.querySelector(".modal-wrapper").style.display = "none";

    }
    const putHighlight = (target) => {
        document.querySelectorAll(".color-palette-item").forEach((elem) => {
            elem.style.border = "3px solid #eee";
            
        })
        target.style.border = "3px solid #333";
        target.style.borderRadius = "50%";
    }
    const colors=["#EBE05D", "#4DE291", "#E2613D", "#FB90D2"]
    return(
        <div className="modal-wrapper">
            <div className="modal" id="modal">
                <div className="modal-header">
                    <h3>Enter your username</h3>
                </div>
                <div className="modal-body">
                    <form>
                        <input onChange={event => setUsername(event.target.value)}/>
                        <div className="color-palette">
                            {
                                colors.map(color => (
                                    <button className="color-palette-item" onClick={e=> {e.preventDefault(); setColor(color); putHighlight(e.target)}} style={{backgroundColor: color}}> </button>
                                ))
                            }
                        </div>
                        <button onClick={clickHandler} type="submit">Join Room</button> 
                    </form>
                </div>
            </div>
        </div>
    )

}



export default Modal;
