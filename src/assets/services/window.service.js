import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'window'
let windowsDemo =
    [
        
    ]
export const windowService = {
    // getWindow,
    query,
    // closeWindow,
    // minimizeWindow,
    // maximizeWindow,
    // getWindows,
}
async function query() {
    const windows = await storageService.query(STORAGE_KEY)
    if (!windows || !windows.length) {
        return await storageService.post(STORAGE_KEY, windowsDemo)
    }
    return windows
}
