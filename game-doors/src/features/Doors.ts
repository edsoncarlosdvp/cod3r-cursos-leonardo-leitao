import DoorModel from '@model/DoorModel'

export function createDoors(qtd: number, doorWithGif: number): DoorModel[] {
    return Array.from({ length: qtd }, (_, i) => {
        const num = i + 1
        const haveGif = num === doorWithGif
        return new DoorModel(num, haveGif)
    })
}

export function refreshDoors(
    doors: DoorModel[],
    doorModify: DoorModel
): DoorModel[] {
    return doors.map(doorActual => {
        const equalModify = doorActual.num === doorModify.num

        if (equalModify) {
            return doorModify
        } else {
            return doorModify.opening ? doorActual : doorActual.notSelected()
        }
    })
}
