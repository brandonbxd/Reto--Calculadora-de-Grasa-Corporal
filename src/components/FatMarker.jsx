import { FatMarkerBox } from './FatMarkerBox';

const percentages = {
  Esencial: '2-4%',
  Deportista: '6-13%',
  Fitness: '14-17%',
  Aceptable: '18-25%',
  Obeso: '25% +',
};

const styleContainerItem = {
  width: '100%',
  minWidth: '20px',
  height: '10%',
  minHeight: '100px',
  textAlign: 'center',
};

export const FatMarker = ({ body }) => {
  return (
    <div style={styleContainerItem}>
      <FatMarkerBox bodyPerson={body} />
      <p>{percentages[body]}</p>
      <p className="text-secondary">{body}</p>
    </div>
  );
};
