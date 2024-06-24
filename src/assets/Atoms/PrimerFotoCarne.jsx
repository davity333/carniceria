import carne from '/carneCerdo.png'
function PrimerFotoCarne({children}){
return(
    <>
    <div className="relative w-full h-screen">
        <img src={carne} alt="Carne" className="w-full h-full object-cover" />
        {children}
    </div>
    </>
)
}
export default PrimerFotoCarne;
