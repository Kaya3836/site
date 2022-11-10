import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/components/Navbar.module.css";
import logo from "../assets/team.png";
const routes = [
  { name: "Product", to: "product" },
  { name: "Services", to: "services" },
  { name: "Contact", to: "contact" },
  { name: "Log In", to: "Log In" },
  { name: "Get Access", to: "Get Access" },
];

export const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.innercontainer}>
          <Link to="/">
            <img src={logo} />
          </Link>
          <div className={styles.row}>
            {routes.map(({ name, to }) => (
              <Link to={to}>{name}</Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
