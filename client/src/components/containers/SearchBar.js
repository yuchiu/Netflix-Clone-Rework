import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../actions";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: ""
    };
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  displayText() {
    this.props.fetchText(this.state.inputVal);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} />
        <button onClick={this.displayText.bind(this)}>
          Change Display Text
        </button>
        {this.props.text}
      </div>
    );
  }
}

SearchBar.propTypes = {
  text: PropTypes.string,
  fetchText: PropTypes.func
};

const stateToProps = state => ({ text: state.text.text });

const dispatchToProps = dispatch => ({
  fetchText: text => {
    dispatch(actions.fetchText(text));
  }
});

export default connect(
  stateToProps,
  dispatchToProps
)(SearchBar);
