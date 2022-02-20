p1_name = localStorage.getItem("Player 1");
p2_name = localStorage.getItem("Player 2");
p1_score = 0;
p2_score = 0;

document.getElementById("p1-name").innerHTML=p1_name;
document.getElementById("p2-name").innerHTML=p2_name;
document.getElementById("p1-score").innerHTML=p1_score;
document.getElementById("p2-score").innerHTML=p2_score;

document.getElementById("question").innerHTML="Question Turn: "+ p1_name;
document.getElementById("answer").innerHTML="Answer Turn: "+ p2_name;

function send(){
    answer = document.getElementById("word").value;
    lowercase = answer.toLowerCase();
    console.log("This is the Answer given by the User "+lowercase);
    letter1 = lowercase.charAt(1);
    console.log("2nd Letter "+letter1);
    number2 = Math.floor(lowercase.length/2);
    letter2 = lowercase.charAt(number2);
    console.log("Middle Letter "+letter2);
    number3 = lowercase.length-1;
    letter3 = lowercase.charAt(number3);
    console.log("Last Letter "+letter3);
    replaced1 = lowercase.replace(letter1,"_");
    replaced2 = replaced1.replace(letter2,"_");
    replaced3 = replaced2.replace(letter3,"_");
    console.log("Replaced 3 "+ replaced3);
    question = "<h4 id='replacedf'>Question: "+ replaced3 + "</h4>"
    input = "<br> Answer: <input type='text' placeholder='Type Answer Here' id='inputbox'>"
    button = "<br> <br> <button class='btn btn-primary' onclick='check()'> Check </button>"
    document.getElementById("output").innerHTML=question+input+button;
    document.getElementById("word").value="";
}