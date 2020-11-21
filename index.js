/////////// VARIABLES ///////////////////
const characterPicker = $(".pickCharacter")
const enemyCharacterPicker = $(".pickEnemyCharacter")
const characterOne = $(".charactersGood1")
const characterTWO = $(".charactersGood2")
const characterThree = $(".charactersGood3")
let chosenFighter = $("#goodFighter")
const chosenEnemy = $("#badFighter")
let goodGuysDiv = $("#goodGuys")



console.log();







////////////// FUNCTIONS ///////////////

$("#attackBtn").on("click", function () {
    alert("attacked!")
})
$("#charactersGood1").on("click", function () {

    
    $("#goodFighter").append(`<img src="./img/gokumui.jpg" alt="" class="pickCharacter" id="charactersGood1">`)
})
$("#charactersGood2").on("click", function () {
    alert("character chosen")

})
$("#charactersGood3").on("click", function () {
    alert("character chosen")

})
$(".pickEnemyCharacter").on("click", function () {
    alert("enemy chosen")
})







////////////// FUNCTION CALLS ///////////////