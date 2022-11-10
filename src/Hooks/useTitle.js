import { useEffect } from "react"

const useTitle=title=>{


    useEffect(()=>{
        document.title=`${title} | Health-Coach`;
    },[title])
}

export default useTitle;