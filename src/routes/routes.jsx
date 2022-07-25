import { Route, Routes } from 'react-router-dom'
import { Main } from '../page';

function Routel() {
    return ( 
        <Routes>
            <Route path='/' element={<Main />} />
        </Routes>
     );
}

export default Routel;