import useStart from '../../hooks/useStart'
import './footer.scss'

function Footer() {
    const {qora} = useStart()

    return (
        <footer className={`footer${qora}`}>
            <code className={`footer${qora}span`}> 2022 Akmaljon.com</code>
        </footer>
    )
}

export default Footer