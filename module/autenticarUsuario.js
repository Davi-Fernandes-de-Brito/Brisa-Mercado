export function autenticarUsuario(usuarios, emailDigitado, senhaDigitada){
    const usuarioEncontrado = usuarios.find(usuario => 
    usuario.email.toLowerCase() === emailDigitado.trim().toLowerCase()
    && usuario.senha === senhaDigitada
    )
    return usuarioEncontrado
}