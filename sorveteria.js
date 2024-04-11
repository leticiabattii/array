// 1
let sabor = []
let opcao = -4
qntdSabores = 0

while (opcao != 0) {
    opcao = prompt(`======== MENU ========
    1- Adcionar sabor
    2- Remover sabor
    3- Vizualizar sorvete
    4- Finalizar pedido
    `)
    switch(opcao){
        case '1':
            sabor.push(prompt("Escolha um sabor "))
            qntdSabores++
            break
        case '2':
            if(nomes.pop(prompt("excluir um sabor "))){
                alert("Sabor removido!")
            }else{
            alert("Não existem sabores adicionados!")
        }
            break          
        case '3':
            alert(nomes.sort())
            break
        case '4':
            alert("Pedido Finalizado")
            break

    }
}