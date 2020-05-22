$(document).ready(function () {

    $('.ILD-mywork-menu-all').find('span').css({
        'padding-bottom': '5px',
        'border-bottom': '3px solid #7b77c9',
        'display': 'inline-block'

    });

    $('.ILD-mywork-menu-all').on('click', function () {
        $(".ILDALL").hide();
        $(".ILDALLTITLE").find('span').css({
            'border-bottom' : 'none'
        });
        $('.ILD-mywork-menu-all').find('span').css({
            'padding-bottom': '5px',
            'border-bottom': '3px solid #7b77c9',
            'display': 'inline-block'});
        $(".ILDALL").show();

        console.log('ALL');
    });

    $('.ILD-mywork-menu-ladingPage').on('click', function () {
        $(".ILDALL").hide();
        $(".ILDALLTITLE").find('span').css({
            'border-bottom' : 'none'
        });
        $('.ILD-mywork-menu-ladingPage').find('span').css({
            'padding-bottom': '5px',
            'border-bottom': '3px solid #7b77c9',
            'display': 'inline-block'});
        $(".ILD-mywork-itens-LP").show();

        console.log('LaddingPage');
    });

    $('.ILD-mywork-menu-webDesign').on('click', function () {
        $(".ILDALL").hide();
        $(".ILDALLTITLE").find('span').css({
            'border-bottom' : 'none'
        });
        $('.ILD-mywork-menu-webDesign').find('span').css({
            'padding-bottom': '5px',
            'border-bottom': '3px solid #7b77c9',
            'display': 'inline-block'});
        $(".ILD-mywork-itens-WD").show();
        console.log('WD');
    });

    $('.ILD-mywork-menu-iconDesign').on('click', function () {
        $(".ILDALL").hide();
        $(".ILDALLTITLE").find('span').css({
            'border-bottom' : 'none'
        });
        $('.ILD-mywork-menu-iconDesign').find('span').css({
            'padding-bottom': '5px',
            'border-bottom': '3px solid #7b77c9',
            'display': 'inline-block'});

        $(".ILD-mywork-itens-IC").show();
        console.log('IC');
    });

    $('.ILD-mywork-menu-Template').on('click', function () {
        $(".ILDALL").hide();
        $(".ILDALLTITLE").find('span').css({
            'border-bottom' : 'none'
        });
        $('.ILD-mywork-menu-Template').find('span').css({
            'padding-bottom': '5px',
            'border-bottom': '3px solid #7b77c9',
            'display': 'inline-block'});

        $(".ILD-mywork-itens-TE").show();
        console.log('IC');
    });
})