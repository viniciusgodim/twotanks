import './App.css';
import {useState,useEffect,useRef} from 'react';
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

function Layout({leftA,topA,diameterA,heightA,heightDiff,length,diameterB,heightB,liquidHeightA,liquidHeightB}){
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

  function FillingLiquid(){
    return(
      <div className="liquid"
      style={{left:`calc(${leftA} + ${diameterA}/2 + ${length} - ${heightDiff} - ${diameterB}/2)`,
              top:`calc(-${liquidHeightB} + ${heightB} + ${topA} +  ${heightA} + ${heightDiff})`,
              height:liquidHeightB,
              width:diameterB
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
    <FillingLiquid/>
    </>
  )
}

function App() {
  let [diameterA,setDiameterA] = useState(200);
  let [diameterB,setDiameterB] = useState(200);
  let [length,setLength] = useState(750);
  let [liquidHeightA,setLiquidHeightA] = useState(150);
  let [liquidHeightB,setLiquidHeightB] = useState(0);
  let [heightDiff,setHeightDiff] = useState(50);
  let [pipeDiameter,setPipeDiameter] = useState(1.5);
  const pxToMeter = 1/100
  const viscosity = 1e-3;
  const density = 1e3;
  const gravity = 9.8;
  const dt = 10;
  let pipeDiameterMeters = pipeDiameter*pxToMeter;
  let diameterAMeters = diameterA*pxToMeter;
  let diameterBMeters = diameterB*pxToMeter;
  let liquidHeightAMeters = liquidHeightA*pxToMeter;
  let liquidHeightBMeters = liquidHeightB*pxToMeter;
  let heightDiffMeters = heightDiff*pxToMeter;
  let lengthMeters = length*pxToMeter
  let velocity = 1;
  let velocityNew = 2;
  let dv = 1;

  useInterval(() => {
    while(Math.abs(dv) > 0.001){
      let reynolds = velocity*density*pipeDiameterMeters/viscosity
      let frictionFactor
      if (reynolds < 2100) {
        frictionFactor = 64/reynolds
      } else {
        frictionFactor = 1/((-2*Math.log10(10^(-1/Math.log(10)*W(reynolds*Math.log(10)/5.02))))**2)
      }
      let headLoss = frictionFactor*velocity^2/(2*gravity)*lengthMeters/pipeDiameterMeters
      velocityNew = Math.sqrt(2*gravity*(headLoss-liquidHeightAMeters-heightDiffMeters)/((pipeDiameterMeters/diameterAMeters)^2-1))
      dv = velocity - velocityNew;
      velocity = velocityNew
    }
    let dh = dt*velocity*(pipeDiameterMeters/diameterAMeters)**2
    liquidHeightAMeters -= dh;
    liquidHeightBMeters += dh;
    setLiquidHeightA(liquidHeightAMeters/pxToMeter);
    setLiquidHeightB(liquidHeightBMeters/pxToMeter);
  }, 1000);

  return (
    <>
    <DiscreteSlider setSize={setDiameterA} size={diameterA} defaultValue="200" text="Draining tak diameter" min="50" max="500" step="10"/>
    <DiscreteSlider setSize={setDiameterB} size={diameterB} defaultValue="200" text="Filling tak diameter" min="50" max="500" step="10"/>
    <DiscreteSlider setSize={setLength} size={length} defaultValue="500" text="Pipe length" min="50" max="750" step="10"/>
    <DiscreteSlider setSize={setHeightDiff} size={heightDiff} defaultValue="50" text="Height difference" min="0" max="500" step="10"/>
    <DiscreteSlider setSize={setPipeDiameter} size={pipeDiameter} defaultValue="1.5" text="Pipe diameter" min="0.1" max="5" step="0.1"/>


    <Layout leftA="350px" topA="100px"
            diameterA={diameterA+"px"} heightA="250px"
            diameterB={diameterB+"px"} heightB="200px"
            heightDiff={heightDiff+"px"} length={length+"px"}
            liquidHeightA={liquidHeightA+"px"}
            liquidHeightB={liquidHeightB+"px"}
            />
    </>
  );
};

export default App;
