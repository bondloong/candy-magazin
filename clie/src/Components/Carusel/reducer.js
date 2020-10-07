import { data } from './data/data';

export const initialState = {
    property: data.properties,
    appearHome: true,
    index: 0,
};

export default function(state, action) {
    switch (action.type) {
        case 'toggle':
            return toggleAppear(state)
        case 'next':
            return nextProperty(state)
        case 'pred':
            return prevProperty(state)
        case 'set':
            return setProperty(state, action.i)
        default:
            throw new Error()
    }
}

const toggleAppear = (state) => {
    return {...state, appearHome: !state.appearHome }
}
const nextProperty = (state) => {

    const newIndex = state.index + 1
    if (newIndex > initialState.property.length - 1) {
        return {...state, index: 0 }
    }
    return {...state, index: newIndex }
}
const prevProperty = (state) => {
    const newIndex = state.index - 1
    if (newIndex < 0) {
        return {...state, index: initialState.property.length - 1 }
    }
    return {...state, index: newIndex }
}
const setProperty = (state, i) => {
    return {...state, index: i }
}