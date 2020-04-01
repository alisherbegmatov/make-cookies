/********************************
COOKIE clicker
********************************/
//declare default variables
let cookieCount = 0;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  cookieCounter.innerHTML = cookieCount;
})

//refresh cookies
let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}

/********************************
Click Power
********************************/

//declare default variables
let clickPower = 1;

//default variables
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//Buy click power
buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    console.log("Item succesfully Bought");
  } else {
    console.log("You don't have enough cookies!");
  }

  //update Click Power
  clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

  if (cookieCount >= clickPowerPriceAmount) {
    //subtract cookies from the price of the item
    cookieCount -= clickPowerPriceAmount;
    //update cookie counter.
    cookieCounter.innerHTML = cookieCount;
  }

})

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})

if (cookieCount >= clickPowerPriceAmount) {
  //subtract cookies from the price of the item
  cookieCount -= clickPowerPriceAmount;
  refreshCookieCount()

  //Upgrade power level
  clickPowerLevelNumber += 1;

  //Update click price
  clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

  //update Click Power
  clickPower += 1;

  //refresh shop item
  refreshPowerClick();
}

let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
}


/********************************
OREO
********************************/

//set default values
let oreoPower = 50;
let oreoPriceAmount = 100;
let oreoLevelNumber = 1;
let oreoAuto = false;

//declare DOM variables
let buyOreo = document.getElementById('buy-oreo');
let oreoPrice = document.getElementById('oreo-price');
let oreoLevel = document.getElementById('oreo-level');
let oreoMultiple = document.getElementById('oreo-multiple');

//buy a oreo
buyOreo.addEventListener("click", function() {
  //make sure we have enough cookies and subtract our cookies from the price
  if (cookieCount >= oreoPriceAmount) {
    // Subtract cookies from the price of the item.
    cookieCount +=  - oreoPriceAmount;
    refreshCookieCount()
    //upgrade power level
    oreoLevelNumber += 1;
    //update price
    oreoPriceAmount = Math.floor(oreoPriceAmount * 1.33);
    //update grandma power
    oreoPower += 10;
    //turn autoGrandma on!
    autoOreo = true
    autoOreoStart();
    //update oreo power
    oreoPower += 10 + Math.floor(oreoLevelNumber * 1.33);
    //refresh shop item
    refreshOreo();
  }
})

let refreshOreo = function() {
  oreoLevel.innerHTML = oreoLevelNumber
  oreoPrice.innerHTML = oreoPriceAmount;
  oreoMultiple.innerHTML = oreoPower;
  oreoMultiple.innerHTML = oreoPower - 10;
}

let autoOreoStart = function() {
  let oreoInt = window.setInterval(function(){
    cookieCount += oreoPower;
    refreshCookieCount();
  }, 1000);
}


/********************************
Facilities
********************************/

//set default values
let facilityAuto = false;
let facilityPower = 500;
let facilityPriceAmount = 1500;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
  //set autoLoop to false
  facilityAuto = false;
  //make sure we have enough cookies
  if (cookieCount >= facilityPriceAmount) {
    cookieCount -= facilityPriceAmount;
    refreshCookieCount()
    //upgrade power level
    facilityLevelNumber += 1;
    //update price
    facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
    //update facility power
    facilityPower += 600;
    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();
    //update facility power
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;
    //refresh shop item
    refreshFacility();
  }
})


//game loop
let autoFacilityStart = function() {
  let facilityInt = window.setInterval(function(){
    cookieCount += facilityPower;
    refreshCookieCount();
  }, 1000);
}
//refresh shop
//refresh shop
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}


/********************************
NUTELLA
********************************/
//default
let nutellaAuto = false;
let nutellaPower = 200;
let nutellaPriceAmount = 200;
let nutellaLevelNumber = 2;

//declare DOM variables
let buyNutella = document.getElementById('buy-nutella');
let nutellaPrice = document.getElementById('nutella-price');
let nutellaLevel = document.getElementById('nutella-level');
let nutellaMultiple = document.getElementById('nutella-multiple');


buyNutella.addEventListener("click", function() {
  //set autoLoop to false
  nutellaAuto = false;
  //make sure we have enough cookies
  if (cookieCount >= nutellaPriceAmount) {
    cookieCount -= elfPriceAmount;
    refreshCookieCount()
    //upgrade power level
    nutellaLevelNumber += 1;
    //update price
    nutellaPriceAmount = Math.floor(nutellaPriceAmount * 1.33);
    //update elf power
    nutellaPower += 800;
    //turn autoElf on!
    nutellaAuto = true
    autoElfStart();
    //update elf power
    nutellaPower += 800 + Math.floor(nutellaLevelNumber * 1.33);;
    //refresh shop item
    refreshNutella();
  }
})

let refreshNutella = function() {
  nutellaLevel.innerHTML = nutellaLevelNumber
  nutellaPrice.innerHTML = nutellaPriceAmount;
  nutellaMultiple.innerHTML = nutellaPower;
  nutellaMultiple.innerHTML = nutellaPower - 30;
}

let autoNutellaStart = function() {
  let nutellaInt = window.setInterval(function(){
    cookieCount += nutellaPower;
    refreshCookieCount();
  }, 2000);
}



/********************************
MILKA
********************************/
//default
let milkaAuto = false;
let milkaPower = 300;
let milkaPriceAmount = 300;
let milkaLevelNumber = 0;

//declare DOM variables
let buyMilka = document.getElementById('buy-milka');
let milkaPrice = document.getElementById('milka-price');
let milkaLevel = document.getElementById('milka-level');
let milkaMultiple = document.getElementById('milka-multiple');


buyMilka.addEventListener("click", function() {
  //set autoLoop to false
  milkaAuto = false;
  //make sure we have enough cookies
  if (cookieCount >= milkaPriceAmount) {
    cookieCount -= milkaPriceAmount;
    refreshCookieCount()
    //upgrade power level
    milkaLevelNumber += 1;
    //update price
    milkaPriceAmount = Math.floor(milkaPriceAmount * 1.33);
    //update santa power
    milkaPower += 1000;
    //turn autoElf on!
    milkaAuto = true
    autoSantaStart();
    //update santa power
    milkaPower += 1000 + Math.floor(milkaLevelNumber * 1.33);;
    //refresh shop item
    refreshMilka();
  }
})

let refreshMilka = function() {
  milkaLevel.innerHTML = milkaLevelNumber
  milkaPrice.innerHTML = milkaPriceAmount;
  milkaMultiple.innerHTML = milkaPower;
  milkaMultiple.innerHTML = milkaPower - 70;
}

let autoMilkaStart = function() {
  let milkaInt = window.setInterval(function(){
    cookieCount += milkaPower;
    refreshCookieCount();
  }, 1000);
}
