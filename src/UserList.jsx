import { useState } from "react";



export default function UserList({data}) {
  
  const [userName, setColaborador] = useState(data);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  const handdler = (e) => {
    e.preventDefault();
    const id = Number(userName[userName.length - 1].id) + 1;
    let userAdded = {
      "id": id.toString(),
      "nombre": name,
      "correo": email
    }
    setColaborador([...userName, userAdded]);
    setName("");
    setEmail("");
  }

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }

  const list = !search 
    ? userName 
    : userName.filter((x) => x.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );

  return (
    <>
    <header className="bg-gray-50 flex justify-end mb-5">
        <div className="relative">
          <input
            className="w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Buscardor 🔍	"
            value={search}
            onChange={(e) => searchHandler(e)}
          />
      </div>
    </header>

    <form onSubmit={handdler} className="mb-5">
      <label className="p-3 border-2 border-gray-200 rounded-lg">
        <input className=" mb-5 p-0 text-sm border-none focus:ring-0" 
          id="nombre" 
          type="text" 
          placeholder="Ingresa nombre"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
        <br />
      <label className=" p-3 border-2 border-gray-200 rounded-lg" >
        <input className="mb-5 p-0 text-sm border-none focus:ring-0" 
          id="correo" 
          type="email" 
          placeholder="Ingresa Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </label> <br />
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2 ">Ingresar</button>
    </form>


    <div className="text-xl pb-6 mt-5 decoration-wavy">Lista Colaboradores</div>
    <div class="overflow-x-auto relative flex justify-center">
    <table class="text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Nombre
                </th>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
            </tr>
        </thead>
        <tbody>
        {list.map((userColaborador) => (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={userColaborador.id}>
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {userColaborador.nombre}
                </td>
                <td class="py-4 px-6">
                {userColaborador.correo}
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>
</>
  )
}