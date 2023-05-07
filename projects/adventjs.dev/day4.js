const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]

function fitsInOneBox(boxes) {
    let area = boxes.map(box => 2 * (box.w * box.l + box.w*box.h + box.h * box.l));
    let volumen = boxes.map(box => box.l * box.h * box.w);
    // area = area.sort((a, b) => {
    //     if(a == b) {
    //         return 0;
    //     }
    //     if(a < b) {
    //         return -1;
    //     }
    //     return 1;
    // });

    // area.forEach(num =>)
    console.log(area);
    console.log(volumen);

}

fitsInOneBox(boxes) // true