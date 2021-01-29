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
    const airTicketPrice = airTicketNewInputCount * 100 ;
    document.getElementById(air + "TicketPrice").innerText = "Economy($" + airTicketPrice +")";

}
