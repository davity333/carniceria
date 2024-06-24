
import CuadroVerMasProductos from "../Atoms/CuadroVerMasProductos";
import LineaGris from "../Atoms/LineaGris";
import LineaSeparador from "../Atoms/LineaSeparador";
import PrimerFotoCarne from "../Atoms/PrimerFotoCarne";
import Text from "../Atoms/Text";
import TextContent from "../Atoms/TextContent";

const CarneIntroduccion = () => {
    return (
            <>
        <PrimerFotoCarne >
            <Text text="CALIDAD PRIME" />
            

            <CuadroVerMasProductos>
            <Text text="Ver mas productos" />
            </CuadroVerMasProductos>

        </PrimerFotoCarne>
        <LineaGris/>
        <div className="text-white  text-4xl   mt-16">
        <TextContent Content="En la carniceria “Carnitas noyola”  encontras diferentes tipos de carne de cerdo de perfecta calidad "/>
        </div>

        <div className="flex items-center justify-center">
            
        <LineaSeparador/>
        </div>
        </>
    );
}

export default CarneIntroduccion;