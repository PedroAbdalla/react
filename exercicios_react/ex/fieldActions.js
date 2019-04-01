export function changeValue (e) {
    console.log('funfa')
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}