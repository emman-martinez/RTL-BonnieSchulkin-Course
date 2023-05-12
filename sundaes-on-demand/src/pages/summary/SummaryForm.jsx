import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);
  const { Group, Check } = Form;

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Group controlId="terms-and-conditions">
        <Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  );
}
