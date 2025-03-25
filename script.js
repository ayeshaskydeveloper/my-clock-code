function updateClock() {
    let now = new Date()
    
    let timeOptions = { 
        timeZone: 'Asia/Karachi', 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    }
    let dateOptions = {
        timeZone: 'Asia/Karachi',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    
    let time = new Intl.DateTimeFormat('en-US', timeOptions).format(now);
    let date = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
    
    document.getElementById('clock').textContent = time;
    document.getElementById('date').textContent = date;
}

setInterval(updateClock, 1000);
updateClock();