import Tilt from "react-tilt";
import artificialIntel from './AI.png';

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 60, transition: true }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner"> <img src={artificialIntel} alt="artificial intelligence" style={{zIndex: "1"}}/> </div>
      </Tilt>
    </div>
  );
};

export default Logo;
