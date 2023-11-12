import {useEffect, useState} from 'react'

export default function Timer(){

    let padding={padding:"40px 45px",fontSize:"3rem",width:"100px"}
    let margin={margin:"40px 35px",padding:"10px"}
    let container={minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}

    const [seconds,setSecs]=useState(0);
    const [minutes,setMins]=useState(0);
    const [hours,setHours]=useState(0);

    const [isStarted,setStarted]=useState(false);
    const [timer_id,setId]=useState("")

    useEffect(()=>{
        console.log(seconds)
        if(isStarted){
            let timerid=setTimeout(()=>{
                update_timer()
            },1000);
            setId(timerid);
        }
        return clearInterval(timer_id)
    },[isStarted,seconds,minutes,hours])

    function update_timer(){

        if(seconds==0 && minutes==0 && hours==0){
            setStarted(false);
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
                    // let hrs=parseInt(e.target.value)
                    // if(hrs<10)
                    // hrs="0"+hrs
                    setHours(e.target.value)
                }}/>
                <span style={padding}>:</span>
                <input type="number" style={padding} value={minutes>9?minutes:minutes} min={0} max={59} 
                onChange={(e)=>{
                // let mins=parseInt(e.target.value)
                // if(mins<10)
                // mins="0"+mins
                setMins(e.target.value)
                }}
                />
                <span style={padding}>:</span>
                <input type="number" style={padding} value={seconds>9?seconds:seconds} min={0} max={59} 
                onChange={(e)=>{
                // let secs=parseInt(e.target.value)
                // if(secs<10)
                // secs="0"+secs
                setSecs(e.target.value)
                }}/>
            </div>

            <div>
                <button style={margin} 
                disabled={isStarted}
                onClick={()=>{
                    setStarted(true);
                }}
                >Start Timer
                </button>

                <button style={margin} onClick={()=>{
                    clearInterval(timer_id);
                    setId("")
                    setStarted(false);
                }}
                >Stop Timer
                </button>

                <button style={margin} onClick={()=>{

                    if(isStarted === true){
                    clearInterval(timer_id);
                    setId("")
                    setStarted(false);
                    }

                    setHours("00")
                    setMins("00")
                    setSecs("00")
                }}
                >Reset Timer
                </button>
            </div>
        </div>
        </div>
    )
}