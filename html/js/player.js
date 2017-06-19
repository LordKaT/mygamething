var player = {
  sprite: null,
  weapon: weaponBasic,
  speed: 200,
  input: { w: null, s: null, a: null, d: null },
  group: null,
  score: 0,
  lives: 3,
  wave: 1,

  create: function() {
    dbg(0, "player.create()");
    dbg(0, "creating player sprite");
    this.sprite = game.add.sprite(632, 351, 'player');
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.ourParent = this;

    this.weapon.create();

    dbg(0, "loading inputs");
    this.input.w = game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.input.s = game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.input.a = game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.input.d = game.input.keyboard.addKey(Phaser.Keyboard.D);

    this.group = game.add.group();
    this.group.enableBody = true;
    this.group.physicsBodyType = Phaser.Physics.ARCADE;

    this.group.add(this.sprite);
  },

  weaponSwap: function(w) {
    this.weapon = w;
    this.weapon.create();
  },

  addPoints: function(s) {
    for (var i = 0; i < s; i++) {
      this.score++;
      if (this.score % bonusScore === 0) {
        this.lives++;
      }
    }
  },

  update: function() {
    // earn extra life
    if (this.input.w.isDown) {
      this.sprite.body.velocity.y = -this.speed;
    } else if (this.input.s.isDown) {
      this.sprite.body.velocity.y = this.speed;
    } else {
      this.sprite.body.velocity.y = 0;
    }

    if (this.input.a.isDown) {
      this.sprite.body.velocity.x = -this.speed;
    } else if (this.input.d.isDown) {
      this.sprite.body.velocity.x = this.speed;
    } else {
      this.sprite.body.velocity.x = 0;
    }

    if (game.input.activePointer.isDown) {
      this.weapon.fire(this.sprite.x + this.sprite.body.halfWidth, this.sprite.y + this.sprite.body.halfHeight);
    }
  }
}
