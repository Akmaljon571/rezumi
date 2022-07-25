import { useContext } from "react";
import { State } from '../content/start'

function useStart() {
   const {lan, setLan, qora, setQora} = useContext(State)

   return {lan, setLan, qora, setQora}
  
}

export default useStart;