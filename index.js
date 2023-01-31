const x11 = require("x11");
const {promisify} = require("util");

let wx = 1920;

let argv = process.argv.slice(2);
if (argv[0]!=undefined) wx = argv[0];

x11.createClient(async function(err, display) {
    const X = display.client;
    const root = display.screen[0].root;

    const queryPointer = promisify(X.QueryPointer.bind(X));
    const getFocus = promisify(X.GetInputFocus.bind(X));
    const timeout = promisify(setTimeout);

    let i = 6;
    console.log("getting window in: ");

    while(--i > 0) {
        console.log(i);
        await timeout(1000);
    }

    let targetWindow = (await getFocus()).focus;

    console.log("locking mouse to window " + targetWindow + " while active");

    while (true) {
        let currentWindow = (await getFocus()).focus;

        if(currentWindow == targetWindow) {

            let ptr = await queryPointer(root);

            let px = ptr.childX;
            let py = ptr.childY;
            
            if (px > wx) {
                X.WarpPointer(0, root, 0, 0, 0, 0, wx*2, py);
            }
        }

        await timeout(10);
    }
});

