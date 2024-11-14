const operacoes = require('../OperacoesController')


it('4 + 1 + 1  deve ser igual a 3', ()=>{
    const result = 6

    expect(operacoes.soma(4,1,1)).toBe(result)
})

it('40 - 10 - 5 deve ser igual a 3', ()=>{
    const result = 25

    expect(operacoes.subtracao(40,10,5)).toBe(result)
})

it('10 * 10 * 10 deve ser igual a 1000', ()=>{
    const result=1000
    expect(operacoes.multíplicacao(10,10,10)).toBe(result)
})

it ('10/10 deve ser igual a 1', ()=>{
    const result=1
    expect(operacoes.divisao(10,10)).toBe(result)
})