const userSign = document.getElementById("user-sign");

async function getTodayPrediction() {
    const response = await fetch('https://aztro.sameerkumar.website/?sign=' + userSign.textContent + '&day=today', {
    method: 'POST',
    headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    console.log(response.body);
}

getTodayPrediction();
