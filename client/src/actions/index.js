import constants from "../constants";
// youtube API key AIzaSyAq7fKgkXSe6pu2ch2BlN6YDPLSoRBD9ek
const actions = {
  fetchText: text => dispatch => {
    dispatch({
      type: constants.FETCH_TEXT,
      payload: text
    });
  }
};

export default actions;
