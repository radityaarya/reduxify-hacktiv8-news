export default (state='', action) => {
  switch(action.type){
    case 'NEWS_SEARCH':
      return action.payload
    default:
      return state
  }
}
