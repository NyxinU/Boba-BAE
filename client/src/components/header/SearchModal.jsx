import React from "react";
// import styled from "styled-components"
import { Modal, Button, ButtonToolbar, ModalBody } from 'react-bootstrap';
import { StyledIcon, Label } from "../GlobalStyledComponents";

const StyledSearchIcon = StyledIcon.extend`
  position: relative;
  right: 14vw;
  margin: 0;
  color: white;
`;

class SearchModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      keywords:"",
      location:"",
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleChange(event) {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.keywords + this.state.location);
    event.preventDefault();
  }

  render() {
    return (
      <ButtonToolbar>
        <StyledSearchIcon className="fas fa-search" onClick={this.handleShow} />
          <Modal {...this.props} show={this.state.show} onHide={this.handleHide} dialogClassName="custom-modal" >
            <Modal.Header>
              <Label onClick={this.handleHide}>Close</Label>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="keywords" placeholder="keywords" value={this.state.keywords} onChange={this.handleChange}/>
                <input type="text" name="location" placeholder="location" value={this.state.location} onChange={this.handleChange}/>
                <input type="submit" value="Search"/>
              </form>
            </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
}

export default SearchModal;