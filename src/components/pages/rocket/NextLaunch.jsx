import React, {useState} from "react";

function NextLaunch(props){
    var ok=false;
    const [time, setTime]=useState('00 : 00 : 00 : 00');

    function dhm(ms){
        const days = Math.floor(ms / (24*60*60*1000));
        const daysms = ms % (24*60*60*1000);
        const hours = Math.floor(daysms / (60*60*1000));
        const hoursms = ms % (60*60*1000);
        const minutes = Math.floor(hoursms / (60*1000));
        const minutesms = ms % (60*1000);
        const sec = Math.floor(minutesms / 1000);
        const pad = function(n){ return n < 10 ? '0' + n : n; };
        return [pad(days), pad(hours), pad(minutes), pad(sec)].join(' : ');
    }

    function callMe(next){
        ok=true;
        /*var Image;
        next.image ? Image=next.image : Image=null;*/

        setInterval(updateTime, 1000);

        function updateTime(){
            const newTime=new Date().getTime();
            const event=new Date(next.window_start).getTime();
            const time=event-newTime;
            const get=dhm(time);
            setTime(get);
        }
        /*backgroundImage: Image!==null ? `url(${Image})` : null*/
        return(
            <div style={{ textAlign: "center" }}>
                <h1>Next Launch: </h1><h1 style={{color: 'blue'}}>{next.mission ? next.mission.name : next.name}</h1>
                <div style={{border: '1px solid rgba(255, 255, 255, 0.5)'}}>
                <h1 style={{marginTop: '20px'}}>T - {time}</h1>
                <p style={{fontWeight: 'normal'}}>Days  :  Hours : Minutes : Seconds</p>
                </div>
            </div>
        );
    }

    return (
        props.tweets.map((value)=>{
            return (
                value.status.id!==3 & !ok ? 
                callMe(value)
                 : null
            );
        })
    );
}

export default NextLaunch;