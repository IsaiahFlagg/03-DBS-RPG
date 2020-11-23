/////////// VARIABLES ///////////////////
const characterPicker = $(".pickCharacter")
const enemyCharacterPicker = $(".pickEnemyCharacter")
const characterOne = $("#gokumui")
const characterTWO = $("#vegeta")
const characterThree = $("#gotenks")
const characterFour = $("#gokublack")
const characterFive = $("#broly")
const characterSix = $("#frieza")
let chosenFighter = $("#goodFighter")
const chosenEnemy = $("#badFighter")
let goodGuysDiv = $("#goodGuys")
let characterOneHealth = 210
let characterTwoHealth = 200
let characterThreeHealth = 190
let characterFourHealth = 210
let characterFiveHealth = 220
let characterSixHealth = 205
let attackDamage = Math.floor(Math.random(15) * 50);
let counterAttackDamage = Math.floor(Math.random(15) * 50);
$("#deleteSpan").text(characterOneHealth)
$("#deleteSpan2").text(characterTwoHealth)
$("#deleteSpan3").text(characterThreeHealth)
$("#deleteSpan4").text(characterFourHealth)
$("#deleteSpan5").text(characterFiveHealth)
$("#deleteSpan6").text(characterSixHealth)







////////////// FUNCTIONS ///////////////


$("#gokumui").on("click", function () {
    $("#goodFighter").append(`<img src="./img/gokumui.jpg" alt="" class="pickCharacter" id="gokumui">`)
    $("#gokumui").css('display', 'none');
    $("#vegeta").css('display', 'none');
    $("#gotenks").css('display', 'none');
    // $("#deleteSpan").text(" ")
    $("#deleteSpan2").text(" ")
    $("#deleteSpan3").text(" ")

})
$("#vegeta").on("click", function () {
    $("#goodFighter").append(`<img src="./img/vegeta.jpg" alt="" class="pickCharacter" id="vegeta">`)
    $("#gokumui").css('display', 'none');
    $("#vegeta").css('display', 'none');
    $("#gotenks").css('display', 'none');
    $("#deleteSpan").text(" ")
    // $("#deleteSpan2").text(" ")
    $("#deleteSpan3").text(" ")

})
$("#gotenks").on("click", function () {
    $("#goodFighter").append(`<img src="./img/gotenks.jpg" alt="" class="pickCharacter" id="gotenks">`)
    $("#gokumui").css('display', 'none');
    $("#vegeta").css('display', 'none');
    $("#gotenks").css('display', 'none');
    $("#deleteSpan").text(" ")
    $("#deleteSpan2").text(" ")
    // $("#deleteSpan3").text(" ")

})
$("#gokublack").on("click", function () {
    $("#gokublack").css('display', 'none');
    $("#broly").css('display', 'none');
    $("#frieza").css('display', 'none');
    $("#badFighter").append(`<img src="./img/gokublack.jpg" alt="" class="pickEnemyCharacter" id="gokublack">`)
    // $("#deleteSpan4").text(" ")
    $("#deleteSpan5").text(" ")
    $("#deleteSpan6").text(" ")
})
$("#broly").on("click", function () {
    $("#gokublack").css('display', 'none');
    $("#broly").css('display', 'none');
    $("#frieza").css('display', 'none');
    $("#badFighter").append(`<img src="./img/broly.jpg" alt="" class="pickEnemyCharacter" id="broly">`)
    $("#deleteSpan4").text(" ")
    // $("#deleteSpan5").text(" ")
    $("#deleteSpan6").text(" ")
})
$("#frieza").on("click", function () {
    $("#gokublack").css('display', 'none');
    $("#broly").css('display', 'none');
    $("#frieza").css('display', 'none');
    $("#badFighter").append(`<img src="./img/frieza.jpg" alt="" class="pickEnemyCharacter" id="frieza">`)
    $("#deleteSpan4").text(" ")
    $("#deleteSpan5").text(" ")
    // $("#deleteSpan6").text(" ")
})



$("#attackBtn").on("click", function () {
    console.log("attacked!")
    // let newHealth = characterFourHealth - attackDamage
    if (characterFourHealth > 0) {
        characterFourHealth -= 25
        characterOneHealth -= 15
        $("#deleteSpan4").text(characterFourHealth)
        $("#deleteSpan").text(characterOneHealth)
        console.log(characterFourHealth);

    } else if (characterFourHealth <= 0) {
        $("#badFighter").append(`<img src="./img/broly.jpg" alt="" class="pickEnemyCharacter" id="broly"> <span id="deleteSpan5">220</span>`)
        $("#gokublack").css('display', 'none');
        $("#deleteSpan4").text(" ")
    } else {
        return
    }

})

//broly attack button
$("#attackBtn1").on("click", function () {
    console.log();
})







////////////// FUNCTION CALLS ///////////////