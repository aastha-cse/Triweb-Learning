function FirstComponent(props){
    return <div >
        <h1>{props.owner} application</h1>
        <p>App for {props.reason}</p>
    </div>
}

export default FirstComponent;