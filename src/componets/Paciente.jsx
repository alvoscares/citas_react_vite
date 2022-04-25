const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
      const respuesta = confirm('Deseas eliminar este paciente?')

      if(respuesta) {
        eliminarPaciente(id)
      }
  }
  
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <samp className="font-normal normal-case">{nombre}</samp>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Prpietario: {''}
          <samp className="font-normal normal-case">{propietario}</samp>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <samp className="font-normal normal-case">{email}</samp>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <samp className="font-normal normal-case">{fecha}</samp>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <samp className="font-normal normal-case">{sintomas}</samp>
        </p>

        <div className="flex justify-between mt-10">
          <button
            type="buttom"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
            onClick={() => setPaciente(paciente)}
          >Editar</button>

          <button
            type="buttom"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase"
            onClick={handleEliminar}
          >Eliminar</button>

        </div>

      </div>
  )
}

export default Paciente