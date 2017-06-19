var version = 2;
var debug = true;
var debugLevel = 0;
/* debug levels
**
** 0 - messages and above (shitloads)
** 1 - warnings and above
** 2 - errors and above
** 3 - critical messages
** 4 - super-critical/fatal messages
**
*/

var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update, render: render});
var bonusScore = 50000;
var fullscreenKey = null;
var titleText = null;
var scoreText = null;
var livesText = null;
var waveText = null;
var infoText = null;

function preload() {
  dbg(0, "preload()");

  imageLoad('player', 'images/player.png');
  imageLoad('enemyDerp', 'images/enemies/enemyDerp.png');
  imageLoad('weaponBasic', 'images/weapons/weaponBasic.png');
  imageLoad('weaponLaser', 'images/weapons/weaponLaser.png');
  imageLoad('powerupRapidShot', 'images/powerups/powerupRapidShot.png');
}

function create() {
  dbg(0, "create()");

  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  fullscreenKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  fullscreenKey.onDown.add(fullscreen, this);

  player.create();
  enemyWorldBorder.create();
  enemies.create();

  for (var i = 0; i < 50; i++) {
    enemies.spawn(enemyDerp, (Math.random() * 1150) + 50, (Math.random() * 550) + 75);
  }

  powerupRapidShot.create();

  infotext_create();

  titleText = game.add.text(25, 5, "Pewpew McGee", { font: "16px Px437_DTK_BIOS", fill: "#ffffff", align: "left" });
  scoreText = game.add.text(0, 0, player.score, { font: "16px Px437_DTK_BIOS", fill: "#00ff00", align: "right", boundsAlignH: "right", boundsAlignV: "top", wordWrap: false });
  scoreText.setTextBounds(1100, 25, 150, 16);
  livesText = game.add.text(0, 0, "Lives: " + player.lives, { font: "16px Px437_DTK_BIOS", fill: "#ffffff", align: "left", boundsAlignH: "left", boundsAlignV: "top", wordWrap: false });
  livesText.setTextBounds(25, 25, 300, 16);
  waveText = game.add.text(0, 0, "Wave " + player.wave, { font: "16px Px437_DTK_BIOS", fill: "#ffffff", align: "left", boundsAlignH: "left", boundsAlignV: "top", wordWrap: false });
  waveText.setTextBounds(25, 680, 300, 16);

}


function update() {
  //game.physics.arcade.overlap(player.weapon.bullets, baddies, player.weapon.collide, null, this);
  game.physics.arcade.overlap(player.weapon.bullets, enemies.pbody, player.weapon.collide, null, this);
  game.physics.arcade.overlap(player.weapon.bullets, enemyWorldBorder.border, player.weapon.collide, null, this);
  game.physics.arcade.collide(player.group, enemyWorldBorder.border, null, null, this);
  //game.physics.arcade.overlap(player.sprite, powerupRapidShot.sprite, powerupRapidShot.collide, null, this);
  if (Phaser.Rectangle.intersects(player.sprite.getBounds(), powerupRapidShot.sprite.getBounds())) {
    powerupRapidShot.collide(powerupRapidShot.sprite, player.sprite);
  }
  player.update();
  enemies.update();
  scoreText.setText(player.score);
  livesText.setText("Lives: " + player.lives);

  //enemyDerp.update();
}

function render() {
  //game.debug.geom(scoreText.textBounds, 'rgba(255,0,0,0.5)');
}

function fullscreen() {
  if (game.scale.isFullScreen) {
    game.scale.stopFullScreen();
  } else {
    game.scale.startFullScreen(false);
  }
}
