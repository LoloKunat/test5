window.onload = function() {
 let button = document.getElementById("calculate");
 button.addEventListener("click", calculateChance);

}

function calculateChance() {
    let yourName = document.getElementById("your-name").value;
    let crushName = document.getElementById("crush-name").value;

    if (yourName != "" && crushName != ""){
        let percentage = Math.floor(Math.random() * 101);
        document.getElementById("result-message").innerText = crushName + "'s chance of having a crush on you too is:  ";
        document.getElementById("result-percent").innerText = percentage.toString() + "%";
    }
}

