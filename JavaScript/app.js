let cookieCounterToView = 0;
makers();
let mainCookie = document.querySelector(".click-cookie");
let buttonCoursor = document.querySelector(".button-coursor");
let buttonGrandma = document.querySelector(".button-grandma");
let buttonFarm = document.querySelector(".button-farm");
let buttonBakery = document.querySelector(".button-bakery");
let buttonMine = document.querySelector(".button-mine");
let amount = document.querySelector(".amount");

let productivityDisplay = document.querySelector(".productivity");
amount.innerHTML = cookieCounterToView;

let cost = {
    cursor: 15,
    grandma: 100,
    farm: 1100,
    bakery: 12000,
    mine: 130000
};
let volume = {
    cursor: 0,
    grandma: 0,
    farm: 0,
    bakery: 0,
    mine: 0
};
let productivity = {
    grandma: 1,
    farm: 8,
    bakery: 47,
    mine: 260
};
let productivityPS = {
    coursor: 0,
    grandma: 0,
    farm: 0,
    bakery: 0,
    mine: 0
};

function shorten(num){
    if (num < 1000)  {
        return num.toFixed(2);
      }
      if ((num > 999) && (num < 1000000) ) {
        return ((num/1000).toFixed(2) + 'k');
      }
      if(num > 999999) {
        return (num/1000000).toFixed(3) + 'mln';
      }
};

mainCookie.addEventListener('click', function(){
    cookieCounterToView++;
    engine.incCookieCounter(1);
    amount.innerHTML = shorten(cookieCounterToView);
});

setInterval(function(){
    cookieCounterToView += cursor.vol;
    engine.incCookieCounter(cursor.vol);
    amount.innerHTML = shorten(cookieCounterToView);
},10000);
  
setInterval(function(){
    cookieCounterToView += engine.getproducePS();
    engine.incCookieCounter(engine.getproducePS());
    amount.innerHTML = shorten(cookieCounterToView);
}, 1000);

buttonCoursor.addEventListener('click', function(){
    if(engine.getCookieCounter() >= engine.getCoursorPrice()){
        engine.incCookieCounter(- engine.getCoursorPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.innerHTML = shorten(cookieCounterToView);
        engine.incCursorPrice(1.1);
        document.querySelector(".cursor-cost").innerHTML = shorten(engine.getCoursorPrice());
        engine.incCursorVol(1);
        document.querySelector(".cursor-vol").innerHTML = engine.getCoursorVol();
    };
});
buttonGrandma.addEventListener('click', function(){
    if(engine.getCookieCounter() >= engine.getGrandmaPrice()){
        engine.incCookieCounter(- engine.getGrandmaPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.innerHTML = cookieCounterToView;
        engine.incGrandmaPrice(1.1);
        document.querySelector(".grandma-cost").innerHTML = shorten(engine.getGrandmaPrice());
        engine.incGrandmaVol(1);
        document.querySelector(".grandma-vol").innerHTML = engine.getCoursorVol();
        engine.incGrandmaPPS(1);
        document.querySelector(".grandma-pps").innerHTML = engine.getGrandmaPPS();
        engine.incproducePS(1);
        productivityDisplay.innerHTML = shorten(engine.getproducePS());
    };
});
buttonFarm.addEventListener('click', function(){
    if(engine.getCookieCounter() >= engine.getFarmPrice()) {
        engine.incCookieCounter(- engine.getFarmPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.innerHTML = cookieCounterToView;
        engine.incFarmPrice(1.1);
        document.querySelector(".farm-cost").innerHTML = shorten(engine.getFarmPrice());
        engine.incFarmVol(1);
        document.querySelector(".farm-vol").innerHTML = engine.getFarmVol();
        engine.incFarmPPS(8);
        document.querySelector(".farm-pps").innerHTML = engine.getFarmPPS();
        engine.incproducePS(8);
        productivityDisplay.innerHTML = shorten(engine.getproducePS());
    };
});
buttonBakery.addEventListener('click', function(){
    if(engine.getCookieCounter() >= engine.getBakeryPrice()) {
        engine.incCookieCounter(- engine.getBakeryPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.innerHTML = cookieCounterToView;
        engine.incBakeryPrice(1.1);
        document.querySelector(".bakery-cost").innerHTML = shorten(engine.getBakeryPrice());
        engine.incBakeryVol(1);
        document.querySelector(".bakery-vol").innerHTML = engine.getBakeryVol();
        engine.incBakeryPPS(47);
        document.querySelector(".bakery-pps").innerHTML = engine.getBakeryPPS();
        engine.incproducePS(47);
        productivityDisplay.innerHTML = shorten(engine.getproducePS());
    };
});
    
buttonMine.addEventListener('click', function(){
    if(engine.getCookieCounter() >= engine.getMinePrice()) {
        engine.incCookieCounter(- engine.getMinePrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.innerHTML = cookieCounterToView;
        engine.incMinePrice(1.1);
        document.querySelector(".mine-cost").innerHTML = shorten(engine.getMinePrice());
        engine.incMineVol(1);
        document.querySelector(".mine-vol").innerHTML = engine.getMineVol();
        engine.incMinePPS(260);
        document.querySelector(".mine-pps").innerHTML = engine.getMinePPS();
        engine.incproducePS(260);
        productivityDisplay.innerHTML = shorten(engine.getproducePS());
    };
});
    
  
    
