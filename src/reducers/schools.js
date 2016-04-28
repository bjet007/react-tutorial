const initialState = {
  schools: [{name: "Lovedale", tagline: "A wonderful school"},
    {name: "Bishop", tagline: "An awesome school"},
    {name: "Daffodils", tagline: "An excellent school"}]
};


export default function shools(state = initialState, action) {
  switch (action.type) {
    case "school:addSchool":
      return {
        state,
        shools: state.shools.concat(action.name),
      }


    case "school:deleteSchool":
      var index;
      state.shools.map(function (s, index) {
        if (s.name === action.name) {
          _index = index;
        }
      });
      return {
        state,
        shools: state.schools.splice(_index, 1)
      }

    default:
      return state;

  }

}
