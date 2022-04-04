import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import fetchVolantes from "../redux/actions/volanteAPIActions";
import ResultadoVolantes from "../components/buscador/ResultadoVolantes";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: black;
`;

const Volante = () => {

    const dispatch = useDispatch();
    const loadingVolantes = useSelector((state) => state.getVolantes).loading;
    

    useEffect(() => {
      dispatch(fetchVolantes());
    }, [])
    

    return (
        <>

            <DotLoader color="gray" loading={loadingVolantes} css={override} size={80} />
            <hr/>
            <ResultadoVolantes />
        </>
    )
}

export default Volante;