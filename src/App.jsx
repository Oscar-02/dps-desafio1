import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./components/Contact/Contact.jsx";
import "./components/ContactList/DataManager.js";


function App() {
  return (
    <div className="App">
      <div className="header p-5">
        <h1>Agenda de Contactos</h1>
      </div>

      <div className="content px-5">
        {/* Agregar Contacto */}
        <div class="card shadow-lg">
          <div class="input-group p-3 ">
            <input
              type="text"
              class="form-control"
              placeholder="Nombres del Contacto"
              aria-label="firstName"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Apellidos del Contacto"
              aria-label="lastNames"
            />
            <span class="input-group-text">📞</span>
            <input
              type="text"
              class="form-control"
              placeholder="Telefono"
              aria-label="Server"
            />
            <button type="button" class="btn btn-success">
              Guardar
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default App;
