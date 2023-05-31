--MOSTRAR TODOS LOS ALUMNOS DE PERU CUYA NOTA SEA MAYOR AL
--PROMEDIO DE LA NOTA DE TODO EL PAIS
select avg(nota) from notas where pais = 'Peru';

select * from notas
where pais = 'Peru'
and nota > (select avg(nota) from notas where pais = 'Peru');

select pais,count(*) as total
from notas
where nota > (select avg(np.nota) from notas np where np.pais = pais)
group by pais;

