export default function totalPhoneBill(alert, call, sms) {
 
    //var call = 2.75
  var alerted = alert.split(',');
  //var sms = 0.65
  let totalCost = 0;
//   console.log(alert.split(','))
  for (var i = 0; i < alerted.length; i++) {
    
    //var item = alerted[i];
    if (alerted[i].startsWith('sms')) {
      totalCost += sms
    } else if (alerted[i].startsWith('call')){
      totalCost += call
    }
    //console.log(alerted)
    
    //counter++
  }
  console.log("R" + totalCost.toFixed(2))
  return "R" + totalCost.toFixed(2)
}
