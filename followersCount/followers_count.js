let count=0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue(){
    if (count===10){
        alert("Your Instagram post gained 10 followers! congratulations!");
    }else if (count===20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function resetfollowers(){
    count=0;
    displayAlert();
}

function displayAlert(){
    alert("Followers Have Been RESET!!");
    displayCount();
}