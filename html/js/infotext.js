var info = [];
info[0] = "Bonus life every " + bonusScore + " points !!";
info[1] = "Winners don't lose games.";
info[2] = "If you don't die you can score more !!";
info[3] = "High scores mean more points !!";
info[4] = "Shoot enemies to kill them !!";
info[5] = "My name is Dr. Sbaitso, I am here to kill you.";
info[6] = "Remove the eggplant curse.";
info[7] = "Game Over";
info[8] = "Ha ha just kidding !!";
info[9] = "Holding RESET did nothing.";
info[10] = "Taking drugs is stupid, Toby.";
info[11] = "Beating a game isn't actually an accomplishment.";
info[12] = "You're trapped here forever.";
info[13] = "Your favorite games said the dumbest things.";
info[14] = "\"It'll be dark by nightfall.\"";
info[15] = "\"Shrink when you touch the glove.\"";
info[16] = "\"I feel better in prison.\"";
info[17] = "\"1997, October 1, The END DAY.\"";
info[18] = "Do you see what I mean?";
info[19] = "Video games are rather dumb, sometimes.";
info[20] = "That's not to say they're not fun.";
info[21] = "But here you are, playing this game.";
info[22] = "A game about a smiling face vomiting bullets at other faces.";
info[23] = "Your only goal is to survive and get a high score.";
info[24] = "Instead of doing something productive ...";
info[25] = "or learning a new skill ...";
info[26] = "you've chosen to sit here and make things explode.";
info[27] = "I'm happy.";
info[28] = "Not for you, but for me.";
info[29] = "I'm happy because you've spent real money on this.";
info[30] = "Real money that I can use to better myself.";
info[31] = "I could buy a car, an RV, or a house.";
info[32] = "I could invest it in stock options.";
info[33] = "I could use it to go back to school.";
info[34] = "I could do a lot of things with your real money.";
info[35] = "Unless you're a pirate";
info[36] = "If you are, well, fuck you too buddy.";
info[37] = "(j/k you should see my ROM collection)";
info[38] = "Where were we?";
info[39] = "Ah yes, mocking your poor financial decisions.";
info[40] = "Don't feel too bad for giving me money.";
info[41] = "I make poor financial decisions too.";
info[42] = "I like to take long road trips, visiting remote towns.";
info[43] = "Sometimes I buy clothes I don't actually need.";
info[44] = "I pay a therapist to tell me what I already know.";
info[45] = "I even pay real money to ride a bus to work.";
info[46] = "My point is ...";
info[47] = "Well, I don't really know. I'm just here to mock you.";
info[48] = "You're still reading this?";
info[49] = "OK then.";
info[50] = "I love you.";

var infotextNum = 0;

function infotext_create() {
  infoText = game.add.text(0, 0, info[0], { font: "16px Px437_DTK_BIOS", fill: "#ffffff", align: "center", boundsAlignH: "center", boundsAlignV: "top", wordWrap: false });
  infoText.setTextBounds(0, 680, 1280, 16);
  setInterval(infotext_swapText, 5000);
  setInterval(infotext_swapColor, 500);
}

function infotext_swapText() {
  infotextNum++;
  if (infotextNum > 50) {
    infotextNum = 0;
  }
  infoText.setText(info[infotextNum]);
}

function infotext_swapColor() {
  var c = infoText.fill;
  if (c === "#ffffff") {
    c = "#ff0000";
  } else if (c === "#ff0000") {
    c = "#00ff00";
  } else if (c === "#00ff00") {
    c = "#0000ff";
  } else if (c === "#0000ff") {
    c = "#ff3300";
  } else if (c === "#ff3300") {
    c = "#ffff00";
  } else if (c === "#ffff00") {
    c = "#ffffff";
  }
  infoText.fill = c;
}
