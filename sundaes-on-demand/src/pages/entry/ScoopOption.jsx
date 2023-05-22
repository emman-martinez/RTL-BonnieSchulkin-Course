import Col from "react-bootstrap/Col";
import { Form, Row } from "react-bootstrap";
import { useOrderDetails } from "../../context/OrderDetails";

export default function ScoopOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();
  const { Control, Group, Label } = Form;

  const handleChange = (e) => {
    updateItemCount(name, parseInt(e.target.value), "scoops");
  };

  return (
    <Col className="scoopoption__main-col" lg={3} md={4} sm={6} xs={12}>
      <img
        alt={`${name} scoop`}
        className="scoopoption__img"
        src={`http://localhost:3030/${imagePath}`}
      />
      <Group
        as={Row}
        className="scoopoption__group"
        controlId={`${name}-count`}
      >
        <Label className="scoopoption__label" column xs="6">
          {name}
        </Label>
        <Col className="scoopoption__number " xs="5">
          <Control defaultValue={0} onChange={handleChange} type="number" />
        </Col>
      </Group>
    </Col>
  );
}
