$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
    });

    $('.menu').click(function() {

        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email:{
                required: true,
                email: true
            },
            tel:{
                required: true
            },
            veiculointeresse: {
                required: true
            }
        },
        messages:{
            nome: 'Por favor, informe seu nome',
            email: 'Por favor, informe um e-mail válido',
            tel: 'Por favor, informe um telefone para contato',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
/*ESSE É INTERESSANTE. ELE FAZ COM QUE AO CLICAR EM INTERESSE ELE TE LEVA ATÉ O FORMULÁRIO*/

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})