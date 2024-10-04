import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [height , setHeight] = useState("")
  const [weight , setWeight]= useState("")
  const [bmi, setBmi] = useState(0)
  const [isHeight ,setIsHeight] = useState(true)
  const [isWeight,setisWeight] = useState(true)

  const Validate = (e)=>{
    console.log(e.target.name);
    
    console.log(e.target.value);

    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='height'){
        setHeight(e.target.value)
        setIsHeight(true)
      }
        else if( e.target.name=='weight'){
          setWeight(e.target.value)
          setisWeight(true)
      }
    }
    else{
        if(e.target.name=='height'){
          setHeight(e.target.value)
          setIsHeight(false)
        }
        else if( e.target.name=='weight'){
          setWeight(e.target.value)
          setisWeight(false)
        }
      
    }
    
    
  }

  const handleReset = ()=>{
    setHeight("")
    setWeight("")
    setIsHeight(true)
    setisWeight(true)
  }

  const handleCalculate = ()=>{
    setBmi(weight/(height*height)*703)
  }



  return (
    <>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
      <div className='bg bg-dark border border-shadow rounded mt-2'>
        <h1 className='text-center mt-3 '>BMI CALCULATOR</h1>
        <p className='text-center'> Calculate Your <span className='text-info'>Body Mass Index</span> <span className='text-primary'>(BMI)</span></p>
        <div className='d-flex align-items-center justify-content-center'>
          <img className='mt-1' src="./media/male-female.png" alt="no image" width={'80px'} height={'80px'}/>
        </div>
<div className='d-flex align-items-center justify-content-center mt-2'>
          <div className='bg bg-primary w-50 rounded '>
            <h5 className='text-center mt-2'>Metric Measure</h5>
          </div>
</div>
          <div className='d-flex justify-content-between mt-2 me-3 ms-3'>
            <div>
            <h6 className='mt-2 ms-md-1 '>Height(CM) : </h6>
            </div>
            <div className=''>
  <TextField className='ms-2 me-2 ' name='height' id="standard-basic" value={height} label="Height" variant="standard" onChange={(e)=>Validate(e)} />
  {!isHeight &&<span id='ip' className='text-danger'>*invalid input</span>}
            </div>
          </div>

          <div className='d-flex justify-content-between mt-2 me-3 ms-3'>
            <div>
            <h6 className='mt-2 ms-md-1'>Weight(KG)</h6>
            </div>
            <div className=''>
  <TextField className='ms-2 me-2' name='weight' id="standard-basic"  value={weight} label="Weight" variant="standard" onChange={(e)=>Validate(e)} />
  {!isWeight &&<span className='text-danger'>*invalid input</span>}
            </div>
          </div>
          <div className='mb-3 d-flex justify-content-between mt-3'>
        <Button onClick={handleReset} className='ms-2 rounded' style={{height:'50px', width:'170px'}} variant="contained" color='info'>RESET</Button>
        <Button onClick={handleCalculate} className='me-2 rounded' style={{height:'50px', width:'170px'}} variant="contained" color='success' disabled={isHeight && isWeight ? false:true}>CALCULATE</Button>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
        <img src="./media/bmi.png" alt="no image" height={'50px'}  width={'50px'}/>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
        <p className='mt-1'>Your <span className='text-primary'>BMI</span> is</p>
        </div>
        <div className='d-flex align-items-center justify-content-center mb-3'>
        <h3 id='out'>{bmi}</h3>
        </div>
        </div>
    
      </div>
      <div className="col-md-4"></div>
    </div>
        


      
    </>
  )
}

export default App
