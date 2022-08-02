const style = {
  display: 'flex',
  width: '100%',
  height: '20%',
  minHeight: '100px',
};
export const FatMarkersContainer = ({ children }) => {
  return <div style={style}>{children}</div>;
};
