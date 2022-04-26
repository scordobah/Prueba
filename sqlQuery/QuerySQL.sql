SELECT DISTINCT nombre
FROM BTG.Cliente c
INNER JOIN BTG.Visitan v
	ON	c.id = v.idCliente
INNER JOIN BTG.Sucursal s
	ON	v.idSucursal = s.id
INNER JOIN BTG.Disponibilidad d
	ON	s.id = d.idSucursal
INNER JOIN BTG.Producto p
	ON	d.idProducto = p.id
INNER JOIN BTG.Inscripcion i
	ON	p.id = i.idProducto AND 
		i.idCliente = c.id
ORDER BY nombre