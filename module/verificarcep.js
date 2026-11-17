export function verificarCep(){
    const formCep = document.querySelector("#cep")
    const formCidade = document.querySelector("#cidade")
    const formBairro = document.querySelector("#bairro")
    const formRua = document.querySelector("#rua")
    formCep.addEventListener("change", async () => {
        const cep = formCep.value
        if (cep.length !== 8) {
            return formCep.value = "CEP INVÁLIDO!"
        }
        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            if (!resposta.ok) {
                throw new Error("Falha ao consultar a API.")
            }
            const dados = await resposta.json()
            if (dados.erro) {
                throw new Error("CEP não encontrado!")
            }
            formCidade.value = dados.localidade
            formBairro.value = dados.bairro
            formRua.value = dados.logradouro
        } catch (erro) {
            alert(erro.message)
            console.error("Erro na consulta do CEP:", erro)
        }
    })
}
