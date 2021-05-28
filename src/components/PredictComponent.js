import './PredictComponent.css';
import './Scroll';
import ScrollComp from './Scroll';


const PredictComponent = ({imgUrl, food }) => {
    const foodData = food.map((el, key) => {
        return (
            <p className="food" key={el.name}>{el.name}</p>
        )
    })
    return (
        imgUrl &&
        <div className="elements">
        <div className="image">
           <img src={imgUrl} alt="food" className="picFood" />
        </div>
        <div className="foodElements">
        {foodData &&
        <ScrollComp>
            {foodData}
       </ScrollComp>
        }
       </div>
       </div>
    )
}


export default PredictComponent;