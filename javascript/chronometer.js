class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    this.intervalID= setInterval(() =>{
      this.currentTime += 1
      //callback()
  },1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60) 
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }
  twoDigitsNumber(number) {
    let emptyMinutes=""

    if(number<10){
      emptyMinutes+=0
    }  
      return emptyMinutes + number
    }
    
  stopClick() {
    clearInterval(this.intervalID)
  }
  resetClick() {
   this.currentTime=0
  }
  splitClick() {
    let minutes= this.twoDigitsNumber(this.getMinutes())
    let seconds= this.twoDigitsNumber(this. getSeconds())
    return `${minutes}:${seconds}`
  }
}
