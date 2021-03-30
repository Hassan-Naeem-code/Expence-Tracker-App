import React from "react";

const Header = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <img src={"https://icon-library.com/images/expenses-icon/expenses-icon-20.jpg"} className='img-responsive w-20' />
          <h6 className="font-color-heading font-12 font-700">Expence Tracker App</h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
