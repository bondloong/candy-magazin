export default function(state, action) {
    switch (action.type) {
        case 'add':
            return toggleAppear(state, action.item)
        default:
            throw new Error()
    }
}
const toggleAppear = (state, item) => {

    return [...state, item]
}