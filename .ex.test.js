import * as ex01 from './ex-01-variaveis-nomes.js'
import * as ex02 from './ex-02-variaveis-tipos.js'
import * as ex03 from './ex-03-variaveis-escopo.js'
import * as ex04 from './ex-04-operadores-aritmeticos.js'
import * as ex05 from './ex-05-operadores-logicos.js'

let pontos = {
  ex01: {
    q1: { pass: false, name: "Questão 1" }, q2: { pass: false, name: "Questão 2" }, 
    q3: { pass: false, name: "Questão 3" }, q4: { pass: false, name: "Questão 4" }, 
    q5: { pass: false, name: "Questão 5" }, q6: { pass: false, name: "Questão 6" }, 
    q7: { pass: false, name: "Questão 7" }, q8: { pass: false, name: "Questão 8" }, 
    q9: { pass: false, name: "Questão 9" }, q10: { pass: false, name: "Questão 10" }, 
    q11: { pass: false, name: "Questão 11" }, q12: { pass: false, name: "Questão 12" }, 
    q13: { pass: false, name: "Questão 13" }, q14: { pass: false, name: "Questão 14" }, 
    q15: { pass: false, name: "Questão 15" }, q16: { pass: false, name: "Questão 16" }, 
    q17: { pass: false, name: "Questão 17" }, q18: { pass: false, name: "Questão 18" }, 
    q19: { pass: false, name: "Questão 19" }, q20: { pass: false, name: "Questão 20" },
    total: 0,
  },
  ex02: {
    q1: { pass: false, name: "Questão 1" }, q2: { pass: false, name: "Questão 2" }, 
    q3: { pass: false, name: "Questão 3" }, q4: { pass: false, name: "Questão 4" }, 
    q5: { pass: false, name: "Questão 5" }, q6: { pass: false, name: "Questão 6" }, 
    q7: { pass: false, name: "Questão 7" }, q8: { pass: false, name: "Questão 8" }, 
    q9: { pass: false, name: "Questão 9" }, q10: { pass: false, name: "Questão 10" }, 
    q11: { pass: false, name: "Questão 11" }, q12: { pass: false, name: "Questão 12" }, 
    q13: { pass: false, name: "Questão 13" }, q14: { pass: false, name: "Questão 14" }, 
    q15: { pass: false, name: "Questão 15" }, q16: { pass: false, name: "Questão 16" }, 
    q17: { pass: false, name: "Questão 17" }, q18: { pass: false, name: "Questão 18" }, 
    q19: { pass: false, name: "Questão 19" }, q20: { pass: false, name: "Questão 20" },
    total: 0,
  },
  ex03: {
    q1: { pass: false, name: "Questão 1" }, q2: { pass: false, name: "Questão 2" }, 
    q3: { pass: false, name: "Questão 3" }, q4: { pass: false, name: "Questão 4" }, 
    q5: { pass: false, name: "Questão 5" }, q6: { pass: false, name: "Questão 6" }, 
    q7: { pass: false, name: "Questão 7" }, q8: { pass: false, name: "Questão 8" }, 
    q9: { pass: false, name: "Questão 9" }, q10: { pass: false, name: "Questão 10" }, 
    total: 0,
  },
  ex04: {
    q1: { pass: false, name: "Questão 1" }, q2: { pass: false, name: "Questão 2" }, 
    q3: { pass: false, name: "Questão 3" }, q4: { pass: false, name: "Questão 4" }, 
    q5: { pass: false, name: "Questão 5" }, q6: { pass: false, name: "Questão 6" }, 
    q7: { pass: false, name: "Questão 7" }, q8: { pass: false, name: "Questão 8" }, 
    q9: { pass: false, name: "Questão 9" }, q10: { pass: false, name: "Questão 10" }, 
    q11: { pass: false, name: "Questão 11" }, q12: { pass: false, name: "Questão 12" }, 
    q13: { pass: false, name: "Questão 13" }, q14: { pass: false, name: "Questão 14" }, 
    q15: { pass: false, name: "Questão 15" }, q16: { pass: false, name: "Questão 16" }, 
    q17: { pass: false, name: "Questão 17" }, q18: { pass: false, name: "Questão 18" }, 
    q19: { pass: false, name: "Questão 19" }, q20: { pass: false, name: "Questão 20" },
    total: 0,
  },
  ex05: {
    q1: { pass: false, name: "Questão 1" }, q2: { pass: false, name: "Questão 2" }, 
    q3: { pass: false, name: "Questão 3" }, q4: { pass: false, name: "Questão 4" }, 
    q5: { pass: false, name: "Questão 5" }, q6: { pass: false, name: "Questão 6" }, 
    q7: { pass: false, name: "Questão 7" }, q8: { pass: false, name: "Questão 8" }, 
    q9: { pass: false, name: "Questão 9" }, q10: { pass: false, name: "Questão 10" }, 
    total: 0,
  },
}

