const STORAGE_KET = 'lucky'

export default {
    fetch() {
        return JSON.parse(window.localStorage.getItem(STORAGE_KET) || '[]')
    },
    save(items) {
        window.localStorage.setItem(STORAGE_KET, JSON.stringify(items))
    },
    clear() {
        window.localStorage.removeItem(STORAGE_KET)
    }
}