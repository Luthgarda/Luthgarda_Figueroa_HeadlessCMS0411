

//1.xhr 
// const xhr = new XMLHttpRequest();
// xhr.open('GET',"assets/data/content.json");
// xhr.send();

// xhr.addEventListener('load', function(){
//    try {
//        console.log("XHR response: ", this.responseText);
//    } catch (error) {
//       console.log("Error:", error);
//    }
//    })

//2. fetch
//fetch("assets/data/content.json")
//    .then (response => response.json())
//    .then (data => console.log(data))
//   .catch (errors => console.log("errors:", errors))


//3.async/await
//async function demoFunction(){
//    try {
//        const temp = await fetch("assets/data/content.json")
//        const data = await temp.json();
//        console.log(data);
//    } catch (error) {
//        console.log('error: ', error);
//    }
// }

 // demoFunction();


document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/data/data.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById('unresolvedTitle').innerText = "Unresolved";
            document.getElementById('unresolvedNumber').innerText = data.unresolved;

            document.getElementById('overdueTitle').innerText = "Overdue";
            document.getElementById('overdueNumber').innerText = data.overdue;

            document.getElementById('openTitle').innerText = "Open";
            document.getElementById('openNumber').innerText = data.open;

            document.getElementById('holdTitle').innerText = "On hold";
            document.getElementById('holdNumber').innerText = data.hold;

            document.getElementById('resolvedTitle').innerText = "Resolved";
            document.getElementById('resolvedNumber').innerText = data.resolved;

            document.getElementById('receivedTitle').innerText = "Received";
            document.getElementById('receivedNumber').innerText = data.received;

            document.getElementById('avgFirstRespTitle').innerText = "Average First Response";
            document.getElementById('avgFirstRespNumber').innerText = data.avgFirstResp;

            document.getElementById('resWithSLATitle').innerText = "Resolution Within SLA";
            document.getElementById('resWithSLANumber').innerText = data.resWithSLA;

            document.getElementById('waitingOnFeatReqTitle').innerText = "Waiting on Feature Request";
            document.getElementById('waitingOnFeatReqNumber').innerText = data.waitingOnFeatReq;

            document.getElementById('awaitingCustRespTitle').innerText = "Awaiting Customer Response";
            document.getElementById('awaitingCustRespNumber').innerText = data.awaitingCustResp;

            document.getElementById('awaitingDevfixTitle').innerText = "Awaiting Developer Fix";
            document.getElementById('awaitingDevfixNumber').innerText = data.awaitingDevfix;

            document.getElementById('pendingTitle').innerText = "Pending";
            document.getElementById('pendingNumber').innerText = data.pending;
        })
        .catch(error => console.error('Error fetching JSON:', error));
});


document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/data/data.json")
        .then(response => response.json())
        .then(data => {
            // Define an array of card IDs and their corresponding JSON keys
            const cardIds = [
                { id: 'unresolved', title: 'Unresolved' },
                { id: 'overdue', title: 'Overdue' },
                { id: 'open', title: 'Open' },
                { id: 'hold', title: 'On hold' },
                { id: 'resolved', title: 'Resolved' },
                { id: 'received', title: 'Received' },
                { id: 'avgFirstResp', title: 'Average First Response' },
                { id: 'resWithSLA', title: 'Resolution Within SLA' },
                { id: 'waitingOnFeatReq', title: 'Waiting on Feature Request' },
                { id: 'awaitingCustResp', title: 'Awaiting Customer Response' },
                { id: 'awaitingDevfix', title: 'Awaiting Developer Fix' },
                { id: 'pending', title: 'Pending' }
            ];

            // Loop through the cardIds array and populate each card dynamically
            cardIds.forEach(card => {
                const cardTitleElement = document.getElementById(`${card.id}Title`);
                const cardNumberElement = document.getElementById(`${card.id}Number`);
                
                cardTitleElement.innerText = card.title;
                cardNumberElement.innerText = data[card.id];
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
