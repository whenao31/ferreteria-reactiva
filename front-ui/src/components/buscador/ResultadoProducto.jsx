import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import Table, {StylesTable} from '../Table';

const ResultadoProducto = () => {

  const productos = useSelector((state) => state.getProductos);
  const productoData = productos.list;
  const data = useMemo(() => productoData)

  const columns = useMemo(
    () => [
      {
        Header: 'Producto Id',
        accessor: 'productoIdentificacion', // accessor is the "key" in the data
      },
      {
        Header: 'Nombre',
        accessor: 'nombreProducto',
      },
      {
        Header: 'Precio($)',
        accessor: 'precio',
      },
      {
        Header: 'Cantidad actual(un.)',
        accessor: 'cantidad',
      },
      {
        Header: 'Cantidad Max(un.)',
        accessor: 'cantidadMaxima',
      },
      {
        Header: 'Cantidad Min(un.)',
        accessor: 'cantidadMinima',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <StylesTable>
      <Table columns={columns} data={data} entity={"PRODUCTO"}/>
    </StylesTable>
  )
}

export default ResultadoProducto;