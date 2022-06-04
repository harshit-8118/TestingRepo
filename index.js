var ele = document.getElementById("inputs");
ele.addEventListener("input", ()=>{
    var target = document.getElementById("written");
    target.innerText = ele.value;
    target.style.display = "block";
})
ele.addEventListener("blur", ()=>{
    var target = document.getElementById("written");
    target.innerText = "";
    target.style.display = "hidden";
})
console.log(ele);