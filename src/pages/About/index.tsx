import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import './styles.css'

export default function About() {
    return (
        <>
            <h1>Página About</h1>
            <Link to='/'>Home</Link>
            <Card title='Título About'/>
        </>
    )
}