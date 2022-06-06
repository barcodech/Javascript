document.getElementById("myLabel").innerHTML = myLabel;

update();

setInterval(update,1000);

function update(){

    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        hours = formatZero(hours);
        minutes = formatZero(minutes);
        seconds = formatZero(seconds);

        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    function formatZero(time){
      time = time.toString();
      return time.length < 2 ? "0" + time : time;
    }
    
}