const pull = document.getElementById("pull");
pull.addEventListener("click", function () {
  let user = document.getElementById("user");
  //    let box = document.getElementById("box");
  //    box.classList.add("test");
  //    user.setAttribute("value" , "amit")
  // console.log(user);
  let types = user.type;
  console.log(types);
  user.type === "password" ? (user.type = "text") : (user.type = "password");
});
