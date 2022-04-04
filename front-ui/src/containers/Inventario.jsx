import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Inventory from "../components/Inventory";
import fetchProductoIds from "../redux/actions/crearProductoActions";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

const Inventario = () => {

    const dispatch = useDispatch();
    const loadingProducts = useSelector((state) => state.getProductos).loading;

    useEffect(() => {
        dispatch(fetchProductoIds());
    }, [])
    return (
        <div>
            <DotLoader color="gray" loading={loadingProducts} css={override} size={80} />
            <h1>Inventario</h1>
            <Inventory />            
        </div>
    )
}

export default Inventario