function testEx01() {
  console.log("Avaliando atividades do exercício 01...")

  const varNames = [
    "funcaoImportante", "ClientesDoSalao", "proximaEtapa", "dataEHorario",
    "videoAula", "arquivoPrincipal", "ComodosDaCasa", "quatroRodas",
    "cincoPowerRangers", "puroAco", "cemReaisEmBarrasDeOuro", "paginaInicial",
    "cincoPatinhosForamPassear", "umBesouro", "RoupasJuninas", "calculosMatematicos",
    "camaMesaEBanho", "precoDoProduto", "codigoFonte", "CaboFrio",
  ]

  varNames.map(function(name, i) {
    if (ex01[name]) { pontos.ex01[`q${i+1}`].pass = true }
  })

  for (const [q, _] of Object.entries(pontos.ex01)) {
    if (pontos.ex01[q].pass === true) {
      pontos.ex01.total += 1
    }
  }

  console.log("Avaliação do exercício 01 concluída!\n")
}

function testEx02() {
  console.log("Avaliando atividades do exercício 02...")

  const varNames = [
    "musicaFavorita", "objetoQualquer", "valorIndefinido",
    "tartarugasVoamVerdadeOuNao", "noveDivididoPorTres",
    "papagaiosFalamVerdadeOuNao", "umaFuncao", "cemDivididoPorCinco",
    "nomeDaSuaEscola", "quinzeMaisCinco", "valorFalso",
    "dezMaisQuatro", "nomeDoSeuEstado", "artistaFavorito",
    "seteVezesSete", "umMaiorQueDoisVerdadeOuNao", "comidaFavorita",
    "oCeuEhAzulVerdadeOuNao", "objetoNulo", "valorVerdadeiro",
  ]

  const varTypes = [
    "string", "object", "undefined", "boolean", "number",
    "boolean", "function", "number", "string", "number",
    "boolean", "number", "string", "string", "number",
    "boolean", "string", "boolean", "object", "boolean"
  ]

  varNames.map(function(name, i) {
    if (typeof(ex02[name]) === varTypes[i]) { 
      pontos.ex02[`q${i+1}`].pass = true 
    }
  })

  for (const [q, _] of Object.entries(pontos.ex02)) {
    if (pontos.ex02[q].pass === true) {
      pontos.ex02.total += 1
    }
  }

  console.log("Avaliação do exercício 02 concluída!\n")
}

function testEx03() {
  console.log("Avaliando atividades do exercício 03...")

  const varNames = [
    "resposta01", "resposta02", "resposta03", "resposta04",
    "resposta05", "resposta06", "resposta07", "resposta08",
    "resposta09", "resposta10",
  ]

  const varValues = [
    true, false, false, true, true,
    false, false, false, false, true,
  ]

  varNames.map(function(name, i) {
    if (ex03[name] === varValues[i]) { 
      pontos.ex03[`q${i+1}`].pass = true 
    }
  })

  for (const [q, _] of Object.entries(pontos.ex03)) {
    if (pontos.ex03[q].pass === true) {
      pontos.ex03.total += 1
    }
  }

  console.log("Avaliação do exercício 03 concluída!\n")
}

