import Gun from "./model/Gun"

export const GH_ROOT_URL = "/aphelios-sim/";

export const GUN = [
    new Gun('Calibrum', 50, {
        order: 0,
        hexCode: "#33cccc",
        viet: "Súng thiên lý"
    }),
    new Gun('Severum', 50, {
        order: 1,
        hexCode: "#993366",
        viet: "Súng huyết tinh"
    }),
    new Gun('Gravitum', 50, {
        order: 2,
        hexCode: "#a142c6",
        viet: "Pháo trọng trường"
    }),
    new Gun('Infernum', 50, {
        order: 3,
        hexCode: "#3366ff",
        viet: "Súng hỏa ngục"
    }),
    new Gun('Crescendum', 50, {
        order: 4,
        hexCode: "#89a0a1",
        viet: "Thăng hoa luân"
    })
]

export const GUN_INIT_AMMO = 50

export const INIT_QUEUE = [
    GUN[2], GUN[3], GUN[4]
]