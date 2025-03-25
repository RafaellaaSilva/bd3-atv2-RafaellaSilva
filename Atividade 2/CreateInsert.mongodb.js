// Selecionando o Banco de Dados e criando uma nova collection. Realizando a inserção de dados 

use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv2'].insertMany(
    [
        {
          "cod_aluno": 1,
          "nome": "Lucas Almeida",
          "cpf": "12345678901",
          "rg": "123456789",
          "telefone_aluno": "11987654321",
          "telefone_responsavel": "11998765432",
          "email": "lucas.almeida@gmail.com",
          "data_nascimento": "2005-03-15 00:00:00"
        },
        {
          "cod_aluno": 2,
          "nome": "Ana Souza",
          "cpf": "23456789012",
          "rg": "234567890",
          "telefone_aluno": "11976543210",
          "telefone_responsavel": "11987654321",
          "email": "ana.souza@yahoo.com",
          "data_nascimento": "2006-07-22 00:00:00"
        },
        {
          "cod_aluno": 3,
          "nome": "Bruno Ferreira",
          "cpf": "34567890123",
          "rg": "345678901",
          "telefone_aluno": "11965432109",
          "telefone_responsavel": "11976543210",
          "email": "bruno.ferreira@outlook.com",
          "data_nascimento": "2004-11-10 00:00:00"
        },
        {
          "cod_aluno": 4,
          "nome": "Mariana Lima",
          "cpf": "45678901234",
          "rg": "456789012",
          "telefone_aluno": "11954321098",
          "telefone_responsavel": "11965432109",
          "email": "mariana.lima@gmail.com",
          "data_nascimento": "2007-01-30 00:00:00"
        },
        {
          "cod_aluno": 5,
          "nome": "Rafael Costa",
          "cpf": "56789012345",
          "rg": "567890123",
          "telefone_aluno": "11943210987",
          "telefone_responsavel": "11954321098",
          "email": "rafael.costa@hotmail.com",
          "data_nascimento": "2005-09-18 00:00:00"
        },
        {
          "cod_aluno": 6,
          "nome": "Juliana Mendes",
          "cpf": "67890123456",
          "rg": "678901234",
          "telefone_aluno": "11932109876",
          "telefone_responsavel": "11943210987",
          "email": "juliana.mendes@gmail.com",
          "data_nascimento": "2006-06-05 00:00:00"
        },
        {
          "cod_aluno": 7,
          "nome": "Fernando Oliveira",
          "cpf": "78901234567",
          "rg": "789012345",
          "telefone_aluno": "11921098765",
          "telefone_responsavel": "11932109876",
          "email": "fernando.oliveira@terra.com.br",
          "data_nascimento": "2003-12-25 00:00:00"
        },
        {
          "cod_aluno": 8,
          "nome": "Tatiane Silva",
          "cpf": "89012345678",
          "rg": "890123456",
          "telefone_aluno": "11910987654",
          "telefone_responsavel": "11921098765",
          "email": "tatiane.silva@gmail.com",
          "data_nascimento": "2005-08-14 00:00:00"
        },
        {
          "cod_aluno": 9,
          "nome": "Ricardo Santos",
          "cpf": "90123456789",
          "rg": "901234567",
          "telefone_aluno": "11999887766",
          "telefone_responsavel": "11910987654",
          "email": "ricardo.santos@uol.com.br",
          "data_nascimento": "2004-04-12 00:00:00"
        },
        {
          "cod_aluno": 10,
          "nome": "Gabriela Nunes",
          "cpf": "01234567890",
          "rg": "012345678",
          "telefone_aluno": "11988776655",
          "telefone_responsavel": "11999887766",
          "email": "gabriela.nunes@gmail.com",
          "data_nascimento": "2006-10-08 00:00:00"
        },
        {
            "cod_aluno": 11,
            "nome": "Mateus Cardoso",
            "cpf": "11122233344",
            "rg": "112233445",
            "telefone_aluno": "11991112222",
            "telefone_responsavel": "11992223333",
            "email": "mateus.cardoso@gmail.com",
            "data_nascimento": "2005-02-18 00:00:00"
        },
        {
            "cod_aluno": 12,
            "nome": "Carla Menezes",
            "cpf": "22233344455",
            "rg": "223344556",
            "telefone_aluno": "11992223344",
            "telefone_responsavel": "11993334455",
            "email": "carla.menezes@yahoo.com",
            "data_nascimento": "2006-05-23 00:00:00"
        },
        {
            "cod_aluno": 13,
            "nome": "Roberto Lima",
            "cpf": "33344455566",
            "rg": "334455667",
            "telefone_aluno": "11993334455",
            "telefone_responsavel": "11994445566",
            "email": "roberto.lima@outlook.com",
            "data_nascimento": "2004-08-12 00:00:00"
        },
        {
            "cod_aluno": 14,
            "nome": "Fernanda Silva",
            "cpf": "44455566677",
            "rg": "445566778",
            "telefone_aluno": "11994445566",
            "telefone_responsavel": "11995556677",
            "email": "fernanda.silva@gmail.com",
            "data_nascimento": "2007-03-29 00:00:00"
        },
        {
            "cod_aluno": 15,
            "nome": "Gustavo Pereira",
            "cpf": "55566677788",
            "rg": "556677889",
            "telefone_aluno": "11995556677",
            "telefone_responsavel": "11996667788",
            "email": "gustavo.pereira@hotmail.com",
            "data_nascimento": "2005-10-07 00:00:00"
        },
        {
            "cod_aluno": 16,
            "nome": "Letícia Rocha",
            "cpf": "66677788899",
            "rg": "667788990",
            "telefone_aluno": "11996667788",
            "telefone_responsavel": "11997778899",
            "email": "leticia.rocha@gmail.com",
            "data_nascimento": "2006-12-14 00:00:00"
        },
        {
            "cod_aluno": 17,
            "nome": "Daniel Souza",
            "cpf": "77788899900",
            "rg": "778899001",
            "telefone_aluno": "11997778899",
            "telefone_responsavel": "11998889900",
            "email": "daniel.souza@terra.com.br",
            "data_nascimento": "2003-06-21 00:00:00"
        },
        {
            "cod_aluno": 18,
            "nome": "Priscila Andrade",
            "cpf": "88899900011",
            "rg": "889900112",
            "telefone_aluno": "11998889900",
            "telefone_responsavel": "11999900011",
            "email": "priscila.andrade@gmail.com",
            "data_nascimento": "2005-01-09 00:00:00"
        },
        {
            "cod_aluno": 19,
            "nome": "Thiago Mendes",
            "cpf": "99900011122",
            "rg": "990011223",
            "telefone_aluno": "11999900011",
            "telefone_responsavel": "11900011122",
            "email": "thiago.mendes@uol.com.br",
            "data_nascimento": "2004-07-05 00:00:00"
        },
        {
            "cod_aluno": 20,
            "nome": "Camila Nascimento",
            "cpf": "00011122233",
            "rg": "001122334",
            "telefone_aluno": "11900011122",
            "telefone_responsavel": "11901112233",
            "email": "camila.nascimento@gmail.com",
            "data_nascimento": "2006-09-30 00:00:00"
        },
        {
            "cod_aluno": 21,
            "nome": "Bruno Almeida",
            "cpf": "21123334455",
            "rg": "211223344",
            "telefone_aluno": "11992112233",
            "telefone_responsavel": "11993223344",
            "email": "bruno.almeida@gmail.com",
            "data_nascimento": "2003-05-20 00:00:00"
          },
          {
            "cod_aluno": 22,
            "nome": "Larissa Gomes",
            "cpf": "32234445566",
            "rg": "322334455",
            "telefone_aluno": "11993223344",
            "telefone_responsavel": "11994334455",
            "email": "larissa.gomes@yahoo.com",
            "data_nascimento": "2006-09-15 00:00:00"
          },
          {
            "cod_aluno": 23,
            "nome": "Pedro Henrique",
            "cpf": "43345556677",
            "rg": "433445566",
            "telefone_aluno": "11994334455",
            "telefone_responsavel": "11995445566",
            "email": "pedro.henrique@outlook.com",
            "data_nascimento": "2005-07-08 00:00:00"
          },
          {
            "cod_aluno": 24,
            "nome": "Vanessa Martins",
            "cpf": "54456667788",
            "rg": "544556677",
            "telefone_aluno": "11995445566",
            "telefone_responsavel": "11996556677",
            "email": "vanessa.martins@gmail.com",
            "data_nascimento": "2004-03-22 00:00:00"
          },
          {
            "cod_aluno": 25,
            "nome": "Rafael Castro",
            "cpf": "65567778899",
            "rg": "655667788",
            "telefone_aluno": "11996556677",
            "telefone_responsavel": "11997667788",
            "email": "rafael.castro@hotmail.com",
            "data_nascimento": "2007-12-01 00:00:00"
          },
          {
            "cod_aluno": 26,
            "nome": "Amanda Freitas",
            "cpf": "76678889900",
            "rg": "766778899",
            "telefone_aluno": "11997667788",
            "telefone_responsavel": "11998778899",
            "email": "amanda.freitas@gmail.com",
            "data_nascimento": "2005-06-10 00:00:00"
          },
          {
            "cod_aluno": 27,
            "nome": "Lucas Fernandes",
            "cpf": "87789990011",
            "rg": "877889900",
            "telefone_aluno": "11998778899",
            "telefone_responsavel": "11999889900",
            "email": "lucas.fernandes@terra.com.br",
            "data_nascimento": "2003-10-05 00:00:00"
          },
          {
            "cod_aluno": 28,
            "nome": "Beatriz Lima",
            "cpf": "98890001122",
            "rg": "988990011",
            "telefone_aluno": "11999889900",
            "telefone_responsavel": "11900990011",
            "email": "beatriz.lima@gmail.com",
            "data_nascimento": "2006-11-18 00:00:00"
          },
          {
            "cod_aluno": 29,
            "nome": "Rodrigo Azevedo",
            "cpf": "09901112233",
            "rg": "099100122",
            "telefone_aluno": "11900990011",
            "telefone_responsavel": "11901112233",
            "email": "rodrigo.azevedo@uol.com.br",
            "data_nascimento": "2004-08-30 00:00:00"
          },
          {
            "cod_aluno": 30,
            "nome": "Mariana Duarte",
            "cpf": "11012223344",
            "rg": "110211233",
            "telefone_aluno": "11901112233",
            "telefone_responsavel": "11902223344",
            "email": "mariana.duarte@gmail.com",
            "data_nascimento": "2005-02-14 00:00:00"
          },
          {
            "cod_aluno": 31,
            "nome": "Felipe Souza",
            "cpf": "22123334455",
            "rg": "221322344",
            "telefone_aluno": "11902223344",
            "telefone_responsavel": "11903334455",
            "email": "felipe.souza@hotmail.com",
            "data_nascimento": "2007-05-06 00:00:00"
          },
          {
            "cod_aluno": 32,
            "nome": "Patrícia Costa",
            "cpf": "33223344556",
            "rg": "332244556",
            "telefone_aluno": "11999887766",
            "telefone_responsavel": "11990998877",
            "email": "patricia.costa@gmail.com",
            "data_nascimento": "2006-07-15 00:00:00"
          },
          {
            "cod_aluno": 33,
            "nome": "Carlos Silva",
            "cpf": "44334455667",
            "rg": "443355667",
            "telefone_aluno": "11990998877",
            "telefone_responsavel": "11992009988",
            "email": "carlos.silva@uol.com.br",
            "data_nascimento": "2005-03-04 00:00:00"
          },
          {
            "cod_aluno": 34,
            "nome": "Juliana Rocha",
            "cpf": "55445566778",
            "rg": "554466778",
            "telefone_aluno": "11992009988",
            "telefone_responsavel": "11993110099",
            "email": "juliana.rocha@hotmail.com",
            "data_nascimento": "2004-10-20 00:00:00"
          },
          {
            "cod_aluno": 35,
            "nome": "Lucas Lima",
            "cpf": "66556677889",
            "rg": "665577889",
            "telefone_aluno": "11993110099",
            "telefone_responsavel": "11994221100",
            "email": "lucas.lima@gmail.com",
            "data_nascimento": "2006-06-30 00:00:00"
          },
          {
            "cod_aluno": 36,
            "nome": "Aline Ferreira",
            "cpf": "77667788990",
            "rg": "776688990",
            "telefone_aluno": "11994221100",
            "telefone_responsavel": "11995332211",
            "email": "aline.ferreira@outlook.com",
            "data_nascimento": "2004-12-18 00:00:00"
          },
          {
            "cod_aluno": 37,
            "nome": "Eduardo Almeida",
            "cpf": "88778899001",
            "rg": "887799001",
            "telefone_aluno": "11995332211",
            "telefone_responsavel": "11996443322",
            "email": "eduardo.almeida@gmail.com",
            "data_nascimento": "2006-11-02 00:00:00"
          },
          {
            "cod_aluno": 38,
            "nome": "Roberta Martins",
            "cpf": "99889900112",
            "rg": "998800112",
            "telefone_aluno": "11996443322",
            "telefone_responsavel": "11997554433",
            "email": "roberta.martins@uol.com.br",
            "data_nascimento": "2005-02-25 00:00:00"
          },
          {
            "cod_aluno": 39,
            "nome": "Daniela Costa",
            "cpf": "10990011223",
            "rg": "109911223",
            "telefone_aluno": "11997554433",
            "telefone_responsavel": "11998665544",
            "email": "daniela.costa@gmail.com",
            "data_nascimento": "2007-01-30 00:00:00"
          },
          {
            "cod_aluno": 40,
            "nome": "Gustavo Alves",
            "cpf": "22001122334",
            "rg": "220022334",
            "telefone_aluno": "11998665544",
            "telefone_responsavel": "11999776655",
            "email": "gustavo.alves@outlook.com",
            "data_nascimento": "2005-05-10 00:00:00"
          },
          {
            "cod_aluno": 41,
            "nome": "Marta Souza",
            "cpf": "33112233445",
            "rg": "331133445",
            "telefone_aluno": "11999776655",
            "telefone_responsavel": "11900887766",
            "email": "marta.souza@gmail.com",
            "data_nascimento": "2006-09-12 00:00:00"
          },
          {
            "cod_aluno": 42,
            "nome": "Marcelo Pereira",
            "cpf": "44223344556",
            "rg": "442244556",
            "telefone_aluno": "11900887766",
            "telefone_responsavel": "11901998877",
            "email": "marcelo.pereira@hotmail.com",
            "data_nascimento": "2004-11-22 00:00:00"
          },
          {
            "cod_aluno": 43,
            "nome": "Tatiane Lima",
            "cpf": "55334466577",
            "rg": "553455667",
            "telefone_aluno": "11900998877",
            "telefone_responsavel": "11902009988",
            "email": "tatiane.lima@gmail.com",
            "data_nascimento": "2005-01-15 00:00:00"
          },
          {
            "cod_aluno": 44,
            "nome": "Carlos Alberto",
            "cpf": "66445577688",
            "rg": "664466778",
            "telefone_aluno": "11902009988",
            "telefone_responsavel": "11903111099",
            "email": "carlos.alberto@outlook.com",
            "data_nascimento": "2006-04-20 00:00:00"
          },
          {
            "cod_aluno": 45,
            "nome": "Luciana Souza",
            "cpf": "77556688799",
            "rg": "775577889",
            "telefone_aluno": "11903111099",
            "telefone_responsavel": "11904222110",
            "email": "luciana.souza@hotmail.com",
            "data_nascimento": "2004-08-30 00:00:00"
          },
          {
            "cod_aluno": 46,
            "nome": "Felipe Oliveira",
            "cpf": "88667799800",
            "rg": "886688990",
            "telefone_aluno": "11904222110",
            "telefone_responsavel": "11905333221",
            "email": "felipe.oliveira@gmail.com",
            "data_nascimento": "2005-06-09 00:00:00"
          },
          {
            "cod_aluno": 47,
            "nome": "Ana Beatriz",
            "cpf": "99778800911",
            "rg": "997799001",
            "telefone_aluno": "11905333221",
            "telefone_responsavel": "11906444332",
            "email": "ana.beatriz@uol.com.br",
            "data_nascimento": "2006-03-25 00:00:00"
          },
          {
            "cod_aluno": 48,
            "nome": "Felipe Martins",
            "cpf": "10889922022",
            "rg": "108900223",
            "telefone_aluno": "11906444332",
            "telefone_responsavel": "11907555443",
            "email": "felipe.martins@gmail.com",
            "data_nascimento": "2004-12-05 00:00:00"
          },
          {
            "cod_aluno": 49,
            "nome": "Beatriz Oliveira",
            "cpf": "21990033133",
            "rg": "219911334",
            "telefone_aluno": "11907555443",
            "telefone_responsavel": "11908666554",
            "email": "beatriz.oliveira@outlook.com",
            "data_nascimento": "2006-10-11 00:00:00"
          },
          {
            "cod_aluno": 50,
            "nome": "Rodrigo Costa",
            "cpf": "33001144244",
            "rg": "330022445",
            "telefone_aluno": "11908666554",
            "telefone_responsavel": "11909777665",
            "email": "rodrigo.costa@hotmail.com",
            "data_nascimento": "2005-09-03 00:00:00"
          }
  
      ]      
)