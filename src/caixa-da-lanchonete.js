class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            cafe: { descricao: "Café", preco: 3.00 },
            chantily: { descricao: "Chantily (extra do Café)", preco: 1.50 },
            suco: { descricao: "Suco: Natural", preco: 6.20 },
            sanduiche: { descricao: "Sanduíche", preco: 6.50 },
            queijo: { descricao: "Queijo (extra do Sanduíche)", preco: 2.00 },
            salgado: { descricao: "Salgado", preco: 7.25 },
            combo1: { descricao: "1 Suco e 1 Sanduíche", preco: 9.50 },
            combo2: { descricao: "1 Café e 1 Sanduíche", preco: 7.50 }
        };
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        if (!itens || itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        let resultadoEsperado = 0;
        let principais = 0;
        let extras = 0;

        for (const item of itens) {
            if (!this.cardapio[item]) {
                return "Item inválido!";
            }

            if (item === "chantily" || item === "queijo") {
                extras++;
            } else {
                principais++;
                resultadoEsperado += this.cardapio[item].preco;
            }
        }

        if (principais === 0) {
            return "Item extra não pode ser pedido sem o principal.";
        }

        if (extras === 1 && principais === 0) {
            return "Item extra não pode ser pedido sem o principal.";
        }

        if (formaDePagamento === "dinheiro") {
            resultadoEsperado *= 0.95; 
        } else if (formaDePagamento === "credito") {
            resultadoEsperado *= 1.03;
        } else {
            return "Forma de pagamento inválida!";
        }

        return `Total a pagar: R$${resultadoEsperado.toFixed(2)}. (${formaDePagamento})`;
    }
}

// Exemplo de uso
const caixa = new CaixaDaLanchonete();

console.log(caixa.calcularValorDaCompra("dinheiro", ["chantily"]));
console.log(caixa.calcularValorDaCompra("credito", ["suco", "queijo"])); 
console.log(caixa.calcularValorDaCompra("cheque", ["cafe", "batata_frita"])); 
console.log(caixa.calcularValorDaCompra("debito", [])); 
console.log(caixa.calcularValorDaCompra("credito", ["combo2"])); 


export { CaixaDaLanchonete };
