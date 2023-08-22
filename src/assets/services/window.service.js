import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
export const windowService = {
    getWindow,
    // closeWindow,
    // minimizeWindow,
    // maximizeWindow,
    // getWindows,
}
function getWindow(type = "List", title = "New Window", content = "", img= "/portfolio/src/assets/img/icons/Book.ico") {
    const id = utilService.makeId()
    return {
        _id: id,
        props: {
            title: title,
            content: content,
            isMinimized: false,
            component: type
        },
        shortcut: {
            windowId: id,
            title: title,
            img: img,
        }
    }
}