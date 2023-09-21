function adcCard(){
    var a1 = window.document.getElementById('itensCardapio');
    var no = window.prompt('Nome do devedor:');
    var valor = window.prompt('valor do emprestimo:');
    a1.innerHTML =`
    <div class="col-3 mb-3">
        <div class="card card-item" id="\${id}">
            <div class="img-produto">
                <img src="\${img}"/>
            </div>
            <p class="title-produto text-center
            mt-1">
                <b>`+no+`</b>
            </p>
            <p class="price-produto text-center mt-1">
                <b>R$ `+valor+`</b>
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