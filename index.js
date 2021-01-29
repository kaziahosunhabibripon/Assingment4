function ticketChangeHandler(air, isIncrease){
    const airTicketInputCount = getTicketValue(air);
    let airTicketNewInputCount = airTicketInputCount;
    if ( isIncrease == true){
        airTicketNewInputCount = (airTicketInputCount + 1);
    }
    if ( isIncrease == false && airTicketInputCount > 0){
        airTicketNewInputCount = (airTicketInputCount - 1);
    }

    document.getElementById(air + "TicketCount").value = airTicketNewInputCount;

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
    const firstClassTicketCount = getTicketValue('firstClass');
    const economyTicketCount = getTicketValue('economy');
    const totalPrice = economyTicketCount * 100 + firstClassTicketCount * 150; 
    document.getElementById("subTotal").innerText = "$" + totalPrice;
    const taxAmount = Math.round(totalPrice * .1);
        document.getElementById("tax").innerText = "$" + taxAmount;
    const grandTotal  = (totalPrice + taxAmount);   
        document.getElementById("total").innerText = "$" + grandTotal;
}

function getTicketValue(air){
    const airTicketInput = document.getElementById(air + "TicketCount");
    const airTicketCount = parseInt(airTicketInput.value);
    return airTicketCount;
}