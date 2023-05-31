select * from notas;
--para traer el total de alumnos
select count(*) from notas;
--para traer la nota maxima de alumnos
select max(nota) from notas;
select avg(nota),min(nota),max(nota) from notas;
select pais,count(*) from notas
GROUP BY pais
order by count(*) desc;
select pais,count(*) as total
from notas
where nota > 10
group by pais
order by count(*) desc;

select pais,avg(nota) as promedio
from notas
group by pais
having promedio > 10;
--MOSTRAR TODOS LOS ALUMNOS DE PERU CUYA NOTA SEA MAYOR AL
--PROMEDIO DE LA NOTA DE TODO EL PAIS