function testEx04() {
  console.log("Avaliando atividades do exercício 04...")

  /*
  const trintaENove = 44 - 10 + 5
  const centoESessentaEUm = (13 ** 2) - 8
  const trintaECinco = 7 * 5
  const centoEVinteESeis = (22 * 6) - (24 / 4)
  const oitentaEQuatro = (200 / 4) + 34
  const sessentaEQuatro = 2 ** (2 * 3)
  const vinteETres = 18 + (33 % 7)
  const dezenove = 38 / 2
  const centoETrinta = (41 * 3) + (21 / 3)
  const quinze = 30 / 3 + 5
  const quarentaETres = 86 / (12 % 5)
  const trinta = 6 * 5
  const sessentaETres = (125 / 5) + 38
  const vinteEDois = 11 * 2
  const quarentaEOito = (2 ** 3) * 6
  const trintaETres = 66 / 2
  const quarentaECinco = (3 ** 2) * 5
  const oitentaENove = (9 * 10) - (5 / 5)
  const quarentaESeis = 23 * (7 % 5)
  const centoEOitentaEQuatro = 23 * (2 * 4)
  */

  const varNames = [
    "trintaENove", "centoESessentaEUm", "trintaECinco", "centoEVinteESeis",
    "oitentaEQuatro", "sessentaEQuatro", "vinteETres", "dezenove",
    "centoETrinta", "quinze", "quarentaETres", "trinta",
    "sessentaETres", "vinteEDois", "quarentaEOito", "trintaETres",
    "quarentaECinco", "oitentaENove", "quarentaESeis", "centoEOitentaEQuatro",
  ]

  const varValues = [
    39, 161, 35, 126, 84, 64, 23, 19, 130, 15,
    43, 30, 63, 22, 48, 33, 45, 89, 46, 184
  ]

  varNames.map(function(name, i) {
    if (ex04[name] === varValues[i]) { 
      pontos.ex04[`q${i+1}`].pass = true 
    }
  })

  for (const [q, _] of Object.entries(pontos.ex04)) {
    if (pontos.ex04[q].pass === true) {
      pontos.ex04.total += 1
    }
  }

  console.log("Avaliação do exercício 04 concluída!\n")
}

function testEx05() {
  console.log("Avaliando atividades do exercício 05...")

  const varNames = [
    "resposta01", "resposta02", "resposta03", "resposta04",
    "resposta05", "resposta06", "resposta07", "resposta08",
    "resposta09", "resposta10",
  ]

  varNames.map(function(name, i) {
    if (ex05[name] === true) { 
      pontos.ex05[`q${i+1}`].pass = true 
    }
  })

  for (const [q, _] of Object.entries(pontos.ex05)) {
    if (pontos.ex05[q].pass === true) {
      pontos.ex05.total += 1
    }
  }

  console.log("Avaliação do exercício 05 concluída!\n")
}

function printResults(ex, exNum, qty) {

  if (pontos[ex].total >= qty) { 
    console.log(`Exercício ${exNum}: Concluído com sucesso!\n`)
    return 2
  } else {
    console.log(`Exercício ${exNum}: A quantidade de pontos para o exercício ${exNum} não foi suficiente.`)
    console.log(`De ${qty} questões necessárias ${pontos.ex01.total} estão corretas.`)
    let wrong = []
    for (const [q, _] of Object.entries(pontos[ex])) {
      if (pontos[ex][q].pass === false) { wrong.push(" " + pontos[ex][q].name)}
    }
    console.log(`Questões erradas:${wrong}\n`)
    if (pontos[ex].total > 0) {
      return (2 * pontos[ex].total) / qty
    } else {
      return 0
    }
  }

}

function runTests() {
  testEx01()
  testEx02()
  testEx03()
  testEx04()
  testEx05()

  const ptEx01 = printResults("ex01", "1", 10)
  const ptEx02 = printResults("ex02", "2", 10)
  const ptEx03 = printResults("ex03", "3", 5)
  const ptEx04 = printResults("ex04", "4", 10)
  const ptEx05 = printResults("ex05", "5", 5)

  const total = ptEx01 + ptEx02 + ptEx03 + ptEx04 + ptEx05
  console.log(`Nota final: ${total}`)
}

runTests()
