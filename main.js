/**
 *
 * document.getElementById("id");
 * document.getElementsByTagName("tagName");
 * document.getElementByClassName("className")
 *
 *
 *
 */
// console.log(document.getElementById("h1").innerHTML);
// console.log(document.getElementsByClassName("h1"));
// console.log(document.getElementsByTagName(h1));

// let submit = document.getElementById("submit");
// console.log(submit);

/**
 * element.addEventListener("event" , function(){
 * definition
 * })
 */

submit.addEventListener("click", function () {
  let hello = document.getElementById("h1");
  let name = document.getElementById("name").value;
  let n = document.getElementById("name");
  //   if(name == "amit"){
  //     console.log(" Yes ");
  //   } else {
  //     console.log(" No ");
  //   }

  // ternary operator
  // condtion ? if true : if false

  name == "amit" ? console.log(name) : n.value = "amit";
});
