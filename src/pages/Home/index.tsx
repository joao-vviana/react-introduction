import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import './styles.css';

export default function () {
    return (
        <>
            <h1>Página inicial</h1>
            <Link to='/about'>About</Link>
            <Card title='Título 1' text='Meu texto' />
            <Card title= 'Título 2' text='Outro texto' list={['Banana', 'Uva', 'Maçã']} />

            <Card title='Título 3'>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit delectus voluptatibus vel non? Ea voluptates in corporis quasi sint eos doloremque. Aspernatur dolore, debitis esse asperiores distinctio autem enim.
                </p>
                <hr />
            </Card>
        </>
    )
}