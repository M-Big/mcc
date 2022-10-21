const defaultState = {
  name: '子菜单2-2',
}

const name = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        name: action.name,
      }
    default:
      return state
  }
}

export default name
