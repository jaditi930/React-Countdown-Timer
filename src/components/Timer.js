import {useState} from 'react'

export default function Timer(){
    let padding={padding:"40px 45px",fontSize:"3rem",width:"100px"}
    let margin={margin:"40px 35px",padding:"10px"}
    let container={minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}

    const [seconds,setSecs]=useState("00");
    const [minutes,setMins]=useState("00");
    const [hours,setHours]=useState("00");


    return (
        
        <div style={container}>
            <div>

            <div style={{marginLeft:"15px"}}>
                <input type="number" style={padding} value={hours} min={0} max={23} 
                onChange={(e)=>{
                    let hrs=parseInt(e.target.value)
                    if(hrs<10)
                    hrs="0"+hrs
                    setHours(hrs)
                }}/>
                <span style={padding}>:</span>
                <input type="number" style={padding} value={minutes} min={0} max={59} 
                onChange={(e)=>{
                let mins=parseInt(e.target.value)
                if(mins<10)
                mins="0"+mins
                setMins(mins)
                }}
                />
                <span style={padding}>:</span>
                <input type="number" style={padding} value={seconds} min={0} max={59} 
                onChange={(e)=>{
                let secs=parseInt(e.target.value)
                if(secs<10)
                secs="0"+secs
                setSecs(secs)
                }}/>
            </div>

            <div>
                <button style={margin}>Start Timer</button>
                <button style={margin}>Stop Timer</button>
                <button style={margin}>Reset Timer</button>
            </div>
        </div>
        </div>
    )
}