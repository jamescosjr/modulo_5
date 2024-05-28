let usuarios = [];

function adicionarUsuario(nome, email, idade) {
    const idadeNum = parseFloat(idade);
    if (!isNaN(idadeNum) && idadeNum > 0) {
        usuarios.push({ nome, email, idade: idadeNum });
        return true;
    } else {
        return false;
    }
}

function buscarPorEmail(email) {
    return usuarios.find(usuario => usuario.email === email);
}

module.exports = { adicionarUsuario, buscarPorEmail };