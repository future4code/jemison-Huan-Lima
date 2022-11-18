### Exercício 1

a) Remove a coluna salary.

b) Renomeia a coluna gender para sex, mantém o valor padrão do tipo VARCHAR, limitado a 6 caracteres.

c) Mantém o mesmo nome, mas altera o valor padrão do tipo VARCHAR, limitando a 255 caracteres.

d)
```
ALTER TABLE Actor MODIFY gender VARCHAR(100);

```

### Exercício 2

a) 
```
UPDATE Actor SET actorName = "Alfredo da breca", birth_date = "2012-07-02" WHERE id = "003";

```

b)
```
UPDATE Actor SET actorName = "JULIANA PAES" WHERE actorName = "Juliana Paes";

UPDATE Actor SET actorName = "Juliana Paes" WHERE actorName = "Juliana Paes";

```

c)
```
UPDATE Actor SET actorName = "Malu Mader", 
salary = 120000, 
birth_date = "1965-08-12",
gender = "Female" WHERE id = "005";

```

d)
Não apresenta erro, mas também não executa nenhuma modificação, funciona como um loop que não encontrou o que modificar e encerra o procedimento.

### Exercício 3

a) 
```
DELETE FROM Actor WHERE actorName = "Fernanda Montenegro";

```
b)
```
DELETE FROM Actor WHERE (gender = "male") AND (salary > 1000000);
```

### Exercício 4

a) 
```
SELECT MAX(salary) FROM Actor;

```

b)
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";

```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";

```

d)
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) O comando retorna a quantidade de de atores por cada genero: (male, female).

b)
```
SELECT id, actorName FROM Actor ORDER BY actorName DESC;

```
c)
```
SELECT * FROM Actor WHERE gender = "female" ORDER BY salary ASC;

```
d)
```
SELECT * FROM Actor WHERE gender = "female" ORDER BY salary DESC LIMIT 3;

```
e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

```

### Exercício 6

a)
```
ALTER TABLE Movies ADD playing_limit_date DATE;

```
b)
```
ALTER TABLE Movies MODIFY review FLOAT NOT NULL;

```
c)
```
UPDATE Movies SET playing_limit_date = "2023-01-08" WHERE id = "002";

UPDATE Movies SET playing_limit_date = "2022-08-08" WHERE id = "001";

```

d)
```
DELETE FROM Movies WHERE id = "003";

UPDATE Movies SET synopsis = "Que filme mais legal cara, muito bom mesmo" WHERE id = "003";

```
Não apresenta nenhum erro, contudo pelo fato de não existir o id determinado, o SQL não faz nenhuma alteração no banco.


