$(document).ready(function () {
    cardapio.eventos.init();
})
var cardapio = {};
cardapio.eventos = {
 init: () => {
    cardapio.metodos.obterItensCardapio();
 }
}
cardapio.metodos = {
    //obtem a lista de itens do cardápio
    obterItensCardapio: (categoria = 'burgers', vermais = false) => {
        var filtro = MENU[categoria];
        console.log(filtro);
        if(!vermais){
            $("#itensCardapio").html('');
            $("#btnVerMais").removeClass('hidden');
        }
        $.each(filtro, (i, e) => {
            let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
            .replace(/\${nome}/g, e.name)
            .replace(/\${preco}/g, e.price.toFixed(2).replace('.',','))
            .replace(/\${id}/g, e.id)
            //botão ver mais foi clicado (12 itens)
            if(vermais && i >= 8 && i < 12){
                $("#itensCardapio").append(temp)
            }
            //paginação inicial (8 itens)
            if(!vermais && i < 8){
                $("#itensCardapio").append(temp)
            }
        });
        //remove o ativo
        $(".container-menu a").removeClass('active');
        //seta o menu para ativo
        $("#menu-" + categoria).addClass('active')
    },
    //clique no botão ver mais
    verMais:() => {
        var ativo = $(".container-menu a.active").attr('id').split('menu-')[1];
        cardapio.metodos.obterItensCardapio(ativo,true)
        $("#btnVerMais").addClass('hidden');
    },
    // diminuir a quantidade do item no cardapio
    diminuirQuantidade:() => {

    },
    //aumentar a quantidade do item no cardapio
    aumentarQuantidade:() => {

    }
}
cardapio.templates = {
    item:`
    <div class="col-3 mb-3">
    <div class="card card-item" id="\${id}">
        <div class="img-produto">
            <img src="\${img}"/>
        </div>
        <p class="title-produto text-center
        mt-1">
            <b>\${nome}</b>
        </p>
        <p class="price-produto text-center mt-1">
            <b>R$ \${preco}</b>
        </p>
        <div class="add-carrinho">
            <span class="btn-menos"><i class="fas fa-minus icon-menos"></i></span>
            <span class="add-numero-itens">0</span>
            <span class="btn-mais"><i class="fas fa-plus icon-plus"></i></span>
            <span class="btn btn-add"><i class="fas fa-shopping-bag"></i></span>
        </div>
    </div>
</div>
`

}