// add economy ticket 
document.getElementById("addEconomyTicket").addEventListener("click", function() {

    economyTicketHandler(true);
    // const economyTicketInput = document.getElementById("economyTicketCount");
    // const economyTicketInputCount = parseInt(economyTicketInput.value);
    // const economyTicketNewInputCount = ( economyTicketInputCount + 1);
    // economyTicketInput.value = economyTicketNewInputCount;
    // const economyTicketPrice = economyTicketNewInputCount * 100 ;
    // document.getElementById("economyTicketPrice").innerText = "Economy($" + economyTicketPrice + ")";
})
// remove economy ticket 
document.getElementById("minusEconomyTicket").addEventListener("click", function() {
    economyTicketHandler(false);
    
})

// Economy Ticket Handler

function economyTicketHandler(isIncrease){
    const economyTicketInput = document.getElementById("economyTicketCount");
    const economyTicketInputCount = parseInt(economyTicketInput.value);
    let economyTicketNewInputCount = economyTicketInputCount;
    if ( isIncrease == true && economyTicketInputCount < 20){
        economyTicketNewInputCount = (economyTicketInputCount + 1);
    }
    if ( isIncrease == false && economyTicketInputCount > 0){
        economyTicketNewInputCount = (economyTicketInputCount - 1);
    }

    economyTicketInput.value = economyTicketNewInputCount;
    const economyTicketPrice = economyTicketNewInputCount * 100 ;
    document.getElementById("economyTicketPrice").innerText = "Economy($" + economyTicketPrice +")";


}
// add first Class ticket 
document.getElementById("addFirstClassTicket").addEventListener("click", function(){
    firstClassTicketHandler(true);
})
// minus first Class ticket 
document.getElementById("minusFirstClassTicket").addEventListener("click", function(){
    firstClassTicketHandler(false);
})
// firstClassTicketPrice handler
function firstClassTicketHandler(isIncrease){
    const firstClassTicketInput = document.getElementById("firstClassTicketCount");
    const firstClassTicketInputCount = parseInt(firstClassTicketInput.value);
    let firstClassTicketNewInputCount = firstClassTicketInputCount;
    if ( isIncrease == true && firstClassTicketInputCount < 20){
        firstClassTicketNewInputCount = (firstClassTicketInputCount + 1);
    }
    if ( isIncrease == false && firstClassTicketInputCount > 0){
        firstClassTicketNewInputCount = (firstClassTicketInputCount - 1);
    }

    firstClassTicketInput.value = firstClassTicketNewInputCount;
    const firstClassTicketPrice = firstClassTicketNewInputCount * 150 ;
    document.getElementById("firstClassTicketPrice").innerText = "First Class($" + firstClassTicketPrice +")";
}