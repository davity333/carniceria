import React from "react";
import Header from "../Atoms/header";
import Input from "../Atoms/Input";
import Logo from "../Atoms/Logo";
import SupermercadoLogo from "../Atoms/SupermercadoLogo";
import LogoUsuario from "../Atoms/LogoUsuario";
import Lupa from "../Atoms/Lupa";
import LineaGris from "../Atoms/LineaGris";

function Encabezado(){
    return(
        <>
        <Header> 
        
        <Logo></Logo>

        <div className="flex flex-1 justify-center">

        <div className="w-6/12 px-4 py-2 h-16 flex justify-center relative bg-white">
        <Lupa/>
        <Input />
        </div>

        </div>   

      <SupermercadoLogo></SupermercadoLogo>
      <LogoUsuario></LogoUsuario>
        
        </Header>
        <LineaGris></LineaGris>
        </>


    )
}
export default Encabezado;