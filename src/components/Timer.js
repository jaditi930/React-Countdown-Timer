export default function Timer(){
    let padding={padding:"40px 45px",fontSize:"3rem"}
    let margin={margin:"40px 20px",padding:"10px",borderRadius:"30px"}
    let container={minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}
    return (
        
        <div style={container}>
            <div>

            <div style={{marginLeft:"15px"}}>
                <span style={padding}>00</span>
                <span style={padding}>:</span>
                <span style={padding}>00</span>
                <span style={padding}>:</span>
                <span style={padding}>00</span>
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