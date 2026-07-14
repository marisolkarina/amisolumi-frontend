import { useEffect, useState } from "react";
import { getCategoryById } from "../services/get-category-by-id";

export function useGetCategoryById({id}){

    const [category,setCategory]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{

        getCategoryById(id)
            .then((data)=>setCategory(data.data))
            .catch((error)=>setError(error.message))
            .finally(()=>setLoading(false));

    },[id]);

    return{
        category,
        loading,
        error
    };

}