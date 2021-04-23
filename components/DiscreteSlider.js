import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


export default function DiscreteSlider({setSize,size,defaultValue,text,max,min,step}) {
  const classes = useStyles();
  function valuetext(size) {
    return setSize(size);
  }
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        {text}
      </Typography>
      <Slider
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={parseFloat(step)}
        marks
        min={parseFloat(min)}
        max={parseFloat(max)}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
