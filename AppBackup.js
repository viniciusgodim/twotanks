import './App.css';
import {useState,useEffect} from 'react';
import Slider from '@material-ui/core/Slider';
import DiscreteSlider from './components/DiscreteSlider'
import useInterval from './components/UseInterval'
import W from 'lambert-w-function'

function Tank({left,top,diameter,height}) {
  return (
    <>
    <div className="verticalLine"
      style={{left:left,top:top,height:height}}/>
    <div className="verticalLine"
      style={{left:`calc(${left} + ${diameter})`,top:top,height:height}}/>
    <div className="horizontalLine"
      style={{left:left,width:diameter,top:`calc(${top} + ${height})`}} />
    </>
  )
}

function Layout({leftA,topA,diameterA,heightA,heightDiff,length,diameterB,heightB,liquidHeightA}){
  function Exit(){
    return(
      <div className="verticalLine"
      style={{left:`calc(${leftA} + ${diameterA}/2)`,
              top:`calc(${topA} + ${heightA})`,
              height:`calc((${heightDiff}/2`}}
      />
    )
  }

  function Transmission(){
    return(
      <div className="horizontalLine"
      style={{left:`calc(${leftA} + ${diameterA}/2)`,
              top:`calc(${topA} + ${heightA} + ${heightDiff}/2)`,
              width: `calc(${length} - ${heightDiff})`}}
      />
    )
  }

  function Input(){
    return(
      <div className="verticalLine"
      style={{left:`calc(${leftA} + ${diameterA}/2 + ${length} - ${heightDiff})`,
              top:`calc(${topA} + ${heightA} + ${heightDiff}/2)`,
              height:`calc(${heightDiff}/2)`}}
      />
    )
  }

  function DrainingLiquid(){
    return(
      <div className="liquid"
      style={{left:leftA,
              top:`calc(${topA} + ${heightA} - ${liquidHeightA})`,
              height:liquidHeightA,
              width:diameterA
            }}
      />
    )
  }

  return(
    <>
    <Tank left={leftA} top={topA} diameter={diameterA} height={heightA}/>
    <Exit/>
    <Transmission/>
    <Input/>
    <Tank left={`calc(${leftA} + ${diameterA}/2 + ${length} - ${heightDiff} - ${diameterB}/2)`}
          top={`calc(${topA} + ${heightA} + ${heightDiff})`}
          diameter={diameterB}
          height={heightB}
    />
    <DrainingLiquid/>
    </>
  )
}

function App() {
  const pxToMeter = 1/100
  let [diameter,setDiameter] = useState(200);
  let [length,setLength] = useState(750);
  let [liquidHeight,setLiquidHeight] = useState(150);
  let [heightDiff,setHeightDiff] = useState(50);
  let [pipeDiameter,setPipeDiameter] = useState(2);
  let [velocity,setVelocity] = useState(2);
  const viscosity = 1e-3;
  const density = 1e3;
  const gravity = 9.8;
  const dt = 0.1;
  let pipeDiameterMeters = pipeDiameter*pxToMeter;
  let diameterMeters = diameter*pxToMeter;
  let [liquidHeightMeters,setLiquidHeightMeters] = useState(liquidHeight*pxToMeter);
  let heightDiffMeters = heightDiff*pxToMeter;
  let lengthMeters = length*pxToMeter;
  let velocityNew = velocity;
  let [count,setCount] = useState(0);
  let [velocityCount,setVelocityCount] = useState(0);
  
  useEffect(() => {
    let reynolds = velocity*density*pipeDiameterMeters/viscosity
    let frictionFactor = 1/((-2*Math.log10(10^(-1/Math.log(10)*W(reynolds*Math.log(10)/5.02))))**2)
    //let frictionFactor = 64/reynolds
    let headLoss = frictionFactor*velocity^2/(2*gravity)*lengthMeters/pipeDiameterMeters
    let velocityNew = Math.sqrt(2*gravity*(headLoss-liquidHeightMeters-heightDiffMeters)/((pipeDiameterMeters/diameterMeters)^2-1))
    let dv = velocityNew - velocity;
    if (Math.abs(dv) < 0.01){
      setVelocity(velocityNew)
      return;
    } else{
      setVelocityCount(velocityCount + 1);
    }
  }, [velocityCount]);

  useEffect(() => {
    setLiquidHeightMeters(liquidHeightMeters - velocity*(pipeDiameter/diameter)^2*dt);
    setLiquidHeight(liquidHeightMeters/pxToMeter)
  }, [count]);

  useInterval(() => {
    setCount(count+1)
  }, 1000);
  return (
    <>
    <DiscreteSlider setSize={setDiameter} size={diameter} defaultValue="200" text="Draining tak diameter"/>
    <DiscreteSlider setSize={setLength} size={length} defaultValue="750" text="Pipe length"/>
    <DiscreteSlider setSize={setHeightDiff} size={heightDiff} defaultValue="50" text="Height difference"/>
    <DiscreteSlider setSize={setPipeDiameter} size={pipeDiameter} defaultValue="2" text="Pipe diameter"/>


    <Layout leftA="350px" topA="100px"
            diameterA={diameter+"px"} heightA="250px"
            heightDiff={heightDiff+"px"} length={length+"px"}
            diameterB="200px" heightB="200px"
            liquidHeightA={liquidHeight+"px"}
            />
    </>
  );
};

export default App;
