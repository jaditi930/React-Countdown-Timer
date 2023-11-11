import {useState} from 'react'

export default function Timer(){
    let padding={padding:"40px 45px",fontSize:"3rem",width:"100px"}
    let margin={margin:"40px 35px",padding:"10px"}
    let container={minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}

    const [seconds,setSecs]=useState("00");
    const [minutes,setMins]=useState("00");
    const [hours,setHours]=useState("00");

    const [isStarted,setStarted]=useState(false);
    const [timer_id,setId]=useState("")

    function update_timer(){
        console.log("working")
        let secs=parseInt(seconds);
        let hrs=parseInt(hours);
        let mins=parseInt(minutes);

        if(secs==1 && mins==0 && hrs==0){
            setSecs(0);
            clearInterval(timer_id);
            setStarted(false);
            return;
        }

        if(secs>0){
            setSecs(secs-1);
            return;
        }
        else if(mins>0){
            setMins(mins-1)
            setSecs(59);
            return;
        }
        else{
            setHours(hrs-1);
            setMins(59);
            setSecs(59);
            return;
        }
    }

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
                <button style={margin} disabled={isStarted}
                onClick={()=>{
                    setStarted(true);
                    // let total_seconds=seconds+minutes*60+hours*60*60;
                    // for(let i=1;i<=total_seconds;i++)
                    let timer_id=setInterval(update_timer,1000);
                    setId(timer_id);
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