//-----------LEV-1_1---------

// function intro () {
//     let a = 1+3
//     console.log ("Hello World")
//     console.log ("1+3="+a)
// }

// intro ()

//-------------LEV-1_2------------

// function intro2(paramName) {
//     let varName = ("SuperCoder")
//     console.log("Hi, " + varName + ". Mein Name ist " + paramName + " .")
// }

// intro2 ("Joe")

//------------LEV-1_3------------

// function intro3(name, stadt, alter) {
//     console.log ("Hallo, mein Name ist "+name+ ".  Ich bin "+alter+" Jahre alt. Ich komme aus "+stadt+ ".")
// }

// intro3("SuperCoder", "Düsseldorf", 27)

//------------LEV-1_5---------------

// function math(num1, num2) {
//     console.log("Multiplikation:" +num1*num2)
//     console.log("Division:" +num1/num2)
// }

// math (10, 2)
// math (30, 20)
// math (100, 100)
// math (5, 0)
// math (45, 173)
// math (1,1000)

//============================//

//-------LEV-2_1-classList onclick--------//


// function changeHeadline (){
//     document.getElementById("headline").classList.toggle("colorchange")

// }

// function resetHeadline () {
//     document.getElementById("headline").classList.remove("colorchange")
// }


//===========================//

//-----------LEV-1_1-forms+js_function-double--------//

// zahlen value verdoppeln durch buttonklick
// erkenne eingebene zahl
// rechne eigegebene zahl * 2
// spucke den wert in einem p element aus

// function doppelWert () {
//     let number = document.getElementById("number").value
//     number = number*2
//     console.log(number)
//     let result = document.getElementById("result")
//     result.innerHTML = number
// }

//----------LEV-1_2-forms+js_function-your_age

// function alter () {
//     let age = 2023-document.getElementById("geburtsjahr").value
//     document.getElementById("alter").innerHTML = age
// }

//----------LEV-1_3-forms+js_compare-age-------------//

function differenz() {
    let num1 = document.getElementById("number1").value
    let num2 = document.getElementById("number2").value
    number = num1-num2
    document.getElementById("differenz").innerHTML = number
}
