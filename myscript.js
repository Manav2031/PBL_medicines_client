#!/usr/bin/env node
const { exec } = require('child_process');
const pythonScriptPath = './emotion_model.py';
exec(`python ${pythonScriptPath}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
