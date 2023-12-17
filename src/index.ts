import {CEconItemPreviewDataBlock, CEconItemPreviewDataBlock_Sticker} from "./econ";
import CRC32 from "crc-32";
import * as buffer from "buffer";

export function add(a: number, b: number): number {
    return a + b;
}

console.log(add(3, 5)); //output: 8


export function main(defIndex: number = 61, paintIndex: number = 1040, patternSeed: number = 1, paintWear: number = 0.001): string {
    // !gen 61 1040 1 0.001 0 0 0 0 0 0 0 0
    // steam://rungame/730/76561202255233023/+csgo_econ_action_preview 00183D209008280038EFA48CD40340018052692E

    const econ: CEconItemPreviewDataBlock = {
        rarity: 0,
        defindex: defIndex,
        paintindex: paintIndex,
        paintseed: patternSeed,
        paintwear: floatToBytes(paintWear),
        stickers: [],
    };

    let payload = CEconItemPreviewDataBlock.toBinary(econ);
    while (payload.length < 16) {
        payload = Buffer.concat([Uint8Array.from([0]), payload])
    }

    console.log(payload);

    const crc = CRC32.buf(payload);
    const x_crc = (crc & 0xFFFF) ^ (payload.byteLength * crc);
    const crcBuffer = Buffer.alloc(4);
    crcBuffer.writeUInt32BE(x_crc >>> 0, 0);

    let buffer = Buffer.concat([payload, crcBuffer]);

    return buffer.toString('hex').toUpperCase();
}

function floatToBytes(floatValue: number) {
    const floatArray = new Float32Array(1);
    floatArray[0] = floatValue;
    const byteArray = new Uint32Array(floatArray.buffer);
    console.log(byteArray);
    return byteArray[0];
}

