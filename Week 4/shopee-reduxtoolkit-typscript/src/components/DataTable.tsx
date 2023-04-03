import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default Datatable;
