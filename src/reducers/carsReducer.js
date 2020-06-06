export default function(state = [], action) {
  switch (action.type) {
    case "FETCH_CARS":
      return action.payload;
    case "FETCH_SINGLE_CAR":
      return [ action.payload ];
    default:
      return state;
  }
}
