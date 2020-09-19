const entrees = {
  stk: {
    name: " Steak",
    cost: 20.00
  },

  fsh: {
    name: " Salmon",
    cost: 15.00
  },

  ckn: {
    name: " Chicken",
    cost: 10.00
  }
}

const sides = {
  mshpot: {
    name: " Mashed Potatoes",
    cost: 2.75
  },

  sld: {
    name: " Salad",
    cost: 2.75
  },

  stmveg: {
    name: " Steamed vegtables",
    cost: 2.75
  }
}


const welcome = () => {
  alert(`Welcome to Our Diner! Take a look at our menu! Every entree is served with two sides.stea`)
  alert(`
    Menu     
    Entrees               $${entrees.stk.cost}:${entrees.stk.name}
                          $${entrees.fsh.cost}:${entrees.fsh.name}
                          $${entrees.ckn.cost}:${entrees.ckn.name}

    Sides                 $${sides.mshpot.cost}: ${sides.mshpot.name}
                          $${sides.sld.cost}: ${sides.sld.name}
                          $${sides.stmveg.cost}: ${sides.stmveg.name}
  `);
}


const order = () => {
orderEntree();
orderSides();
confirmOrder();
}

const orderEntree = () => {
entree = prompt(`What would you like for your Entree?

  $${entrees.stk.cost}:${entrees.stk.name}
  $${entrees.fsh.cost}:${entrees.fsh.name}
  $${entrees.ckn.cost}:${entrees.ckn.name}
`).toUpperCase();
  if(entree == "STEAK") {
  let confirmEntree = prompt(`The${entrees.stk.name} will be $${entrees.stk.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmEntree == "YES") {alert(`Great choice! That's my personal favorite!`);}
  else{orderEntree();}
}
else if(entree == "SALMON") {
  let confirmEntree = prompt(`The${entrees.fsh.name} will be $${entrees.fsh.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmEntree == "YES") {alert(`Great choice! That's my personal favorite!`);}
  else{orderEntree();} 
}
else if(entree == "CHICKEN") {
  let confirmEntree = prompt(`The${entrees.ckn.name} will be $${entrees.ckn.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmEntree == "YES") {alert(`Great choice! That's my personal favorite!`);}
  else{orderEntree();} 
}

}

const orderSides = () => {
orderSide1();
orderSide2();
}

const orderSide1 = () => {
side1 = prompt(`What would you like for your First Side?

  $${sides.mshpot.cost}:${sides.mshpot.name}
  $${sides.sld.cost}:${sides.sld.name}
  $${sides.stmveg.cost}:${sides.stmveg.name}
`).toUpperCase();

  if(side1 == "MASHED POTATOES") {
  let confirmSide1 = prompt(`The${sides.mshpot.name} will be $${sides.mshpot.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmSide1 == "YES") {alert(`...`); alert(`Great choice!`);}
  else{orderSide1();}
}
else if(side1 == "SALAD") {
  let confirmSide1 = prompt(`The${sides.sld.name} will be $${sides.sld.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmSide1 == "YES") {alert(`...`); alert(`Great choice!`);}
  else{orderSide1();}
}
else if(side1 == "STEAMED VEGTABLES") {
  let confirmSide1 = prompt(`The${sides.stmveg.name} will be $${sides.stmveg.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmSide1 == "YES") {alert(`...`); alert(`Nice choice!`);}
  else{orderSide1();}
}
}

const orderSide2 = () => {
side2 = prompt(`What would you like for your Second Side?

  $${sides.mshpot.cost}:${sides.mshpot.name}
  $${sides.sld.cost}:${sides.sld.name}
  $${sides.stmveg.cost}:${sides.stmveg.name}
`).toUpperCase();

  if(side2 == "MASHED POTATOES") {
  let confirmSide1 = prompt(`The${sides.mshpot.name} will be $${sides.mshpot.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmSide2 == "YES") {alert(`Great choice!`);}
  else{orderSide2();}
}
else if(side2 == "SALAD") {
  let confirmSide2 = prompt(`The${sides.sld.name} will be $${sides.sld.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmSide2 == "YES") {alert(`...`); alert(`Great choice!`);orderSide2();}
  else{orderSide2();}
}
else if(side2 == "STEAMED VEGTABLES") {
  let confirmSide2 = prompt(`The${sides.stmveg.name} will be $${sides.stmveg.cost}. Is that what you want?`).toString().toUpperCase();
  if(confirmSide2 == "YES") {alert(`Nice choice!`);}
  else{orderSide2();}
}
}

const confirmOrder = () => {
let orderConfirm = prompt(`Ok, let me make sure I got your order right. You want ${entree} for your Entree and ${side1} and ${side2} as your two sides?`).toString().toUpperCase();
if(orderConfirm =="YES") {
  alert(`Great! I'll send that to the chef! ;)`);
}
else if(orderConfirm =="NO"){changeOrder();}
else {
  alert(`Sorry, I didn't catch that.`)
  confirmOrder();
}
}

checkout = () => {

if(entree == "STEAK") {
  entreePrice = entrees.stk.cost;
}
else if(entree == "SALMON") {
  entreePrice = entrees.fsh.cost;
}
else if(entree == "CHICKEN") {
  entreePrice = entrees.ckn.cost;
}

if(side1 == "MASHED POTATOES") {
  side1Price = sides.mshpot.cost;
}
else if(side1 == "SALAD") {
  side1Price = sides.sld.cost;
}
else if(side1 == "STEAMED VEGTABLES") {
  side1Price = sides.stmveg.cost;
}

if(side2 == "MASHED POTATOES") {
  side2Price = sides.mshpot.cost;
}
else if(side2 == "SALAD") {
  side2Price = sides.sld.cost;
}
else if(side2 == "STEAMED VEGTABLES") {
  side2Price = sides.stmveg.cost;
}
total = parseFloat(entreePrice + side1Price + side2Price).toFixed(2);
alert(`Your Total is $${total}. Thanks for coming in and have a great day!`)
}

dinner = () =>{
welcome();
order();
checkout();
}

dinner();

console.log(`This customer ordered the ${entree}, the ${side1}, and the ${side2}`);


