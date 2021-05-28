import './PredictComponent.css';


const PredictComponent = ({imgUrl}) => {
    return (
        imgUrl &&
        <div>
           <img src={imgUrl} alt="food" />
        </div> 
    )
}


export default PredictComponent;