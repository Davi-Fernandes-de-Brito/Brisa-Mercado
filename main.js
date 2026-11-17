import { verificarCep } from "./module/verificarcep.js"
import { autenticarUsuario } from "./module/autenticarUsuario.js"
import { construirCard } from "./module/construirCard.js"

const formNome = document.querySelector("#nome")
const formSobrenome = document.querySelector("#sobrenome")
const formEmail = document.querySelector("#email")
const formSenha = document.querySelector("#senha")
const formTelefone = document.querySelector("#telefone")
const formNascimento = document.querySelector("#data-nascimento")
const formCadastro = document.querySelector(".formCadastro")
const formCep = document.querySelector("#cep")
const formCidade = document.querySelector("#cidade")
const formBairro = document.querySelector("#bairro")
const formRua = document.querySelector("#rua")
const formLogin = document.querySelector(".formLogin")
const home = document.querySelector(".container-produtos")
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

if (formCadastro) {
verificarCep()
formCadastro.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const usuarioExistente = usuarios.find(usuario => 
    usuario.email.toLowerCase() === formEmail.value.trim().toLowerCase()
    )
    if (usuarioExistente) {
        alert("Este e-mail já está cadastrado!")
        return
    }
    const usuario = {
    nome: formNome.value,
    sobrenome: formSobrenome.value,
    email: formEmail.value,
    senha: formSenha.value,
    telefone: formTelefone.value,
    nascimento: formNascimento.value,
    cep: formCep.value,
    cidade: formCidade.value,
    bairro: formBairro.value,
    rua: formRua.value
    }
    usuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    window.location.href = "home.html"
})
}

if (formLogin) {
formLogin.addEventListener("submit", (evento) => {
    evento.preventDefault()
    const usuarioEncontrado = autenticarUsuario(usuarios,
        formEmail.value,
        formSenha.value
    )
    if(usuarioEncontrado){
        window.location.href = "home.html"
    }
    else{
        alert("E-mail ou senha incorretos!")
    }
})
}

if(home){
const listaProdutos = document.querySelector("#lista-produtos")
async function carregarProdutos() {
    try {
        const resposta = await fetch("https://fakestoreapi.com/products")
        if (!resposta.ok) {
            throw new Error("Erro ao buscar produtos.")
        }
        const produtos = await resposta.json()
        for (const produto of produtos) {
            const card = construirCard(produto)
            listaProdutos.appendChild(card)
        }
    } catch (erro) {
        console.error("Erro:", erro)
        listaProdutos.textContent = "Não foi possível carregar os produtos."
    }
}
if (listaProdutos) {
    carregarProdutos()
}
}