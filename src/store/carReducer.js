import { FETCH_CARS_SUCCESS, FETCH_CARS_FAILURE, SEARCH_CARS } from './actionTypes';

const initialState = {
  cars: [],
  error: null,
  searchResults: [],
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        cars: action.payload,
        error: null,
      };
    case FETCH_CARS_FAILURE:
      return {
        ...state,
        cars: [],
        error: action.payload,
      };
    case SEARCH_CARS:
      const { location, pickupDate, returnDate } = action.payload;
      const filteredCars = state.cars.filter(
        car =>
          car.location.toLowerCase() === location.toLowerCase() &&
          car.availableDate >= pickupDate &&
          car.availableDate <= returnDate
      );
      return {
        ...state,
        searchResults: filteredCars,
      };
    default:
      return state;
  }
};

export default carReducer;
