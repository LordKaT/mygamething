function dbg(dbgLevel, log) {
  if (debug === true) {
    if (dbgLevel >= debugLevel) {
      console.log(log);
    }
  }
}

function imageLoad(tag, file) {
  dbg(0, "Loading " + tag + " from " + file);
  game.load.image(tag, file + '?v=' + version);
}
