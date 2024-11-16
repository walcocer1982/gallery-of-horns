import { useState } from 'react';
import HornedBeast from './HornedBeast';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Gallery(props) {
    const [selectedHorns, setSelectedHorns] = useState("");
    const [filteredBeasts, setFilteredBeasts] = useState(props.allBeasts);
    // Función para manejar el filtro

    const handleFilterChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedHorns(selectedValue);

        // Filtrar los animales basándonos en el número de cuernos
        if (selectedValue === "") {
            setFilteredBeasts(props.allBeasts); // Si no hay filtro, mostrar todos
        } else {
            const filtered = props.allBeasts.filter(beast => beast.horns === parseInt(selectedValue));
            setFilteredBeasts(filtered);
        }
    };

    return (

        <Container>
            function SelectBasicExample() {

                <Form.Select
                    aria-label="Filtrar por número de cuernos"
                    onChange={handleFilterChange}
                    value={selectedHorns}
                >
                    <option value="">Todos los animales</option>
                    <option value="1">1 Cuerno</option>
                    <option value="2">2 Cuernos</option>
                    <option value="3">3 Cuernos</option>
                    <option value="100">100 Cuernos</option>
                </Form.Select>


            }

            export default SelectBasicExample;


            <Row xs={2} sm={3} md={4} lg={5} >
               {filteredBeasts.map(beast => (
                    <HornedBeast
                        key={beast._id}
                        title={beast.title}
                        imageUrl={beast.image_url}
                        description={beast.description}
                        horns={beast.horns}
                        displayAsModal={props.displayAsModal}
                    />
                    ))
                }
            </Row>
        </Container>
    )
}

export default Gallery;