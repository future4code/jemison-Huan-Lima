### Exercício 1

```
CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    actorName VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

```

a) VARCHAR(n) é uma string com um número de caracteres linitado pelo parametro n.
DATE representa uma data ou seja a informação será aramazenada no formato (YYYY-MM-DD).
PRIMARY KEY é uma restrição que implica que a informação é uma chave única na tabela.
NOT NULL determina que aquela informação não pode ser nula, deve haver sempre um dado.

b)
```
SHOW DATABASES

```
Retorna os nomes das bases de dados.

```
SHOW TABLES

```
Retorna os nomes das tabelas existentes.

c)Descreve a tabela em si, as variaveis, seus tipos, restrições e o que cada uma contém.

### Exercício 2

```
INSERT INTO Actor (id, actorName, salary, birth_date, gender)
VALUES (
	"001",
    "Tony Ramos",
    40000,
    "1948-08-25",
    "male"
);

```
a)
```
INSERT INTO Actor (id, actorName, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);

```
b)
```

INSERT INTO Actor (id, actorName, salary, birth_date, gender)
VALUES (
	"002",
    "Outro ator",
    1200,
    "1980-08-08",
    "male"
);

```
Retorna o erro "entrada duplicada para chave primária", pois a variável tem uma restrição que só aceita um id único.

c) A contagem de colunas não corresponde a contagem de valores. Faltou informar a coluna "birth_date" e a coluna "gender".

```
INSERT INTO Actor (id, actorName, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

```

d) O campo nome não pode ficar vazio pois tem a restrição NOT NULL.

```
INSERT INTO Actor (id, actorName, salary, birth_date, gender)
VALUES(
  "004",
  "Fábio Júnior",
  400000,
  "1949-04-18", 
  "male"
);

```

e) A data foi informada como uma operação matematica de inteiros, constudo ela é uma string em formato de data.

```
INSERT INTO Actor (id, actorName, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, actorName, salary, birth_date, gender)
VALUES(
  "007", 
  "Alessandra Negrini",
  2000000,
  "1970-08-29", 
  "female"
);

```

### Exercício 3

a) 
```
SELECT * FROM Actor WHERE gender = "female";

```
b)
```
SELECT salary FROM Actor WHERE actorName = "Tony Ramos";

```
c)
```
SELECT * FROM Actor WHERE gender = "invalid";

```
Retorna uma linha com todos os valores NULL.

d)
```
SELECT id, actorName, salary FROM Actor WHERE salary <= 500000;

```

e)
```
SELECT id, actorName from Actor WHERE id = "002"

```
Variável nome na verdade é name.

### Exercício 4

a) A Query retorna valores segundo condições passadas através de operadores lógicos, que funcionam como em qualquer linguagem de programação. É apenas questão de lógica.

b)
```
SELECT * from Actor WHERE actorName NOT LIKE "A%" AND salary > 350000;

```

c)
```
SELECT * from Actor WHERE actorName LIKE "%g%";

```
d)
```
SELECT * from Actor WHERE (actorName LIKE "%g%" OR actorName LIKE "%a%") AND (salary > 350000) AND (salary < 900000);

```
### Exercício 5

a)
```
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    movieName VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    releaseDate DATE NOT NULL,
    review INT NOT NULL
);

```
b)
```
INSERT INTO Movies (id, movieName, synopsis, releaseDate, review)
VALUES("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06", 7);

```
c)
```
INSERT INTO Movies (id, movieName, synopsis, releaseDate, review)
VALUES("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27", 10);

```
d)
```
INSERT INTO Movies (id, movieName, synopsis, releaseDate, review)
VALUES("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02", 8);
```
e)
```
INSERT INTO Movies (id, movieName, synopsis, releaseDate, review)
VALUES("004", "O Auto da Compadecida", "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000-09-10", 10);
```

### Exercício 6

a)
```
SELECT id, movieName, review from Movies WHERE id = "004";
```
b) 
```
SELECT * from Movies WHERE movieName = "Dona Flor e Seus Dois Maridos";
```
c)
```
SELECT id, movieName, synopsis from Movies WHERE review >= 7;
```

### Exercício 7

a)
```
SELECT * from Movies WHERE movieName LIKE "%vida%";
```
b)
```
SELECT * from Movies WHERE movieName OR synopsis LIKE "%vida%";
```
c)
```
SELECT * from Movies WHERE releaseDate < "2022-11-08";
```
d)
```
SELECT * from Movies WHERE (movieName OR synopsis LIKE "%vida%") AND (review > 7);
```
