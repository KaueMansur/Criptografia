const palavraSemCriptografia = document.getElementById("palavra_sem_cripto")
const palavraComCriptografia = document.getElementById("palavra_com_cripto")
const btnCriptografar = document.getElementById("btn_criptografar")
const nomeCriptografia = document.getElementById("nome_criptografia")
const btnDescriptografar = document.getElementById("btn_descriptografar")
const formCriarCripto = document.getElementById("form_criar_cripto")
const btnCriarCriptografia = document.getElementById("criar_criptografia")

let cod;

let key = 1;

const alfabeto = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç", ",", "?", "!", "$", "%", ":", ";", ".", '"', "'", "@", "#", "&", "*", "(", ")", "{", "}", "[", "]", "¨", "+", "-", "_", "=", "<", ">", "/", "\\", "|", "´", "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ç"]

const criptos = [
    nones = [" ", "!", ";", '"', "#", "\\", "%", "$", "&", "`", "*", "(", ")", "?", ",", "Y", "W", "+", "=", "@", "/", "E", ":", "x", "'", "_", "-", "W", "N", "M", "^", "F", "V", "B", "", ".", "L", "U"],
    codigoBinario = ["00100000", "01100001", "01100010", "01100011", "01100100", "01100101", "01100110", "01100111", "01101000", "01101001", "01101010", "01101011", "01101100", "01101101", "01101110", "01101111", "01110000", "01110001", "01110010", "01110011", "01110100", "01110101", "01110110", "01110111", "01111000", "01111001", "01111010", "00101100", "00111111", "00100001", "00100100", "00100101", "00111010", "00111011", "00101110", "00100010", "00100111"],
    codigoMorse = [
        " / ",           // Espaço (usado para separar palavras)
        ".- ",          // a
        "-... ",        // b
        "-.-. ",        // c
        "-.. ",         // d
        ". ",           // e
        "..-. ",        // f
        "--. ",         // g
        ".... ",        // h
        ".. ",          // i
        ".--- ",        // j
        "-.- ",         // k
        ".-.. ",        // l
        "-- ",          // m
        "-. ",          // n
        "--- ",         // o
        ".--. ",        // p
        "--.- ",        // q
        ".-. ",         // r
        "... ",         // s
        "- ",           // t
        "..- ",         // u
        "...- ",        // v
        ".-- ",         // w
        "-..- ",        // x
        "-.-- ",        // y
        "--.. ",        // z
        "-.-.. ",       // ç
        "--..-- ",      // ,
        "..--.. ",      // ?
        "-.-.-- ",      // !
        "...-..- ",     // $
        "",            // % (sem padrão oficial)
        "---... ",      // :
        "-.-.-. ",      // ;
        ".-.-.- ",      // .
        ".-..-. ",      // "
        ".----. ",      // '
        ".--.-. ",      // @
        "",            // # (sem padrão oficial)
        ".-... ",       // &
        "",            // * (sem padrão oficial)
        "-.--. ",       // (
        "-.--.- ",      // )
        "",            // {
        "",            // }
        "",            // [
        "",            // ]
        "",            // ¨
        ".-.-. ",       // +
        "-....- ",      // -
        "..--.- ",      // _
        "-...- ",       // =
        "",            // <
        "",            // >
        "-..-. ",       // /
        "",            // \
        "",            // |
        "",            // ´
        "",            // `
        ".---- ",       // 1
        "..--- ",       // 2
        "...-- ",       // 3
        "....- ",       // 4
        "..... ",       // 5
        "-.... ",       // 6
        "--... ",       // 7
        "---.. ",       // 8
        "----. ",       // 9
        "----- ",       // 0
        ".- ",          // A
        "-... ",        // B
        "-.-. ",        // C
        "-.. ",         // D
        ". ",           // E
        "..-. ",        // F
        "--. ",         // G
        ".... ",        // H
        ".. ",          // I
        ".--- ",        // J
        "-.- ",         // K
        ".-.. ",        // L
        "-- ",          // M
        "-. ",          // N
        "--- ",         // O
        ".--. ",        // P
        "--.- ",        // Q
        ".-. ",         // R
        "... ",         // S
        "- ",           // T
        "..- ",         // U
        "...- ",        // V
        ".-- ",         // W
        "-..- ",        // X
        "-.-- ",        // Y
        "--.. ",        // Z
        "-.-.. "        // Ç
    ]
]
let palavraDividida = []

let palavraCriptografada = ""

let palavra = ""

if (localStorage.getItem("criptografia")) {
    const newSelect = document.createElement("option")
    newSelect.document.setAttribute("value", "new_cripto")
    newSelect.textContent = "Sua Cripto"
}

function criarInputs() {
    alfabeto.forEach((letra, index) => {
        const divLetra = document.createElement("div")
        divLetra.setAttribute("id", `div_letra_${index}`)
        divLetra.setAttribute("class", "div_letra")

        formCriarCripto.appendChild(divLetra)

        const labelLetra = document.createElement("label")
        labelLetra.textContent = letra
        labelLetra.setAttribute("class", "label_letra")

        divLetra.appendChild(labelLetra)

        const inputLetra = document.createElement("input")
        inputLetra.setAttribute("id", `input_letra_${index}`)
        inputLetra.setAttribute("class", "input_letra")
        inputLetra.setAttribute("type", "text")

        divLetra.appendChild(inputLetra)
    })
}

function criarCriptografia() {
    const newCripto = []

    alfabeto.forEach((letra, index) => {
        newCripto.push(document.getElementById(`input_letra_${index}`).value)
    })
    console.log(newCripto)
    localStorage.setItem("criptografia", newCripto)
}

function definirCripto(palavraCripto) {
    if (nomeCriptografia.value == "nones") {
        return criptos[0]

    } else if (nomeCriptografia.value == "codigo_binario") {
        key = 8
        return criptos[1]
    } else {
        return criptos[2];
        // return localStorage.getItem("criptografia")
    }
}

function separarLetras(palavraV, numeroDeCaracteres) {
    let i2 = 0
    for (i = 0; i < palavraV.length; i++) {
        palavraDividida.push(palavraV.substring(i2, (i2 + numeroDeCaracteres)))
        i2 += numeroDeCaracteres
    }
}

function desCriptografar() {
    palavraDividida.forEach((letra) => {
        for (i = 0; i < cod.length; i++) {
            if (letra == cod[i]) {
                palavra += alfabeto[i]
            }
        }
    })
    return palavra
}

function criptografar() {
    palavraDividida.forEach((letra) => {
        for (i = 0; i < alfabeto.length; i++) {
            if (letra == alfabeto[i]) {
                palavraCriptografada += cod[i]
                console.log(cod)
                console.log(cod[i])
            }
        }
    })
    return palavraCriptografada
}

btnCriptografar.addEventListener("click", () => {

    palavraCriptografada = ""
    palavraDividida = []
    palavra = palavraSemCriptografia.value

    cod = definirCripto()

    separarLetras(palavra, 1)

    palavraComCriptografia.value = criptografar()
})

btnDescriptografar.addEventListener("click", () => {
    palavra = ""
    palavraDividida = []
    palavraCriptografada = palavraComCriptografia.value

    cod = definirCripto()

    separarLetras(palavraCriptografada, key)

    palavraSemCriptografia.value = desCriptografar()

})

// btnCriarCriptografia.addEventListener("click", criarCriptografia)