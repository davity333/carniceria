import Logo from '/SiluetaCerdo.png'
import Buscar from "../../Molecules/CarritoCompras/Buscar";
function HeaderCar() {
    return ( <>
        <header className="w-full h-1/2 bg-#8B2D2D flex items-center justify-center space-x-4">
        <img src={Logo} alt="" />
            <Buscar/>

        </header>
    </> );
}

export default HeaderCar;