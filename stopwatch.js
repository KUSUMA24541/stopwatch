function sw(){
    let hrs = 0;
    let min = 0;
    let sec = 0

    sec++;
    if(sec==60){
        min++;
        sec=0;
        if(min==60){
            hrs++;
            min=0;
        }
    }
    document.getElementById("time")=`${hrs}:${min}:${sec}`

    {
        let sample = setInterval(time,1000)
    }
    function stop(){
        clearInterval(sample)
    }
    
}