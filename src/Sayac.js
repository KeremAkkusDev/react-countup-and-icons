import React from 'react'
import CountUp, {useCountUp} from 'react-countup'
function Sayac() {
    const countUpRef = React.useRef();
    const {start, pauseResume, reset, update} = useCountUp({
        ref:countUpRef,
        start:0,
        end:100,
        duration:5
    })
  return (
    <div className='sayac'>
        <div className="boxes">
            <div className="box">{<CountUp end={100} duration={5} delay={2}/>}</div>
            <div className="box" ref={countUpRef}>0</div>
            <div className="box">{<CountUp end={500} duration={10} suffix=" TL"/>}</div>
        </div>
        <div className="buttons">
            <button onClick={start}>Start</button>
            <button onClick={pauseResume}>Pause&Resume</button>
            <button onClick={reset}>Reset</button>
            <button onClick={()=>update(500)}>Update</button>
        </div>
    </div>
  )
}

export default Sayac