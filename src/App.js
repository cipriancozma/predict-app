import "./App.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import InputForm from "./components/InputForm";
import Rank from "./components/Rank";
import Particles from "react-particles-js";
import { useState } from "react";
import Clarifai from "clarifai";
import PredictComponent from "./components/PredictComponent";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const particles = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
    },
  },
};

const app = new Clarifai.App({
  apiKey: "c60c9270852d444e91b76a1aca825867",
});

function App() {
  const [inputChange, setInputChange] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [food, setFood] = useState([]);
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onInputChange = (e) => {
    setInputChange(e.target.value);
  };

  const onPredictBtn = () => {
    setImgUrl(inputChange);
    app.models
      .predict(Clarifai.FOOD_MODEL, inputChange)
      .then((response) => {
        // console.log(response.outputs[0].data.concepts)
        const data = response.outputs[0].data.concepts;
        setFood(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onRouteChange = (route) => {
    if(route === "signout") {
      setIsSignedIn(false);
    } else if(route === "homepage") {
      setIsSignedIn(true);
    }
    setRoute(route);
  }


  return (
    <div className="App">
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>
      <Particles className="particles" params={particles} />
      {route === "homepage" ? 
        <>
          <Logo />
          <Rank food={food} />
          <InputForm
            onInputChange={onInputChange}
            onPredictBtn={onPredictBtn}
          />
          <PredictComponent imgUrl={imgUrl} food={food} />
      </>
       
       : (
       route === "signup" ?
       <SignUp onRouteChange={onRouteChange} /> 
        : 
        <SignIn onRouteChange={onRouteChange}/>
       )
      }
    </div>
  );
}

export default App;
