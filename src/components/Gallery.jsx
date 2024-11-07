import HornedBeast from './HornedBeast';
import data from "../data.json";

function Gallery() {
    return (
        <div>
            <HornedBeast
                title="Chivito"
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg"
                description="meee" />
            <HornedBeast
                title="Vaquita"
                imageUrl="https://santuariovegan.org/wp-content/webp-express/webp-images/uploads/2020/06/apadrina-vaca-ezequiel-02.jpg.webp"
                description="muuu" />
            {
                data.map(beast => (
                    <HornedBeast
                        key={beast._id}
                        title={beast.title}
                        imageUrl={beast.image_url}
                        description={beast.description}
                    />
                ))
            }
        </div>
    );
}

export default Gallery;