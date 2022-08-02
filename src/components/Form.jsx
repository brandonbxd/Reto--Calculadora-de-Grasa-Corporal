import { useState } from 'react';
import { bodyFatPercentage } from '../helpers/bodyFatPercentage';
import { useForm } from '../hooks/useForm';
import { Input } from './Input';

const formValidations = {
  altura: [(value) => value > 50 && value < 300, 'Altura inválida'],
  peso: [(value) => value > 10 && value < 500, 'Peso inválido'],
  cintura: [(value) => value > 30 && value < 280, 'Cintura inválida'],
  cuello: [(value) => value > 10 && value < 100, 'Cuello inválido'],
  cadera: [(value) => value > 30 && value < 280, 'Cadera inválida'],
};

export const Form = ({ setFatPercentage, setIsblank }) => {
  const initialStateValues = {
  altura: 180,
  peso: 90,
  cintura: 100,
  cuello: 30,
  cadera: 90,
};
  const [isMen, setIsMen] = useState(true);
  const { formState, onInputChange, onResetForm, alturaValid, pesoValid, cinturaValid, cuelloValid, caderaValid } = useForm(initialStateValues, formValidations);
  const handleRadioChange = ()=> setIsMen(!isMen);

  const handleClick = () => {
    if( isMen &&  alturaValid==null && pesoValid==null &&  cinturaValid==null &&  cuelloValid==null || 
      !isMen && alturaValid==null && pesoValid==null &&  cinturaValid==null &&  cuelloValid==null && caderaValid==null) {
      const result = bodyFatPercentage(isMen, formState);
      console.log(result);
      setFatPercentage(result);
      setIsblank(false);
    }else{
      setIsblank(true);
    }
    
  };
  return (
    <div>
      <p className="h1">Calculadora de Grasa Corporal</p>
      <p className="p text-secondary">
        El método de la Marina de Estados unidos (US Navy Method) ofrece una
        manera sencilla de calcular un aproximado del porcentaje de tejido
        adiposo en el cuerpo de una persona.
      </p>
      <p className="p text-secondary">
        Los valores requeridos por la fórmula son los siguientes:
      </p>
      <div className="mb-3 form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          checked={isMen}
          onChange={handleRadioChange}
        />
        <label className="form-check-label ms-1">Hombre</label>
      </div>
      <div className="mb-3 form-check-inline">
        <input
          type="radio"
          className="form-check-input"
          checked={!isMen}
          onChange={handleRadioChange}
        />
        <label className="form-check-label ms-1">Mujer</label>
      </div>
      <Input
        label="Altura (cm)"
        name="altura"
        onChange={onInputChange}
        value={formState.altura}
        min={50}
        max={300}
        errorMessage={alturaValid}
        // errorMessage={formState.errors.altura}
      />
      <Input
        label="Peso (kg)"
        name="peso"
        onChange={onInputChange}
        value={formState.peso}
        min={35}
        max={500}
        errorMessage={pesoValid}
      />
      <Input
        label="Cintura (cm)"
        name="cintura"
        onChange={onInputChange}
        value={formState.cintura}
        min={30}
        max={280}
        errorMessage={cinturaValid}
      />
      {!isMen && (<Input
          label="Cadera (cm)"
          name="cadera"
          onChange={onInputChange}
          value={formState.cadera}
          min={30}
          max={280}
          errorMessage={caderaValid}
        />)}
      
      <Input
        label="Cuello (cm)"
        name="cuello"
        onChange={onInputChange}
        value={formState.cuello}
        min={10}
        max={100}
        errorMessage={cuelloValid}
      />
      <div className="">
        <button type="submit" onClick={handleClick}>
          Calcular
        </button>
        <button type="reset" className="ms-3" onClick={onResetForm}>
          Limpiar
        </button>
      </div>
    </div>
  );
};
