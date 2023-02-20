# ExcelApi

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Principais tecnologias utilizadas](#principais-tecnologias-utilizadas)

- [Acesso ao projeto](#acesso-ao-projeto)

- [Abrir e rodar a aplicação](#abrir-e-rodar-a-aplicação)

## Descrição do projeto 

<p align="justify">
 Essa aplicação foi desenvolvida para auxiliar no Registro de filmes e Avaliações de filmes.

As avaliações são obtidas através de um arquivo CSV onde contém o nome do filme, genero, nota/avaliação , observação do avaliar e um código para melhor linkar um filme com uma avaliação.

</p>

## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Criar o registro de um filme no banco de dados MongoDB, que se encontra na rota : http://127.0.0.1:3000/v1/api/create-movie e deve conter o seguinte corpo com um JSON usando método POST 
Segue um exemplo:
{
               "name": 0,
                "gender": "Anime",
                "duration": "190",
                "director": "Yusuke Murata",
                "actors": "Saitama",
				"code": "A5343"
}
Deve retornar um JSON com esse mesmo corpo.

:heavy_check_mark: `Funcionalidade 2:` Criar um registro de avalições de filmes no banco de dados MongoDB na seguinte rota : http://127.0.0.1:3000/v1/api/create-movie-rating utilizando o método POST, o CSV desse projeto se encontra na pasta ./src/csvFiles/movieRating.csv .
Deve retornar um JSON com as avaliações desse arquivo CSV.

:heavy_check_mark: `Funcionalidade 3:` Obter o registro de um filme e junto deve vir as avaliações desse filme na seguinte rota http://127.0.0.1:3000/v1/api/get-movie utilizando o método POST.
Exemplo de retorno : 
{
	"data": {
		"getMovie": [
			{
				"_id": "63f153124daabb418b03f23e",
				"name": "Karate Kid",
				"gender": "Drama",
				"duration": "130",
				"director": "Shinji Mikami",
				"actors": "Daniel San",
				"code": "A5340",
				"__v": 0
			}
		],
		"getMovieRating": [
			{
				"_id": "63f2bb93635b2e273975818f",
				"name": "Karate Kid",
				"gender": "Drama",
				"score": "10",
				"evaluatorName": "Paulo Bittencourt",
				"observation": "Um filme que fez parte da minha infância",
				"code": "A5340",
				"__v": 0
			}
		]
	}
}

## Estrutura da aplicação
(https://user-images.githubusercontent.com/77074764/220178317-38f2cc07-00d0-4ea0-9f34-1392e88eaec1.jpg)

## Principais tecnologias utilizadas

- [NodeJS]<https://nodejs.org/en/>
- [Express] <https://expressjs.com/>
- [Jest]<https://jestjs.io/pt-BR/>
- [CsvToJson] <https://www.npmjs.com/package/csvtojson>
- [Typescript]<https://www.typescriptlang.org/>
- [MongoDB]<https://www.mongodb.com/>

###

## Abrir e rodar a aplicação

Após fazer um clone com o seguinte comando no seu terminal na pasta onde desejar : git clone https://github.com/PauloBittencourt/ExcelApi.git

Agora deve digitar os seguintes comandos no terminal dentro da pasta ExcelApi :
- `npm i` (Esse comando irá usar o npm para instalar todas as dependencias da aplicação de forma automática);
- `npm run start` (Esse comando irá rodar a aplicação NodeJs e deverá aparecer no console a seguinte mensagem : Listening on 3000)
- Por fim é só fazer as requisições utilizando Postman ou Insomnia por exemplo.

Agora sim, ExcelAPI está pronta para ser executada. 🏆 