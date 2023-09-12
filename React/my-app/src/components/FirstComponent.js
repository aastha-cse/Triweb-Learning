
function FirstComponent(props){
    return <div className="modal">
        <h1>{props.owner} application</h1>
        <p>App for {props.reason}</p>
        <button onClick={props.closeModal}>close</button>
    </div>
}

export default FirstComponent;