import {useEffect, useRef, useState} from 'react'

export default function Timer(){

    let padding={padding:"40px 45px",fontSize:"3rem",width:"100px"}
    let margin={margin:"40px 35px",padding:"10px"}
    let container={minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}

    const [seconds,setSecs]=useState(0);
    const [minutes,setMins]=useState(0);
    const [hours,setHours]=useState(0);

    const [isStarted,setStarted]=useState(false);
    const [timer_id,setId]=useState("")

    const secRef=useRef(seconds)
    const minRef=useRef(minutes)
    const hoursRef=useRef(hours)



    useEffect(()=>{
        secRef.current=seconds
        minRef.current=minutes
        hoursRef.current=hours
        // console.log(seconds)
        // if(isStarted){
        //     let timerid=setTimeout(()=>{
        //         update_timer()
        //     },1000);
        //     setId(timerid);
        // }
        // else{
        //     setId("")
        // }
        // return clearInterval(timer_id)

    },[hours,minutes,seconds])

    function update_timer(){

        let seconds=secRef.current
        let minutes=minRef.current
        let hours=hoursRef.current

        if(seconds==0 && minutes==0 && hours==0){
            setStarted(false);
            clearInterval(timer_id)
            setId("")
        }

        else if(seconds>0){
            setSecs((prev)=>prev-1)
        }
        else if(minutes>0){
            setMins((prev)=>prev-1)
            setSecs(59);
        }
        else{
            setHours((prev)=>prev-1);
            setMins(59);
            setSecs(59);
        }
    }

    return (
        
        <div style={container}>
            <div>

            <div style={{marginLeft:"15px"}}>
                <input type="number" style={padding} value={hours>9 ?hours :hours} min={0} max={23} 
                onChange={(e)=>{
                    setHours(e.target.value)
                }}/>
                <span style={padding}>:</span>
                <input type="number" style={padding} value={minutes>9?minutes:minutes} min={0} max={59} 
                onChange={(e)=>{
                setMins(e.target.value)
                }}
                />
                <span style={padding}>:</span>
                <input type="number" style={padding} value={seconds>9?seconds:seconds} min={0} max={59} 
                onChange={(e)=>{
                setSecs(e.target.value)
                }}/>
            </div>

            <div>
                <button style={margin} 
                disabled={isStarted}
                onClick={()=>{
                    setStarted(true);
                    let timer_id=setInterval(update_timer,1000)
                    setId(timer_id)
                }}
                >Start Timer
                </button>

                <button style={margin} onClick={()=>{
                    setStarted(false);
                    clearInterval(timer_id)
                    setId("")
                }}
                >Stop Timer
                </button>

                <button style={margin} onClick={()=>{

                    if(isStarted === true){
                    setStarted(false);
                    }

                    clearInterval(timer_id)
                    setId("")

                    setHours(0)
                    setMins(0)
                    setSecs(0)
                }}
                >Reset Timer
                </button>
            </div>
        </div>
        </div>
    )
}