import {
  GET_VIDEOGAMES,
  GET_VIDEOGAMES_ID,
  GET_VIDEOGAMES_NAME,
  POST_VIDEOGAME,
  GET_GENRE,
  FILTER_GENRE,
  ORDER_FILTER,
} from "../actions";

const initialState = {
  videogames: [],
  videogameDetail: [],
  genre: [],
  filtereds: [],
  createdVideogame:[],
  filterBy: "All",
  orderBy: "ALL",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filtereds: action.payload,
      };
    case GET_VIDEOGAMES_ID:
      return {
        ...state,
        videogameDetail: action.payload,
      };
    case GET_VIDEOGAMES_NAME:
      return{
        ...state,
        videogameDetail:action.payload,
        filtereds:action.payload
      }
    case POST_VIDEOGAME:
      return {
        ...state,
        createdVideogame:action.payload,
      }
    case GET_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case FILTER_GENRE:
      if (action.payload === "ALL") {
        return {
          ...state,
          filtereds: state.videogames,
          filterBy: action.payload,
        };
      } else {
        return {
          ...state,
          filtereds: state.videogames.filter((r) =>
            r.genres.includes(action.payload)
          ),
          filterBy: action.payload,
        };
        
      }
      case ORDER_FILTER:
      switch (action.payload) {
        case "A-Z":
          return {
            ...state,
            filtereds: [...state.filtereds].sort((a, b) =>
              a.name > b.name ? 1 : b.name > a.name ? -1 : 0
            ),
            orderedBy: action.payload,
          };
        case "Z-A":
          return {
            ...state,
            filtereds: [...state.filtereds].sort((a, b) =>
              a.name < b.name ? 1 : b.name < a.name ? -1 : 0
            ),

            orderedBy: action.payload,
          };
        case "ASC":
          return {
            ...state,
            filtereds: [...state.filtereds].sort((a, b) =>
              a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
            ),

            orderedBy: action.payload,
          };
        case "DESC":
          return {
            ...state,
            filtereds: [...state.filtereds].sort((a, b) =>
              a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
            ),

            orderedBy: action.payload,
          };
        case "API":
          return {
            ...state,
            filtereds: [...state.videogames].filter(
              (r) => typeof r.id === "number"
            ),
            orderedBy: action.payload,
          };
        case "DB":
          return {
            ...state,
            filtereds: [...state.videogames].filter(
              (r) => typeof r.id !== "number"
            ),
            orderedBy: action.payload,
          };
        case "ALL":
          return {
            ...state,
            filtereds: state.videogames,
            orderedBy: action.payload,
          };
        default:
          return state.videogames;
      }
    // case FILTER_NAME:
    //   let order =
    //     action.payload === "A-Z"
    //       ? state.filtereds.sort((a, b) => {
    //           if (a.name > b.name) {
    //             return 1;
    //           }
    //           if (b.name > a.name) {
    //             return -1;
    //           }
    //           return 0;
    //         })
    //       : state.filtereds.sort((a, b) => {
    //           if (a.name > b.name) {
    //             return -1;
    //           }
    //           if (b.name > a.name) {
    //             return 1;
    //           }
    //           return 0;
    //         });
    //   return {
    //     ...state,
    //     filtereds: order,
    //   };
    // case FILTER_RATING:
    //   let orderRating =
    //     action.payload === "Descendent"
    //       ? state.filtereds.sort((a, b) => {
    //           if (a.rating > b.rating) {
    //             return 1;
    //           }
    //           if (b.rating > a.rating) {
    //             return -1;
    //           }
    //           return 0;
    //         })
    //       : state.filtereds.sort((a, b) => {
    //           if (a.rating > b.rating) {
    //             return -1;
    //           }
    //           if (b.rating > a.rating) {
    //             return 1;
    //           }
    //           return 0;
    //         });
    //   return {
    //     ...state,
    //     filtereds: orderRating,
    //   };
    default:
      return state;
  }
}
