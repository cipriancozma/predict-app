import './PredictComponent.css';


const PredictComponent = ({imgUrl}) => {
    return (
        imgUrl &&
        <div className="image">
           <img src={imgUrl} alt="food" width="500px" height="auto" />
        </div> 
    )
}


export default PredictComponent;