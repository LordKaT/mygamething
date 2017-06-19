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

var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
var baddies = null;
var fullscreenKey = null;

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

  baddies = game.add.group();
  baddies.enableBody = true;
  baddies.physicsBodyType = Phaser.Physics.ARCADE;
  /*
  var b = baddies.create(400, 400, 'baddie');
  b.exists = true;
  b.visible = true;
  b.checkWorldBounds = false;
  */
  enemyDerp.create(400, 400);
  baddies.add(enemyDerp.sprite);
  //baddies.add(enemyWorldBorder.borderTop);

  powerupRapidShot.create();

  var s = { font: "16px Px437_DTK_BIOS", fill: "#ffffff", align: "left" };
  var text =  game.add.text(5, 5, "Pewpew McGee", s);

}

function update() {
  game.physics.arcade.overlap(player.weapon.bullets, baddies, player.weapon.collide, null, this);
  game.physics.arcade.overlap(player.weapon.bullets, enemyWorldBorder.border, player.weapon.collide, null, this);
  game.physics.arcade.collide(player.group, enemyWorldBorder.border, null, null, this);
  //game.physics.arcade.overlap(player.sprite, powerupRapidShot.sprite, powerupRapidShot.collide, null, this);
  if (Phaser.Rectangle.intersects(player.sprite.getBounds(), powerupRapidShot.sprite.getBounds())) {
    powerupRapidShot.collide(powerupRapidShot.sprite, player.sprite);
  }
  player.update();
  enemyDerp.update();
}

function fullscreen() {
  if (game.scale.isFullScreen) {
    game.scale.stopFullScreen();
  } else {
    game.scale.startFullScreen(false);
  }
}
