export const retinaImg = (img) => {
    let imgParts = img.split(`.`)
    return `${imgParts[0]}@2x.${imgParts[1]}`
}

export const mobileImg = (img) => {
    let imgParts = img.split(`.`)
    return `${imgParts[0]}-mobile@2x.${imgParts[1]}`
}
