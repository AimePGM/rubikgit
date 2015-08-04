=================================
========== Instruction ==========
=================================

1. Download & Install Google Chrome
2. Download & Install NodeJS
3. Download and Install Ionic Framework
4. Open terminal or command line, use 'cd' to this project directory
5. type 'ionic serve'

-------- OR --------

1. Download & Install NodeJS
2. Download and Install Ionic Framework
3. Open terminal or command line, then open file to file protocol

On Mac : 
$ open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files

On Window#1 :
for Google Chrome browser
$ google-chrome --allow-file-access-from-files

for Chromium browser
$ chromium-browser --allow-file-access-from-files

On Window#2 :
$ npm install http-server -g
$ http-server C:\location\to\app

On Window#3 :
$ cd toRubikDirectory
~/yourAngularApp 
$ python -m SimpleHTTPServer

then go localhost:8000 in your browser and the page will show


===================================================
========== Download Ionic Framework Here ==========
===================================================

needs to open ionic serve and mobile deployment testing
http://ionicframework.com/getting-started/
*requires Node.js


===============================================================
========== table of color, rubik side and color code ==========
===============================================================

UUUUUUUUU RRRRRRRRR FFFFFFFFF DDDDDDDDD LLLLLLLLL BBBBBBBBB


             +------------+
             | U1  U2  U3 |
             |            |
             | U4  U5  U6 |
             |            |
             | U7  U8  U9 |
+------------+------------+------------+------------+
| L1  L2  L3 | F1  F2  F3 | R1  R2  F3 | B1  B2  B3 |
|            |            |            |            |
| L4  L5  L6 | F4  F5  F6 | R4  R5  R6 | B4  B5  B6 |
|            |            |            |            |
| L7  L8  L9 | F7  F8  F9 | R7  R8  R9 | B7  B8  B9 |
+------------+------------+------------+------------+
             | D1  D2  D3 |
             |            |
             | D4  D5  D6 |
             |            |
             | D7  D8  D9 |
             +------------+


Side	|		Color		|		Color Code
--------------------------------------------------
Up	|		Blue		|		#5882FA
Right	|		Red		|		#FA5858
Front	|		White		|		#FFF
Down	|		Green		|		#33cd5f
Left	|		Orange	|		#FAAC58
Back	|		yellow	|		#F4FA58


====================================================================
========== create path to run on andriod phone on Macbook ==========
====================================================================

{username} = username that is used for log in Macbook

export ANDROID_HOME="/Users/{username}/Library/Android/sdk/"
export ANDROID_TOOLS="/Users/{username}/Library/Android/sdk/tools/"
export ANDROID_PLATFORM_TOOLS="/{username}/AimeTPGM/Library/Android/sdk/platform-tools/"
PATH=$PATH:$ANDROID_HOME:$ANDROID_TOOLS:$ANDROID_PLATFORM_TOOLS

adb devices -l

ionic run android



=======================================
========== open ionic server ==========
=======================================


1. Open terminal cd to directory
2. ionic serve



=============================================================================
========== open file to file protocol for Google Chrome on Macbook ==========
=============================================================================

open /Applications/Google\ Chrome.app/ --args --allow-file-access-from-files


