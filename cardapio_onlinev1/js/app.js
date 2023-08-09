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
    obterItensCardapio : () => {
        var filtro = MENU['burgers'];
        console.log(filtro);
        $.each(filtro, (i, e) => {
            
            let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
            .replace(/\${nome}/g, e.name)
            .replace(/\${preco}/g, e.price)
            //parou a aula no minuto 20
            $("#itensCardapio").append(temp);
        });
    }
}
cardapio.templates = {
    item:`
    <div class="col-3 mb-3">
    <div class="card card-item">
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