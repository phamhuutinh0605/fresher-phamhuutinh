import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              {/* <PersonOutlineIcon className="icon" /> */}
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              {/* <StoreIcon className="icon" /> */}
              <span>Products</span>
            </li>
          </Link>
          <li>
            {/* <CreditCardIcon className="icon" /> */}
            <span>Orders</span>
          </li>
          <li>
            {/* <LocalShippingIcon className="icon" /> */}
            <span>Delivery</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
