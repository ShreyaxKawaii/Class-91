function addUser() {
    var p1 = document.getElementById("player1_name").value;
    var p2 = document.getElementById("player2_name").value;
    localStorage.setItem("Player 1", p1);
    localStorage.setItem("Player 2", p2);
    window.location="game_page.html";
}