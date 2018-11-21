//Em um middle ou eu respondo a requisição ou eu chamo o NEXT

module.exports = function(req, res, next) { //Isso é um MIDDLEWARE
    res.header('Access-Control-Allow-Origin', '*') //Passo os endereçes dos clientes que podem consumir a API
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') //Metodos do HTTP aceitos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content')
    next() //Continua o fluxo da aplicação. Sem ele a aplicação vai parar aqui
}
//Estou trabalhando com a resposta
//Estou adicionando cabeçalhos as respostas que serão enviadas para o Browser para dizer que é permitido acessar o serviço que o usuário está acesssando

//Pesquisar quais são os cabeçalhos dos CORS