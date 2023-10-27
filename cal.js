function display(value){
    document.getElementById('result').value += value;
}
function solve(){
    let x = document.getElementById('result').value;

    let y = eval(x)

    document.getElementById("result").value = y;
}
function AC(){
    document.getElementById('result').value ="";
}

