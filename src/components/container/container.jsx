import useStart from '../../hooks/useStart';
import './container.scss'

function Container({children}) {
    const { qora } = useStart()
    console.log(qora);
    return ( 
        <div className={`bigContainer${qora}`}>
            <div className="container">
              {children}
            </div>
        </div>

     );
}

export default Container;