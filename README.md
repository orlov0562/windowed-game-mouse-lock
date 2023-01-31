# windowed-game-mouse-lock
This node script finds a target window after 5 seconds then locks the cursor to that window while that window is active. I started this project because most of the windows games in my steam library would not lock the cursor in windowed mode when they were running in proton/wine.

## Usage

>install:
>
>   $ npm i

>start:
>
>   $ npm start <right-side-x-coord>
>
>   $ npm start 1920

Then find the window you wish to lock to and wait 5 seconds. Changing focus from that window with Alt-Tab or something else disables the lock. Ctrl-C to exit.

## Dev docs
- https://manpages.ubuntu.com/manpages/kinetic/man3/XWarpPointer.3.html
- https://gitlab.freedesktop.org/xorg/lib/libx11/-/blob/master/src/WarpPtr.c
