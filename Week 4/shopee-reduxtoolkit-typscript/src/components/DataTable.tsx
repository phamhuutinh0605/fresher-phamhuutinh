import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default Datatable;
