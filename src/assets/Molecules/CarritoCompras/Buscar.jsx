import Search from "/search.png"
function Buscar() {
    return ( <>
    <div className="bg-white w-1/3 h-1/6 rounded-md flex flex-row">

    <input
        type="text"
        className="w-full px-4 py-2 text-gray-700 bg-white rounded-full focus:outline-none"
        placeholder="Search"
      />

 <div>
        <img src={Search} className="w-3/4 h-3/4" alt="" />
    </div>

    </div>
    </> );
}

export default Buscar;