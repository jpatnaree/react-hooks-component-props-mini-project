

function Timer({minutes}){
    let emoji = Math.round(minutes/5)
    console.log(emoji)
    if(emoji <= 5) {
        return "☕️".repeat(emoji)
    } else{
        return "🍱".repeat(emoji/2)
    }
    
}

export default Timer