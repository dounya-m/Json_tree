var jsonFormat = document.getElementById('jsonFormat')
var NotjsonFormat = document.getElementById('notJsonFormat')


  document.getElementById('data_input').addEventListener('keyup',postData)




function postData(){
  JSONString = document.getElementById('data_input').value

  try {
    var jsonObj = JSON.parse(JSONString)

    jsonFormat.style.display = "block"
    NotjsonFormat.style.display = "none"

    Object.values(jsonObj).forEach(function(value) {
      var keyOutput = document.getElementById('keyOutput')
      var valueOutput = document.getElementById('valueOutput')
      var kleng = ""
      var vleng = ""
      var arraylength = Object.keys(jsonObj)
      var pkey = Object.keys(jsonObj)
      var pval = Object.values(jsonObj)

      if(typeof(value) !== Object || value === null){
        for (let i = 0; i < pval.length; i++) {
          kleng += pkey[i] + " :" + "</br>"
          vleng += pval[i] + "," + "</br>"
        }
        valueOutput.innerHTML = vleng
        keyOutput.innerHTML = kleng
      }h
    });
    
  } catch (error) {
    console.log('not JSON');
    jsonFormat.style.display = "none"
    NotjsonFormat.style.display = "block"
    return;
  }  
  // console.log(JSONString)
  // localStorage.setItem('JSONFile', JSONString)


  
}

