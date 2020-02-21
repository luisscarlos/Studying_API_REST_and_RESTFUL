# API, REST e RESTFUL

## API

Acrônimo de Application Programming Interface (Interface de Programação)
é basicamente um conjunto de rotinas e padrões estabelecidos por uma
aplicação, para que outras aplicações possam utilizar as funcionalidades
desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

## REST

Um acrônimo para Representational State Transfer (Transferência de Estado
Representativo).

Será feita a transferência de dados de uma maneira simbólica, figurativa,
representativa, de maneira didática.

A transferência de dados, geralmente, usando o protocolo HTTP.

O Rest, delimita algumas obrigações nessas transferência de dados.

Resources seria então, uma entidade, um objeto.

### 6 NECESSIDADES (constraints) para ser RESTful

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor),
dessa forma, poderemos ter uma portabilidade do nosso sistema, usando React
para WEB e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter
todas as informações necessárias para o servidor entender e responder (RESPONSE)
a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas
as requisições, para saber se aquele usuário está autenticado e apto a usar os
serviços, e o servidor não pode lembrar que o cliente foi autenticado na
requisição anterior. A melhor prática por padrão para conseguir isso é utilizar
tokens para as comunicações.

- _Cacheable_: As respostas para uma requisição, deverão ser explícitas ao dizer
se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layered System_: O cliente acessa a um endpoint, sem precisar saber da 
complexidade, de quais passos estão sendo necessários para o servidor responder
a requisição, ou quais outras camadas o servidor estará lidando, para que a
requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar 
códigos, como o javascript, por exemplo, e executar no cliente.

- _Uniform Interface_: O que é então uma Interface Uniforme? É bem tranquilo... 


Se você escolher o endpoint `/client` do seu resource, 
você deve sempre seguir isso para todos os seus Resources. A interface 
que você está construindo para os resources está seguindo essa constraint. Você 
criou uma padronização dos seus resources. 


Então, posso afirmar que (por enquanto) você está seguindo corretamente a proposta.


Quando usamos por padrão o .json como formato de escrita das 
mensagens isso faz com que sua API não fiquei usando uma hora json, outra 
hora xml,  outra hora outro formato, você continua seguindo o conceito de
 uniformidade da interface, e maneira de se comunicar está bacana. Sua API 
 está coerente até aqui. 


Nossa API precisa enviar detalhes para quem está consumindo
 ela. Então, precisamos sempre manter nosso resource com informações suficientes
  para quem vai consumi-lo. Talvez links para outros endpoints, por exemplo. 


Até aqui, fica intuitivo e tranquilo para meu cliente entender como minha API 
funciona, e o que posso fazer com ela, então, Interface está Uniforme.


Devemos usar bem corretamente os verbos HTTP para 
comunicação clara e efetiva. O uso correto dos verbos 
é coerente, então, estamos sendo uniformes na nossa interface.


Por fim, já ficou claro os conceitos que você deve usar para criar a interface 
de comunicação da sua API para ser uniforme!  


## RESTFUL

RESTful, é a aplicação dos padrões REST.

## BOAS PRÁTICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA_, use um
padrão.
- Não deixar barra no final do endpoint. 
Ex: app.get("/clients");
- Nunca deixe o cliente sem resposta!

## VERBOS HTTP

- Verbos HTTP
- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processadar por um Resource.
- PUT: Atualizar dados de um Resource
- DELETE: Deletar um Resource

- https://localhost:3000/clients - o "/clients" é o Resource nesse caso

### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
  - 400: Bad Request
  - 404: Not Found!
- 5xx: Server Error
  - 500: Internal Server Error
