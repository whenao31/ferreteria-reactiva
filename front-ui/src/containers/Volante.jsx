import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import VolanteForm from "../components/forms/VolanteForm";
import fetchVolantes from "../redux/actions/volanteAPIActions";
import ResultadoVolantes from "../components/buscador/ResultadoVolantes";


const Volante = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchVolantes());
    }, [])
    

    return (
        <>
            <hr/>
            <ResultadoVolantes />
        </>
    )
}

export default Volante;