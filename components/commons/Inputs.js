import React from "react";
import PropTypes from "prop-types";
import { Container, Button, Row, Col, Form } from "react-bootstrap";

const InputText = ({
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  errors,
  ...props
}) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
      <Form.Text className="text-muted">
        {(errors && errors[name]) || ""}
      </Form.Text>
    </Form.Group>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

InputText.defaulProps = {
  type: "text",
  name: "input",
  label: "Input",
  placeholder: "Input",
  errors: {},
  onChange: {},
  onChange: {},
};

/**Number Input */
const InputNumber = ({
  type,
  label,
  placeholder,
  name,
  value,
  min,
  max,
  onChange,
  errors,
  ...props
}) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        min={min}
        max={max}
        isInvalid={errors && errors[name]}
        size="md"
      />

      <Form.Text className="text-muted error">
        {(errors && errors[name]) || ""}
      </Form.Text>
    </Form.Group>
  );
};

InputNumber.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

InputNumber.defaulProps = {
  type: "number",
  name: "input",
  label: "Input",
  min: 0,
  placeholder: "Input",
  errors: {},
  onChange: {},
  onChange: {},
};

export { InputText, InputNumber };
