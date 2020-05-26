# API Caixa Virtual

Uma simples API REST para controle de Caixa. 

- Registre suas entradas e saídas
- Categorize suas movimentações
- Tenha acesso a um resumo com suas últimas movimentações.


## Utilização

#### `POST /categorias` - Cria uma nova Categoria

Entrada

- Nome: STRING, Obrigatório
```json
{
	"nome": "Despesas Estruturais"
}
```

Saída

- ID: Código único gerado na criação do objeto
```json
{
	"id": 1
}
```

#### `GET /categorias` - Lista todas as categorias

Entrada
> Sem dados de entrada


Saída

- Lista com todas as categorias criadas
```json
[
  {
    "id": 1,
    "nome": "Despesas Estruturais"
  },
  {
    "id": 2,
    "nome": "Pagamento"
  }
]
```


#### `POST /usuarios` - Cria uma nova conta

Entrada

- Email: STRING, Obrigatório
- Senha: STRING, Obrigatório
```json
{
	"email": "meuemail@vcaixa.dev",
  "senha": "AlgumaSenhaDificil",
}
```

Saída

- ID: Código único gerado na criação do objeto
```json
{
	"id": 1
}
```

#### `POST /movimentacoes` - Adiciona uma movimentação (Entrada/Saída) à conta vinculada

Entrada

- Descrição: STRING, Obrigatório
- Valor: NUMBER, Obrigatório
- Categoria: STRING, Obrigatório
```json
{ 
	"descricao": "Venda", 
	"valor": 37.50, 
	"categoria_id": 1 
}
```
> Obs: O valor será considerado entrada ou saída de acordo com o informado. *Entrada* para um valor positivo e *Saída* para um valor negativo.

Saída

- ID: Código único gerado na criação do objeto
```json
{
	"id": 1
}
```

#### `POST /meu-resumo` - Lista o saldo atual da carteira e as movimentações de hoje

Entrada

> Sem dados de entrada.

Saída

- Saldo total: Valor referente a soma de todas as movimentações
- Movimentações: Lista de todas as movimentações

```json
{
  "saldoTotal": 0,
  "movimentacoes": [
    {
      "id": 1,
      "data": "2020-05-25T13:53:32.549Z",
      "tipo": "Entrada",
      "descricao": "Venda",
      "valor": 39.5,
      "categoria": {
        "id": 1,
        "nome": "Gorjeta"
      }
    }
  ]
}
```


## Como executar
#### Requisitos
- NodeJS 12^
---
Para executar o sistema em modo de desenvolvimento, é executar os seguintes comandos:

```sh
npm install
```

E depois

```sh
npx sequelize db:migrate
```
E por fim

```sh
npm start
```

## Tecnologias Utilizadas
- NodeJS
- JWT
- Sequelize