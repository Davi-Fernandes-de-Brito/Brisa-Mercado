
export function construirCard(produto) {
    const card = document.createElement("article")
    card.classList.add("card-produto")

    const imagem = document.createElement("img")
    imagem.classList.add("produto-imagem")
    imagem.src = produto.image
    imagem.alt = produto.title

    const info = document.createElement("div")
    info.classList.add("produto-info")

    const nome = document.createElement("h2")
    nome.classList.add("produto-nome")
    nome.textContent = produto.title

    const descricao = document.createElement("p")
    descricao.classList.add("produto-descricao")
    descricao.textContent = produto.description

    const preco = document.createElement("span")
    preco.classList.add("produto-preco")
    preco.textContent = `Preço: ${Number(produto.price).toFixed(2)}`

    const botao = document.createElement("button")
    botao.classList.add("produto-botao")
    botao.type = "button"
    botao.textContent = "Comprar"

    info.appendChild(nome)
    info.appendChild(descricao)
    info.appendChild(preco)
    info.appendChild(botao)
    card.appendChild(imagem)
    card.appendChild(info)
    return card
}
