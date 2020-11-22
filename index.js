/////////// VARIABLES ///////////////////
const characterPicker = $(".pickCharacter")
const enemyCharacterPicker = $(".pickEnemyCharacter")
const characterOne = $("#gokumui")
const characterTWO = $("#vegeta")
const characterThree = $("#gotenks")
let chosenFighter = $("#goodFighter")
const chosenEnemy = $("#badFighter")
let goodGuysDiv = $("#goodGuys")







////////////// FUNCTIONS ///////////////

$("#attackBtn").on("click", function () {
    alert("attacked!")
})
$("#gokumui").on("click", function () {
    $("#goodFighter").append(`<img src="./img/gokumui.jpg" alt="" class="pickCharacter" id="gokumui"> <span>health</span>`)
    $("#gokumui").css('display', 'none');
    $("#deleteSpan").text(" ")
})
$("#vegeta").on("click", function () {
    $("#goodFighter").append(`<img src="./img/vegeta.jpg" alt="" class="pickCharacter" id="vegeta"> <span>health</span>`)
    $("#vegeta").css('display', 'none');
    $("#deleteSpan2").text(" ")

})
$("#gotenks").on("click", function () {
    $("#goodFighter").append(`<img src="./img/gotenks.jpg" alt="" class="pickCharacter" id="gotenks"> <span>health</span>`)
    $("#gotenks").css('display', 'none');
    $("#deleteSpan3").text(" ")

})
$("#gokublack").on("click", function () {
    $("#gokublack").css('display', 'none');
    $("#badFighter").append(`<img src="./img/gokublack.jpg" alt="" class="pickEnemyCharacter" id="gokublack"> 
    <span>health</span>`)
    $("#deleteSpan4").text(" ")
})
$("#broly").on("click", function () {
    $("#broly").css('display', 'none');
    $("#badFighter").append(`<img src="./img/broly.jpg" alt="" class="pickEnemyCharacter" id="broly"> 
    <span>health</span>`)
    $("#deleteSpan5").text(" ")
})
$("#frieza").on("click", function () {
    $("#frieza").css('display', 'none');
    $("#badFighter").append(`<img src="./img/frieza.jpg" alt="" class="pickEnemyCharacter" id="frieza"> 
    <span>health</span>`)
    $("#deleteSpan6").text(" ")
})






////////////// FUNCTION CALLS ///////////////