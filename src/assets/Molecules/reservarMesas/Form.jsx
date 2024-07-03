import FormField from './FormField';
import Button from '../../Atoms/reservarMesas/Button';

function Form() {
  return (
    <form className="space-y-6" action="#" method="POST">
      <FormField
        id="name"
        name="name"
        type="text"
        placeholder="ej. Jesús"
        autoComplete="text"
        required={true}
        label="Nombre del solicitante"
      />
      <FormField
        id="noPeople"
        name="noPeople"
        type="text"
        placeholder="ej. 6"
        autoComplete="current-text"
        required={true}
        label="Número de personas"
      />
         <FormField
        id="date"
        name="date"
        type="datetime-local"
        placeholder=""
        autoComplete="s"
        required={true}
        label="Hora"
      />
      
      <div>
        <Button type="submit" children={"Iniciar sesión"}></Button>
      </div>
    </form>
  );
}

export default Form;
