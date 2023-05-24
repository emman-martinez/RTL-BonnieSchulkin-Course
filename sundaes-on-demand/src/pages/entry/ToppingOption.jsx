import { Col, Form } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";

export default function ToppingOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();
  const { Check, Group } = Form;

  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        alt={`${name} topping`}
        src={`http://localhost:3030/${imagePath}`}
        style={{ width: "75%" }}
      />
      <Group controlId={`${name}-topping-checkbox`}>
        <Check type="checkbox" onClick={handleChange} label={name} />
      </Group>
    </Col>
  );
}
