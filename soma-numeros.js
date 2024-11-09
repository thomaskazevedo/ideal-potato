let somaNum = 0
let num

do {
  num = parseFloat(prompt(`Insira mais um número`))
  somaNum += num
} while (num !== 0)

alert(`A soma de todos os números é: ${somaNum}`)
