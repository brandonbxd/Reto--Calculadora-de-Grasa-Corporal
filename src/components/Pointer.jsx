const stylePointerContainer = {
  width: '100%',
  height: '15%',
  minHeight: '80px',
};

const stylePointer = {
  width: '0px',
  borderStyle: 'solid',
  borderWidth: '30px 15px 0 15px',
  borderTopColor: 'white',
  borderRightColor: 'transparent',
  borderLeftColor: 'transparent',
};
export const Pointer = ({ result }) => {
  const style = {
    position: 'relative',
    transition: '',
    left: '95%',
    height: '100%',
    minHeight: '50px',
    width: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const calculo = `${
    result > 30 ? 100 : result < 2 ? 0 : ((result - 2) / 28.1) * 100
  }%`;
  console.log(calculo);

  style.left = calculo;

  return (
    <div style={stylePointerContainer}>
      <div style={style}>
        <p style={{ padding: '5%', margin: '0' }}>{result}%</p>
        <div style={stylePointer}></div>
      </div>
    </div>
  );
};
