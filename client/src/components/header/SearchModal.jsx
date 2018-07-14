import React from "react";
// import styled from "styled-components"
import queryString from 'query-string';
import { Modal, ButtonToolbar, } from 'react-bootstrap';
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

    const keys = queryString.parse(this.props.location.search);
    this.state = {
      show: false,
      term: keys.term,
      location: keys.location,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      const keys = queryString.parse(this.props.location.search);
      const obj = { 
        term: keys.term,
        location: keys.location 
      };
      this.setState(obj);
    }
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
    event.preventDefault();
    this.props.history.push(`/search?term=${this.state.term}&location=${this.state.location}`);
    this.handleHide();
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
                <input type="text" name="term" placeholder="term" value={this.state.term} onChange={this.handleChange}/>
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