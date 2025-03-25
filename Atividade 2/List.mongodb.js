// Escolhendo os alunos que são @gmail.com e listando eles

use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv2'].find({'email' : /@gmail.com/i});