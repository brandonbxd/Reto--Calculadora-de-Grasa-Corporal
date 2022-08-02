const NavBarStyle = {
  backgroundColor: '#8667F0',
  borderRadius: '5px 5px 0 0',
};
export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark" style={NavBarStyle}>
      <div className="container-fluid ps-5 pe-5">
        <div className="navbar-brand ">
          <i className="fa-solid fa-bars pe-3"></i>
          Health Overview
        </div>
        <i className="fa-solid fa-bars d-flex text-light me-2"></i>
      </div>
    </nav>
  );
};
