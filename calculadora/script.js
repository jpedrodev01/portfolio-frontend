// Seleciona o visor da calculadora
const visor = document.getElementById('display');

// Seleciona todos os botões e adiciona um ouvinte de clique
document.querySelectorAll('.btn').forEach(botao => {
    botao.addEventListener('click', () => {
        const acao = botao.getAttribute('aria-label');

        switch(acao) {
            case 'Clear': // Limpar visor
                visor.textContent = '';
                break;
            case 'Backspace': // Apagar último caractere
                visor.textContent = visor.textContent.slice(0, -1);
                break;
            case 'Equals': // Calcular expressão
                try {
                    let expressao = visor.textContent.replace(/x/g, '*');
                    visor.textContent = eval(expressao);
                } catch {
                    visor.textContent = 'Erro';
                }
                break;
            default: // Adicionar número ou operador ao visor
                visor.textContent += botao.textContent;
        }
    });
});
