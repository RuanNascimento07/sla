// Validações individuais que retornam true ou false

function validarNome(nome) {
    return /^[A-Za-zÀ-ÿ\s]+$/.test(nome.trim());
}

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0, resto;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

function validarTelefone(tel) {
    return /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(tel);
}

function validarEmail(email) {
    // Usa validação básica de email via regex simples
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarCEP(cep) {
    return /^\d{5}-?\d{3}$/.test(cep);
}

function validarEstado(estado) {
    return /^[A-Za-z]{2}$/.test(estado.trim());
}

function validarNaoVazio(valor) {
    return valor.trim() !== '';
}

function validarNumero(numero) {
    return Number(numero) > 0;
}

// Função principal para validar todos os campos, retorna true se OK
function validarFormulario(form) {
    if (!validarNome(form.nome.value)) {
        alert('Nome inválido. Use apenas letras e espaços.');
        form.nome.focus();
        return false;
    }
    if (!validarCPF(form.cpf.value)) {
        alert('CPF inválido.');
        form.cpf.focus();
        return false;
    }
    if (!validarTelefone(form.telefone.value)) {
        alert('Telefone inválido. Formato esperado: (99) 99999-9999');
        form.telefone.focus();
        return false;
    }
    if (!validarEmail(form.email.value)) {
        alert('Email inválido.');
        form.email.focus();
        return false;
    }
    if (!validarCEP(form.cep.value)) {
        alert('CEP inválido. Use o formato 12345-678');
        form.cep.focus();
        return false;
    }
    if (!validarNaoVazio(form.rua.value)) {
        alert('Rua é obrigatória.');
        form.rua.focus();
        return false;
    }
    if (!validarNumero(form.numero.value)) {
        alert('Número deve ser maior que zero.');
        form.numero.focus();
        return false;
    }
    if (!validarNaoVazio(form.bairro.value)) {
        alert('Bairro é obrigatório.');
        form.bairro.focus();
        return false;
    }
    if (!validarNaoVazio(form.cidade.value)) {
        alert('Cidade é obrigatória.');
        form.cidade.focus();
        return false;
    }
    if (!validarEstado(form.estado.value)) {
        alert('Estado inválido. Use a sigla de duas letras, ex: SP');
        form.estado.focus();
        return false;
    }

    return true;  // Tudo OK
}

// Event listener para o envio do formulário
document.getElementById('formCliente').addEventListener('submit', function(e) {
    e.preventDefault();

    if (validarFormulario(this)) {
        alert('Formulário enviado com sucesso!');
        // Aqui pode enviar para backend ou fazer o submit de verdade
        // this.submit();
    }
});
