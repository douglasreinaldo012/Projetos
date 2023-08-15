$(document).ready(function(){
    cardapio.eventos.init();
})
var cardapio = {};
cardapio.eventos = {
    init:() => {
        cardapio.metodos.obterItensCardapio();
    }
}
cardapio.metodos = {
    /*anotações 
    -$.each funciona como um "for"
    -a função "obterItensCardapio()"obtem a lista dos itens do cardapio
    -replace é para substituir para item atual
    -para adicionar algo no arquivo index usa-se $("#itensCardapio").append(temp)
    -a função toFixed e para utilizar duas casa após a virgula
    -a função .replace após o toFixed é para substituir o ponto pel virgula
    -$("#itensCardapio").html('') e usado para limpar os intens quando for chamado outras listas*/
    obterItensCardapio: (categoria = 'burgers') => {
        var filtro = MENU[categoria];
        $("#itensCardapio").html('')
        $.each(filtro, (i, e) => {
            let temp = cardapio.templates.item.replace(/\${img}/g,e.img)
            .replace(/\${preco}/g,e.price.toFixed(2).replace('.',','))
            .replace(/\${nome}/g,e.name);
        
            $("#itensCardapio").append(temp)
        })
        //remove a class ativo
        $(".container-menu a").removeClass('active');
        //adiciona ativo em outro menu
        $("#menu-" + categoria).addClass('active');
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
`}