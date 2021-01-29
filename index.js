function ticketChangeHandler(air, isIncrease){
    const airTicketInput = document.getElementById(air + "TicketCount");
    const airTicketInputCount = parseInt(airTicketInput.value);
    let airTicketNewInputCount = airTicketInputCount;
    if ( isIncrease == true){
        airTicketNewInputCount = (airTicketInputCount + 1);
    }
    if ( isIncrease == false && airTicketInputCount > 0){
        airTicketNewInputCount = (airTicketInputCount - 1);
    }

    airTicketInput.value = airTicketNewInputCount;

    let airTTicketPrice = 0;
    if(air == 'firstClass'){
        airTicketPrice = airTicketNewInputCount * 150 ;
        document.getElementById(air + "TicketPrice").innerText = "First Class($" + airTicketPrice +")";
    }
    if(air == 'economy'){
        airTicketPrice = airTicketNewInputCount * 100 ;
        document.getElementById(air + "TicketPrice").innerText = "Economy ($" + airTicketPrice +")";
    }  
    totalPriceCalculation();
}

function totalPriceCalculation(){
    const economyTicketInput = document.getElementById("economyTicketCount");
    const economyTicketCount = parseInt(economyTicketInput.value);


    const firstClassTicketInput = document.getElementById("firstClassTicketCount");
    const firstClassTicketCount = parseInt(firstClassTicketInput.value);

    const totalPrice = economyTicketCount * 100 + firstClassTicketCount * 150; 
    document.getElementById("subTotal").innerText = "$" + totalPrice;
}