const nome = "Leticia";
const idade = 15;
const cidade = "Londrina"
const hobby = "ballet"
const tempo = 12

console.log("Olá, meu nome é Leticia, tenho 15 anos e nasci em Londrina. Meu hobby é dançar ballet e danço a 12 anos. ");
console.log(nome, idade, cidade, hobby, tempo);


const idadeEmDias = idade * 365
console.log("Minha idade em dias é: " + idadeEmDias)
const idadeEmMeses = idade * 12
console.log("Minha idade em meses é: " + idadeEmMeses)
const tempoEmDias = tempo * 365
console.log("Meu tempo em dias é: " + tempoEmDias)


const precoUnit = 20
const qtde = 20 
const subtotal = precoUnit * qtde;
const valorMinimoPraTerDesconto = 100;
const temDesconto = subtotal > valorMinimoPraTerDesconto

const cidadeCliente = "Londrina"
const cidadeLoja = "Londrina"

const freteGratis = temDesconto && (cidadeCliente == cidadeLoja)

const resultado = `Subtotal: R$ ${subtotal}\n
Tem desconto: $temDesconto\n
Frete grátis: ${freteGratis}`

console.log(resultado)

console.log (temDesconto)


