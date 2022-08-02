
export const FatMarkerBox = ({ bodyPerson }) => {
  let style= {
    width: '15px',
    height: '15px',
    paddingTop: '5',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    borderRadius: '5px',
    border: '1px solid white',
  };
  const colors = {
    Esencial: '#009FE3',
    Deportista: '#009c3d',
    Fitness: '#98c21d',
    Aceptable: '#feca00',
    Obeso: '#d76328',
  };

  style.backgroundColor = colors[bodyPerson];
  return <div style={style} />;
};
