import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableVolante from "../TableVolante";
import fetchVolantes from "../../redux/actions/volanteAPIActions";
import {StylesTable} from '../Table'

const ResultadoVolantes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVolantes());
  }, [dispatch]);

  const volantes = useSelector((state) => state.getVolantes);
  const data = volantes.list.map(vol => {
    return {
        id: vol.id,
        volanteIdentificacion: vol.volanteIdentificacion,
        fecha: vol.fecha,
        proveedorIdentificacion: vol.proveedorIdentificacion,
        items: Object.entries(vol.items),
        transaccion: vol.transaccion
    }
    });

  const productosState = useSelector((state) => state.getProductos);
  const productos = productosState.list;

  const renderRowSubComponent = useCallback(
    
    ({ row, data }) => (
      <pre
        style={{
          fontSize: '10px',
        }}
      >
        <h1>Productos:</h1>
        {data.map(v => {
          if (v.id === row.values.id){
            return <h2>{v.items.map(p => {
              
              return <ul>
                <li>{productos.filter(prod => prod.productoIdentificacion === p[0])[0].nombreProducto}</li>
                <ul>
                  <li>Cantidad: {p[1] } unidades</li>
                </ul>
              </ul>;
            })}</h2>
          }
          return "";
        } )}
      </pre>
    ),
    []
  )

  const columns = React.useMemo(
    () => [
      {
        // Make an expander cell
        Header: () => null, // No header
        id: "expander", // It needs an ID
        Cell: ({ row }) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "➘" : "➙"}
          </span>
        ),
      },
      {
        Header: "ID",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "Volante No.",
        accessor: "volanteIdentificacion",
      },
      {
        Header: "Fecha",
        accessor: "fecha",
      },
      {
        Header: "Codigo Proveedor",
        accessor: "proveedorIdentificacion",
      },
      {
        Header: "Productos",
        accessor: "items",
      }
    ],
    []
  );

  return (
    <div>
      <h1>Volantes</h1>
      <StylesTable>
            <TableVolante columns={columns} data={data} renderRowSubComponent={renderRowSubComponent} />
      </StylesTable>
    </div>
  );
};

export default ResultadoVolantes;