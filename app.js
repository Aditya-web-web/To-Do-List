let add = document.querySelector("button");
let input = document.querySelector("input");

function addTask() {
    let value = input.value;
    if (value !== "") {
        let ul = document.querySelector("#ul");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let img = document.createElement("img");
        let li = document.createElement("li");
        let delIcon = document.createElement("img");
        
        img.src = "unchecked.png";
        img.classList.add("h-6", "w-6");
        img.style.display = "block";
        
        li.innerText = value;
        li.style.display = "block";
        
        delIcon.src = "cross.png";
        delIcon.classList.add("h-7", "w-8", "pt-2");
        delIcon.style.display = "block";
        
        div1.classList.add("flex", "justify-between");
        div2.classList.add("flex");
        
        ul.append(div1);
        div1.append(div2);
        div2.append(img, li);
        div1.append(delIcon);

        delIcon.addEventListener("click", () => {
            div1.remove();
        });

        img.addEventListener("click", () => {
            if (img.src.includes("unchecked.png")) {
                img.src = "checked.png";
                li.style.textDecoration = "line-through";
                li.style.opacity = 0.5;
            } else {
                img.src = "unchecked.png";
                li.style.textDecoration = "none";
                li.style.opacity = 1;
            }
        });

        input.value = "";
    }
}

add.addEventListener("click", addTask);

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && e.keyCode === 13) {
        addTask();
    }
});
