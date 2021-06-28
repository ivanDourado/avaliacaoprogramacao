/*desenvolver menu de microondas
pipoca -10s
macarrão-8s
carne- 15s
feijão - 12s
brigadeiro - 8s
-o usuario poderá alterar o tempo padráo, aumentando ou diminuindo de acordo com sua vontade.
se tempo > 2x o necessário, exibir 'a comida queimou';
Se tempo < 2x necessário return 'tempo insuficiente';
se é uma opção não listada return 'prato inexistente';
se o tempo for 3x maior que o necessário p/ o prato, o microondas deverá exibir 'kabuum';
ao fim de cada tarefa, o microondas deverá exibir a mensagem: 'pratopronto, bom apetite!!!'*/

function conferir (tempoComida, tempoInserido){/* inserir função conferir para impressão de mensagem condizente com o
     tempo inserido de acordo com o tempo da respectiva comida */
    if(tempoInserido < tempoComida){/* caso o tempo inserido seja menor que o tempo ideal de cozimento do alimento */
        console.log("Tempo insuficiente!")
    }
    else if (tempoInserido >2*tempoComida && tempoInserido<=3*tempoComida) {
        console.log('A comida queimou!')/* caso o tempo inserido seja maior que o dobro do tempo ideal de cozimento
         do alimento e menor ou igual a seu triplo */
    }
    else if (tempoInserido >3*tempoComida){
        console.log('kabumm!')/* caso o tempo inserido seja maior que o triplo do tempo ideal de cozimento do alimento */
    }
    else {
        console.log('Prato pronto, bom apetite!!') /* caso o tempo inserido esteja entre o tempo ideal e o seu dobro  */
    }
}

/* função microonda onde terá como parametro o tipo da comida e o tempo inserido */
/* será usado switch case pois para cada case(tipo de comida), terá um tempo ideal e será aplicada a função 'conferir'
 com o fito de diagnosticar se a comida está boa, queimou ou deu 'Kabumm' */
function microondas(comida, tempoInserido){
    

    switch(comida){

        case 'pipoca':
            tempoComida= 10;
            conferir(tempoComida, tempoInserido)
            break;
        
        case 'macarrão':
            tempoComida = 8;
            conferir(tempoComida, tempoInserido)
            break;

        case 'carne':
            tempoComida=15;
            conferir(tempoComida, tempoInserido)
            break;
            
        case 'feijão':
            tempoComida=12;
            conferir(tempoComida, tempoInserido)
            break;    

        case 'brigadeiro':
            tempoComida=8;
            conferir(tempoComida, tempoInserido)
            break;
            
        default:
            console.log('Prato inexistente!')    



    }
}


microondas('pipoca', 16);
microondas('macarrão', 17);
microondas('carne', 46);
microondas('feijão', 11);
microondas('brigadeiro', 8);
microondas('acarajé', 16);