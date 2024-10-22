const varObj ={
  tip:0
}

window.onload =()=>{
   document.querySelector("#skicka").onclick = calculateTip;
 

const tips=(document.querySelectorAll('.tip'));

tips.forEach(tip =>{
    tip.addEventListener('click' , handleTipClick);
  }
)
}
function handleTipClick(e){
  
 varObj.tip = Number(e.target.textContent.split('%')[0]);

}

  function calculateTip(){
    const amount = Number(document.querySelector('#amount').value);
    const people = Number(document.querySelector('#people').value);
     console.log( amount);
    
    if(!amount && !people){
      alert("please enter value");
      return;
    }

  const tip = (amount * varObj.tip) / 100;
  const billPerPerson =(amount + tip) / people;
  const total =amount+tip

    document.querySelector('#tipamount').innerText = tip;
    document.querySelector('#totalamount').innerText = billPerPerson;
    document.querySelector('#a').innerText = amount;
    document.querySelector('#t').innerText = total;

  }

  






















function myFunction() {
    document.getElementById("myForm").reset();
    document.getElementById("a").innerText='0';
    document.getElementById("t").innerText='0';
    document.getElementById("totalamount").innerText='0';
    document.getElementById("tipamount").innerText='0';
    let d = document, [inputs, knapp] = [
      d.querySelectorAll('[type="number"]'),
      d.querySelector('#skicka')]
      
      
  knapp.disabled = true
  
  for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input',() => {
      let values = []
      inputs.forEach(v => values.push(v.value))
      knapp.disabled = values.includes('')
    })
  }
  }

  let d = document, [inputs, knapp] = [
    d.querySelectorAll('[type="number"]'),
    d.querySelector('#skicka')]
    
    
knapp.disabled = true

for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input',() => {
    let values = []
    inputs.forEach(v => values.push(v.value))
    knapp.disabled = values.includes('')
  })
}

