import React from "react";
import styled from "styled-components";
import { Modal } from 'react-bootstrap';
import { Text, Label, Line } from "../GlobalStyledComponents";

const MoreInfoButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 90vw;
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: #0F6BFF;
`;

const StyledBackButton = styled.button`
  display: flex;
  align-items: center;
`;

const StyledBackIcon = styled.i`
  font-size: 3.5vw;
`;

class StoreMoreInfo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <MoreInfoButton onClick={this.handleShow}>
          <Text> More Info </Text>
          <Label>Hours, Features, Payments, Amenities</Label>
        </MoreInfoButton>


        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <StyledBackButton onClick={this.handleClose}>
              <StyledBackIcon className="fas fa-angle-left"></StyledBackIcon>
              &nbsp;
              <Text>Back</Text>
            </StyledBackButton>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default StoreMoreInfo;
