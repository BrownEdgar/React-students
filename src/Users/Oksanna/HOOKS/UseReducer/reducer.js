export const initialState = [
    {
        "userId": 1,
        "id": 1,
        "title": "quidem molestiae enim"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "sunt qui excepturi placeat culpa"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "omnis laborum odio"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "non esse culpa molestiae omnis sed optio"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "eaque aut omnis a"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "natus impedit quibusdam illo est"
    },
    {
        "userId": 1,
        "id": 7,
        "title": "quibusdam autem aliquid et et quia"
    },
    {
        "userId": 1,
        "id": 8,
        "title": "qui fuga est a eum"
    },
    {
        "userId": 1,
        "id": 9,
        "title": "saepe unde necessitatibus rem"
    },
    {
        "userId": 1,
        "id": 10,
        "title": "distinctio laborum qui"
    }

]


function reducer(state, action) {
    switch (action.type) {
        // case 'plus': return { count: state.count + action.paylot.item }
        // case 'minus': return { count: state.count -  action.paylot.item}
        // case 'reset': return initialState
        case 'chage-title': return changeTitle(state.action)

        default: return state

    }
}


const changeTitle = (state, action) => {
    const result = state.map(elem => {
        if(elem.id === action.payload.id){
            elem.title = action.payload.title
        }
        return elem
    })
    return result
}


export default reducer