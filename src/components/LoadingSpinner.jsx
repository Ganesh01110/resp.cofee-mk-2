const LoadingSpinner =()=>{
    return(
    <div className="spinner">

    <h1>Laoading</h1>
    <div >
            <div className="spinner-border text-primary" style={{width: "3rem" , height: "3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
        </div >
        <div className="spinner-border text-secondary"  style={{width: "3rem" , height: "3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-success" style={{width: "3rem" , height: "3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-border text-danger" style={{width: "3rem" , height: "3rem"}} role="status">
        <span className="visually-hidden">Loading...</span>
        </div>

    </div>
        
</div>
        
    );
}

export default LoadingSpinner;