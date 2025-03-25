// Escolhendo o aluno com o codigo determinado e atualizando os dados dele 

use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv2'].updateOne(
    {
        cod_aluno : 24
    },
    {
        $set: {
            "nome": "Rafaella Rayssa da Silva", 
            "cpf": "22963236899",
            "rg": "551200107",
            "telefone_aluno": "11964457497",  
            "telefone_responsavel": "1141399539",
            "email": "rafinharayssa@gmail.com",
            "data_nascimento": "2005-08-24 00:00:00"
        }
    }
);

db['bd3-nosql-atv2'].find({'cod_aluno' : 24});

