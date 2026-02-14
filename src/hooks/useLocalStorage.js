
export function getScore(key, fallback){
    try {
        const localScore = localStorage.getItem(key)
        if(localScore === null) return fallback;
        return JSON.parse(localScore);
    } catch (error) {
        console.error(`Error loading localStorage ${key}`, error)
    }
}
export function setLocalScore(key, value){
    try {
        const newScore = JSON.stringify(value);
        localStorage.setItem(key, newScore);
    } catch (error) {
        console.error(`Error writing localStorage ${key}`, error)
    }
}