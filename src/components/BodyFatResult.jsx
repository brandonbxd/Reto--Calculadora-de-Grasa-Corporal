import { FatMarker } from './FatMarker';
import { FatMarkersContainer } from './FatMarkersContainer';
import { Gradient } from './Gradient';
import { Pointer } from './Pointer';
const styleResultSection = {
  backgroundColor: 'black',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};
const styleResultContainer = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '5%',
};

const styleBadPercentage = {
  color: 'red',
};

export const BodyFatResult = ({ fatPercentage }) => {
  const isValid = fatPercentage >= 2 && fatPercentage <= 35;
  const result = fatPercentage.toFixed(2);
  return (
    <section style={styleResultSection}>
      <div style={styleResultContainer}>
        {!isValid ? (
          <h1 style={styleBadPercentage}>*Resultado invalido*</h1>
        ) : (
          <>
            <h1>Tu resultado: {result}%</h1>
            <Pointer result={+result} />
          </>
        )}
        <Gradient />
        <FatMarkersContainer>
          <FatMarker body="Esencial" />
          <FatMarker body="Deportista" />
          <FatMarker body="Fitness" />
          <FatMarker body="Aceptable" />
          <FatMarker body="Obeso" />
        </FatMarkersContainer>
      </div>
    </section>
  );
};
