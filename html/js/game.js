var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

var baddies = null;

function preload() {
  console.log("preload()");
  console.log("Loading images");

  game.load.image('test', 'images/test/test.png');
  game.load.image('pew', 'images/test/pewpew.png');
  game.load.image('baddie', 'images/test/baddie.png');

  return;
}

function create() {
  player.create();

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

  console.log(player.bullets);
  console.log(baddies);

  return;
}

function update() {
  game.physics.arcade.overlap(player.bullets, baddies, player.bulletsCollisionBaddies, null, this);
  player.update();

  return;
}
