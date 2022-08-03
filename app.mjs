function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!

    const input = document.querySelector('.doc');
  const container = document.querySelector('.contain')
  const box = document.querySelector('.append')
  
    const networks = {
      mtn: [ 702,703,704, 706,803,806,810,813,814,816,903,906],
      airtel: [701,708,802,808,812,902,907,901,912],
      glo: [705,805,807,811,815,905],
      '9mobile': [809,817,818,908,909]
    }
  
    let activeNetwork = ''


  function check(e) {
    const stringify = `${e.target.value}`
        console.log(stringify)
    if(activeNetwork != ''){
      activeNetwork = ''
      console.log('new', activeNetwork)
      let select = document.querySelector('.checked')
      let selectImg = document.querySelector('.network')
      if(selectImg) box.removeChild(selectImg)
      if(select) container.removeChild(select)
    }
    
    if(stringify.length >= 3){
      for(const prop in networks){
        let half = Math.floor(networks[prop].length/2)
        for(let i = 0, j=networks[prop].length - 1; i < half, j >= half; i++, j--){

        const number1 = networks[prop][i]
        const number2 = networks[prop][j]
          console.log(`number ${prop}:${number1},${number2}`)
          if(e.target.value.startsWith(number1)){
            activeNetwork = prop;
          }
          if(e.target.value.startsWith(number2)){
            activeNetwork = prop;
          }
        }
      }
        if(activeNetwork == ''){
          activeNetwork = 'Please enter a valid number'
        }
      console.log(activeNetwork)
      addChild(activeNetwork)
    }

    
  }

  
  function addChild(activeNetwork){
    if(activeNetwork.length > 8){
        const newElement = document.createElement('div')
        newElement.classList.add('checked')
        newElement.innerHTML = `${activeNetwork}`
        container.append(newElement)
      }else{
          const img = document.createElement('img')
          img.classList.add('network')
          img.src = `./public/${activeNetwork}.svg`
          console.log(box)
          box.appendChild(img)
      }
  }
  
  function throttle (callback, limit) {
  var wait = false;
  return function (e) {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  }
}


    input.addEventListener('change', throttle(check,2000))
    
  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //