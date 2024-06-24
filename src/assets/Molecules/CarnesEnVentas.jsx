
import Siluetas from "../Atoms/Siluetas";
import TextContent from "../Atoms/TextContent";
import Carnes from '../../data/Carnes'

function CarnesEnVentas(){
    return(
        
        <>
        <div className="text-5xl text-white">
        <TextContent Content="CARNES DE CERDO"/>
        </div>


        <Siluetas
        meat="cerdo"
        cerdo="pig"

        carneClass="h-40"
        cerdoClass="h-40"
        />

<div className="products-container flex flex-wrap justify-around">
                {Carnes.Meat.map((product, index) => (
                    <div key={index} className="product-card bg-gray-600 p-4 m-4 rounded-lg text-center w-80 h-66">
                        <div className="flex justify-between items-center">
                            <img src={product.image} alt={product.producto} className="product-image h-56 w-56 object-cover rounded-md" />
                        </div>
                        <div className="product-text text-white mt-2">{product.producto}</div>
                        <div className="product-text text-white mt-2 flex justify-start">{product.precio}</div>
                    </div>
                ))}
            </div>

        </>
    );
}
export default CarnesEnVentas;