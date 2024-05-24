import Button from './components/Button'
import Container from './components/Container'
import InputText from './components/InputText'
import ListBox from './components/ListBox'

function App() {
    return (
        <Container>
            <h1 className='header'>Hello Friend</h1>
            <InputText />
            <Button />
            <div>
                <ListBox />
            </div>
        </Container>
    )
}

export default App
