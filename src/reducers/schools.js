const initialState = [
  {name: 'Lovedale', tagline: 'A wonderful school'},
  {name: 'Bishop', tagline: 'An awesome school'},
  {name: 'Daffodils', tagline: 'An excellent school'}]


export default function shools(state = initialState, action) {
  switch (action.type) {
    case 'school:addSchool':
      return [
        {
          name: action.school.name,
          tagline: action.school.tagline
        },
        ...state
      ]


    case 'school:deleteSchool':
      return state.filter(school =>
        school.name !== action.school.name
      )

    default:
      return state;

  }

}
