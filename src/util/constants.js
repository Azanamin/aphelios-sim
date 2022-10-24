import Gun from "./model/Gun"

export const GUN = [
    new Gun('Calibrum', 50, {}),
    new Gun('Severum', 50, {}),
    new Gun('Gravitum', 50, {}),
    new Gun('Infernum', 50, {}),
    new Gun('Crescendum', 50, {})
]

export const GUN_INIT_AMMO = 50

export const INIT_QUEUE = [
    GUN[2], GUN[3], GUN[4]
]