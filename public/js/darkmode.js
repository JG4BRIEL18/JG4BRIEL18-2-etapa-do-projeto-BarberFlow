// botão dark mode
const botao = document.getElementById("darkToggle");

// verifica preferência salva
if(localStorage.getItem("modo") === "dark"){
    document.body.classList.add("dark");
    botao.textContent = "Modo Claro ☀️";
}

// alterna dark mode
botao.addEventListener("click", function(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo","dark");
        botao.textContent = "Modo Claro ☀️";
    }else{
        localStorage.setItem("modo","light");
        botao.textContent = "Modo Noturno 🌙";
    }
});