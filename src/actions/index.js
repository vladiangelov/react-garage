export function fetchCars() {
  const promise = fetch("https://wagon-garage-api.herokuapp.com/vladis-garage/cars")
    .then(response => response.json());

  return {
    type: "FETCH_CARS",
    payload: promise
  }
}

export function fetchSingleCar(id) {
  const promise = fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`)
    .then(response => response.json());

  return {
    type: "FETCH_SINGLE_CAR",
    payload: promise
  }
}
