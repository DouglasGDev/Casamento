(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    function calcularTempoRestante() {
        const agora = new Date();
        const dataCasamento = new Date(2025, 3, 26, 16, 30, 0); // 26 de abril de 2025 às 16:30 (agora o mês está correto)
        const tempoRestante = dataCasamento - agora;
    
        if (tempoRestante <= 0) {
            $('#contador').text("O grande dia chegou! 🎉");
            return;
        }
    
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
    
        // Atualiza o contador com animação de "giro" no estilo bomba de combustível
        $('#dias').html(`<span>${dias}</span>`);
        $('#horas').html(`<span>${horas}</span>`);
        $('#minutos').html(`<span>${minutos}</span>`);
        $('#segundos').html(`<span>${segundos}</span>`);
    
        setTimeout(calcularTempoRestante, 1000);
    }
    
    $(document).ready(function() {
        calcularTempoRestante();
    });

    function enviarMensagem() {
        var nome = document.getElementById('nome').value.trim(); // Pega o valor do campo nome
    
        if (nome) {
            var mensagem = "Oi meu nome é " + nome + " e vim confirmar a minha presença no casamento."; // Formata a mensagem
            var numero = "556696223775"; // Número de telefone para o qual a mensagem será enviada
            var whatsappURL = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem); // Cria o link para enviar a mensagem via WhatsApp
            
            window.open(whatsappURL, "_blank"); // Abre o WhatsApp com a mensagem predefinida
        } else {
            alert("Por favor, insira seu nome antes de confirmar presença.");
        }
    }
    
    // Adiciona o evento de clique ao botão quando o DOM estiver pronto
    document.getElementById('confirmar-btn').addEventListener('click', enviarMensagem);   
    
    
})(jQuery);

