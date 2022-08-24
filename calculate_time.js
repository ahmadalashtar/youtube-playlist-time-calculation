function calculate_time(){
  let playlist = document.getElementsByClassName("playlist-items")
  let arr = new Array()
  for (let i = 1 ; i < playlist[1].getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer").length ;i+=2 ){
    
    arr.push(playlist[1].getElementsByClassName("style-scope ytd-thumbnail-overlay-time-status-renderer")[i]);
  }
  let myInner = new Array()
  for (let i = 0 ; i < arr.length ; i++){
    myInner.push(arr[i].innerText)
  }
  let mySplit = new Array()

  let hoursCount = 0

  let minutesCount = 0

  let secondsCount = 0

  for (let i = 0 ; i < myInner.length; i++){
    mySplit = myInner[i].split(":")
    if (mySplit.length==3){
      hoursCount += parseInt(mySplit[0]);
      minutesCount += parseInt(mySplit[1]);
      secondsCount += parseInt(mySplit[2]);
    }
    else{
      minutesCount += parseInt(mySplit[0]);
      secondsCount += parseInt(mySplit[1]);
    }
  }
  minutesCount+= Math.floor(secondsCount/60)
  secondsCount= secondsCount%60
  hoursCount += Math.floor(minutesCount/60)
  minutesCount = minutesCount % 60
  var time = hoursCount+":"+minutesCount+":"+secondsCount
  return time

  }
console.log(calculate_time())
