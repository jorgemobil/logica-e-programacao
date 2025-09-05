// O "expect" é usado para verificar se o resultado obtido é igual ao esperado

// Importamos as funções da calculadora que vamos testar
// Essas funções foram definidas em outro arquivo (../src/calculadora.js)
const {somarDoisNumeros} = require('../src/calculadora');

// Importamos a função "expect" do framework Chai
const { expect } = require('chai');

// O "describe" serve para agrupar testes relacionados
describe('Testes da Função de Soma', function () {


    it('A função deve ser capaz de somar dois números positivos', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(5, 3);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);
    });

    it('A função deve ser capaz de somar dois numeros zeros', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(0,0);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(0);
    });

    it('A função deve ser capaz de somar dois números negativos', function () {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(-20, -15);

        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(-35);

    });

});





