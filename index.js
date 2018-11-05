#!/usr/bin/env node
const child_process = require('child_process');
const path = require('path');
const arguments = process.argv.slice(-2);
if(['help','h'].indexOf(arguments[1]) !== -1 || arguments[0].length > 1){
  console.log(`
  THE VIDER MANUAL                                          acesmndr 2017 thevider_v2.0.0
  
  thevider [option] [program_name]
 
  Options
    f -> Full screen
    t -> Top half of screen
    b -> Bottom half of screen
    l -> Left half of screen
    r -> Right half of screen
    1 -> Top Left Quarter
    2 -> Top Right Quarter
    3 -> Bottom Left Quarter
    4 -> Bottom Right Quarter
    h -> Print these Help Instructions

  For Example
    To set the Google Chrome App to fullscreen use:
      thevider f chrome
  `)
  return;
}
child_process.exec(`osascript ${path.resolve(__dirname,"thevider.scpt")} ${arguments[0].length===1?arguments[0]:''} ${arguments[1]}`, function(err, out, code) {
 if (err instanceof Error)
   throw err;
});
