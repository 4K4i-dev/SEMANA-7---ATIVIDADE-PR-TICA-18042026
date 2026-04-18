// 1. Dados iniciais
let nome = prompt("Qual o seu nome?");

// Função auxiliar para validar se a entrada é um número válido
function lerNumero(mensagem) {
    let valor = prompt(mensagem);
    while (isNaN(valor) || valor === "" || valor === null) {
        valor = prompt("Valor inválido! Por favor, digite apenas números para: " + mensagem);
    }
    return Number(valor);
}

let rendaMensal = lerNumero("Informe sua renda mensal:");
let qtdDespesas = lerNumero("Quantas despesas deseja informar? (Mínimo 1, Máximo 5)");

// Regra de limite entre 1 e 5
if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

// 3. Lançamento de despesas com for
let totalDespesas = 0;
for (let i = 1; i <= qtdDespesas; i++) {
    let valorDespesa = lerNumero("Informe o valor da despesa " + i + ":");
    totalDespesas += valorDespesa;
}

// 4. Análise com if / else
let classificacao = "";
let sobra = rendaMensal - totalDespesas;

if (totalDespesas > rendaMensal) {
    classificacao = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    let margem30 = rendaMensal * 0.3;
    if (sobra >= margem30) {
        classificacao = "✅ Ótimo: boa margem de sobra.";
    } else {
        classificacao = "🙂 Ok: dá para melhorar a sobra.";
    }
}

// 5. Saída final formatada
let resultadoFinal = `
--- RESUMO DO ORÇAMENTO ---
Usuário: ${nome}
Renda: R$ ${rendaMensal.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Status: ${classificacao}
---------------------------
`;

// Exibição
alert(resultadoFinal);
console.log(resultadoFinal);