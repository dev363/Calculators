import { useState, useEffect, Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormControl,
  ButtonGroup,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Badge,
} from "react-bootstrap";

import { InputNumber } from "components/commons/Inputs";

import { NUMBER_VALIDATION, CURRENCY_TEXT } from "helpers/Input";

const INTIAL_STATE = {
  principal: 10000,
  rate: 12,
  time: 1,
  amount: 0,
  interest: 0,
};

const INTIAL_ERROR = {
  principal: "",
  rate: "",
  time: "",
  amount: "",
  interest: "",
};

const SimpleCalculator = (props) => {
  const [state, setState] = useState({
    ...INTIAL_STATE,
  });
  const [errors, setErrors] = useState({
    ...INTIAL_ERROR,
  });

  const [timeType, setTimeType] = useState(true);

  useEffect(() => {
    // calculateForm();
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = { ...errors };
    switch (name) {
      case "principal": {
        let check = NUMBER_VALIDATION(value);
        setErrors((pre) => ({
          ...pre,
          [name]: check,
        }));
        break;
      }
      case "rate": {
        let check = NUMBER_VALIDATION(value);
        setErrors((pre) => ({
          ...pre,
          [name]: check,
        }));
        break;
      }
      case "time": {
        let check = NUMBER_VALIDATION(value);
        setErrors((pre) => ({
          ...pre,
          [name]: check,
        }));
        break;
      }
      default:
        break;
    }

    setState((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const calculateForm = () => {
    const { principal, rate, time } = state;
    let years = timeType ? time : time / 12;
    let interest = (Number(principal) * Number(rate) * Number(years)) / 100;
    setState((pre) => ({
      ...pre,
      interest,
    }));
  };

  const resetForm = () => {
    setState({ ...INTIAL_STATE });
    setErrors({ ...INTIAL_ERROR });
  };
  return (
    <Container>
      <Row>
        <Col md={4} xs={12}>
          <Form>
            <Row>
              <Col md={12} xs={12}>
                <InputNumber
                  name="principal"
                  value={state.principal}
                  placeholder="Enter Principal"
                  onChange={handleChange}
                  errors={errors}
                ></InputNumber>
              </Col>

              <Col md={12} xs={12}>
                <InputNumber
                  name="rate"
                  value={state.rate}
                  placeholder="Enter Rate of Interest"
                  onChange={handleChange}
                  errors={errors}
                ></InputNumber>
              </Col>
              <Col md={12} xs={12}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="inlineFormInputGroup">
                    Time Periord
                  </Form.Label>
                  <InputGroup>
                    <FormControl
                      type="number"
                      placeholder="Time"
                      name="time"
                      value={state.time}
                      placeholder="Enter Time"
                      onChange={handleChange}
                    />
                    <InputGroup.Text>
                      <ButtonGroup aria-label="Basic example">
                        <Button
                          variant={timeType ? "info" : "secondary"}
                          size="sm"
                          onClick={(e) => setTimeType(!timeType)}
                        >
                          Year
                        </Button>
                        <Button
                          variant="secondary"
                          variant={!timeType ? "info" : "secondary"}
                          size="sm"
                          onClick={(e) => setTimeType(!timeType)}
                        >
                          Month
                        </Button>
                      </ButtonGroup>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="d-flex justify-content-between gap-2">
                  <Button size="lg" variant="info" onClick={calculateForm}>
                    Calculate
                  </Button>
                  <Button size="lg" variant="danger" onClick={resetForm}>
                    Reset
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={4} xs={12}>
          <ListGroup numbered>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto fw-bold">Principle</div>
              <Badge variant="primary" pill>
                {CURRENCY_TEXT(state.principal)}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto fw-bold">Total Interest</div>
              <Badge variant="primary" pill>
                {CURRENCY_TEXT(state.interest)}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto fw-bold">Total Amount</div>
              <Badge variant="primary" pill>
                {CURRENCY_TEXT(
                  Number(state.principal) + Number(state.interest)
                )}
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SimpleCalculator;
