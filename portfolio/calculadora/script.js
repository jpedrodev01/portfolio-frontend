const visor = document.getElementById('display');
const operadores = ['+', '-', 'x', '*', '/'];

function limparVisor() {
    visor.textContent = '';
}

function apagarUltimo() {
    visor.textContent = visor.textContent.slice(0, -1);
}

function calcular() {
    try {
        let expressao = visor.textContent.replace(/x/g, '*');
        visor.textContent = eval(expressao);
    } catch {
        visor.textContent = 'Erro';
    }
}

function adicionarCaracter(caractere) {
    const ultimoChar = visor.textContent.slice(-1);

    if (operadores.includes(caractere)) {
        if (visor.textContent === '' && caractere !== '-') {
            return;
        }
        if (operadores.includes(ultimoChar)) {
            visor.textContent = visor.textContent.slice(0, -1);
        }
    }

    visor.textContent += caractere;
}

document.querySelectorAll('.btn').forEach(botao => {
    botao.addEventListener('click', () => {
        const acao = botao.getAttribute('aria-label');
        const texto = botao.textContent;

        switch(acao) {
            case 'Clear':
                limparVisor();
                break;
            case 'Backspace':
                apagarUltimo();
                break;
            case 'Equals':
                calcular();
                break;
            default:
                adicionarCaracter(texto);
        }
    });
});

document.addEventListener('keydown', (event) => {
    const tecla = event.key;
    const teclasValidas = ['0','1','2','3','4','5','6','7','8','9', '+', '-', '*', '/', '.', 'Enter', 'Backspace', 'Delete'];

    if (!teclasValidas.includes(tecla)) {
        return;
    }

    event.preventDefault();

    switch(tecla) {
        case 'Delete':
            limparVisor();
            break;
        case 'Backspace':
            apagarUltimo();
            break;
        case 'Enter':
            calcular();
            break;
        default:
            if (tecla === '*') {
                adicionarCaracter('x');
            } else {
                adicionarCaracter(tecla);
            }
    }
});
