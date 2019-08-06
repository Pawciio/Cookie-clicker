let engine;
let cursor;
let cookieCounter;
let producePS;

makers = function(){
    cookieCounter = 0;
    producePS = 0;

        cursor = {
            price: 15,
            vol: 0,
        };

        let grandma = {
            price: 100,
            vol: 0,
            pps: 0,
        };

        let farm = {
            price: 1100,
            vol: 0,
            pps,
        };

        let bakery = {
            price: 12000,
            vol: 0,
            pps: 0,
        };

        let mine = {
            price: 130000,
            vol: 0,
            pps: 0,
        };

        engine = {
            setCookieCounter: function(value){
                cookieCounter = value;
            },
            getCookieCounter: function(){
                return cookieCounter;
            },
            incCookieCounter: function(value){
                cookieCounter += value;

            },
            setproducePS: function(value){
                producePS = value;
            },
            getproducePS: function(){
                return producePS;
            },
            incproducePS: function(value){
                producePS += value;

            },

            // Cursor
            setCoursorPrice: function(value) {
                coursor.price = value;
            },          
            getCoursorPrice: function() {
                return Math.floor(cursor.price);
            },         
            setCoursorVol: function(value) {
                cursor.vol = value;
            },         
            getCoursorVol: function() {
                return cursor.vol;
            },
            incCursorVol:  function(value) {
                cursor.vol += value;
            
            },
            incCursorPrice: function(value) {
                cursor.price *= value;
            
            },

            //Grandma
            setGrandmaPrice: function(value) {
                grandma.price = value;
            },
            setGrandmaVol: function(value) {
                grandma.vol = value;
            },
            setGrandmaPPS: function(value){
                grandma.pps = value;
            },
            getGrandmaPrice: function() {
            return Math.floor(grandma.price);

            },
            getGrandmaVol: function() {
                return grandma.vol;
            },
            getGrandmaPPS: function() {
                return grandma.pps;
            },
            incGrandmaPrice: function(value) {
                grandma.price *= value;
            
            },
            incGrandmaVol: function(value){
                grandma.vol += value;
            
            },
            incGrandmaPPS: function(value) {
                grandma.pps += value;
                
            },

            //Farm
            setFarmPrice:function(value) {
                farm.price = value;
            },
            setFarmVol: function(value) {
                farm.vol = value;
            },
            setFarmPPS: function(value) {
                farm.pps = value;
            },
            getFarmPrice: function() {
                return Math.floor(farm.price);
            },
            getFarmVol: function() {
                return farm.vol;
            },
            getFarmPPS: function() {
                return farm.pps;
            },
            incFarmPrice: function(value) {
                farm.price *= value;
            
            },
            incFarmVol: function(value) {
                farm.vol += value;
            
            },
            incFarmPPS: function(value) {
                farm.pps += value;
            
            },

            //Bakery
            setBakeryPrice: function(value) {
                bakery.price = value;
            },
            setBakeryVol: function(value) {
                bakery.vol = value;
            },
            setBakeryPPS: function(value) {
                bakery.pps = value;
            }, 
            getBakeryPrice: function() {
                return Math.floor(bakery.price);
            },
            getBakeryVol: function() {
                return bakery.vol;
            },         
            getBakeryPPS: function() {
                return bakery.pps;
            },
            incBakeryPrice: function(value) {
                bakery.price *= value;
            
            },
            incBakeryVol: function(value) {
                bakery.vol += value;
            
            },     
            incBakeryPPS: function(value) {
                bakery.pps += value;
            
            },

            //Mine
            setMinePrice: function(value) {
                mine.price = value;
            },
            setMineVol: function(value) {
                mine.vol = value;
            },
            setMinePPS: function(value) {
                mine.pps = value;
            },
            getMinePrice: function() {
                return Math.floor(mine.price);
            },
            getMineVol: function() {
                return mine.vol;
            },
            getMinePPS: function() {
                return mine.pps;
            },
            incMinePrice: function(value) {
                mine.price *= value;
                
            },
            incMineVol: function(value) {
                mine.vol += value;
                
            },
            incMinePPS: function(value) {
                mine.pps += value;
                
            },

    };
};