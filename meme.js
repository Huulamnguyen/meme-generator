const input = document.getElementById('image-link');
const memeConatiner = document.getElementById('meme-container');
const submit = document.querySelector("button[type='submit']");
const topText = document.querySelector("#top");
const botText = document.querySelector("#bottom");
const removeBtn = document.querySelector(".removeBtn");


submit.addEventListener("click", function(event) {
    event.preventDefault();

    const newDiv = document.createElement("div");
    newDiv.classList.add("meme")

    const removeBtn = document.createElement("button");
    removeBtn.type = "submit";
    removeBtn.innerText = "X";
    removeBtn.classList.add("removeBtn");


    const newMeme = document.createElement('img');
    newMeme.classList.add("image");
    newMeme.src = input.value;

    const topValue = document.createElement('h2');
    topValue.classList.add("topvalue");    
    topValue.innerHTML = topText.value;
    
    const botValue = document.createElement('h2');
    botValue.classList.add("botvalue");
    botValue.innerText = botText.value;

    newDiv.appendChild(newMeme);
    newDiv.appendChild(topValue);
    newDiv.appendChild(botValue);
    newDiv.appendChild(removeBtn);
    memeConatiner.appendChild(newDiv);
    
    input.value = "";
    topText.value = "";
    botText.value = "";
    
    // Remove meme    
    removeBtn.addEventListener("click", function(event){
        event.target.parentElement.remove();
    });

});




