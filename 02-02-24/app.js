/**
 *
 * synchronized
 * asynchronously
 *
 *
 */

// console.log(" print my name ");
// setTimeout(() => {
//     console.log("hello");
// }, 1000);
// console.log(" print my name amit");

// async function called()
// {
//     await console.log("hello");
// }

// console.log(called());

// local storage

// let heading = document.querySelector("h1");
// heading.innerHTML = "Hello";

$("document").ready(() => {
    $("#add").click(() => {
        let num1 = $("#num1").val();
        let num2 = $("#num2").val();

        let firstName = localStorage.setItem("fname", "amit");
        let lastName = localStorage.setItem("lastName", "kasabe");
        let fn = localStorage.getItem("fname");
        console.log(fn);

        let result = $("#result");

        /*num1 = parseInt(num1);
        num2 = parseInt(num2);
        let result = $("#result").html(num1 + num2);
        console.log(`the addtion of ${num1} and ${num2} is =` + (num1 + num2));
        let res = num1 + num2;*/
    });

    // local storages
});

// var d = new Date();
// var d = new Date(2018, 11);
// console.log(d);


const calculateBill = (totalBill , person1 , person2) => {
    const bill = [
        {
            name: person1,
            bill: totalBill / 100,
        },
        {
            name: person2,
            bill: totalBill / 4,
        },
    ];

    let billShubham = bill[0].bill;
    let billVinay = bill[1].bill;

    console.log(typeof billVinay);
    console.log(typeof billShubham);

    const total = billVinay + billShubham;
    console.log(total);

    console.log(`the total bill is ${Math.ceil(billShubham + billVinay)} and ${bill[0].name} have paid rupees ${billShubham} and ${bill[1].name} have paid only rupees ${Math.ceil(billVinay)}`);
}
calculateBill(50000 , "Swapnali" , "Ruchika");


calculateBill(50 , " Amit " , " Vinay ");