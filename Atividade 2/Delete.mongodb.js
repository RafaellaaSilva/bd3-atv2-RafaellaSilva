// Escolhendo o aluno com o codigo determinado e deletando os dados dele 

use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv2'].deleteOne(
    {
        cod_aluno : 4
    }
);

db['bd3-nosql-atv2'].find({'cod_aluno' : 4});
