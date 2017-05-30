var player = {
  sprite: null,
  bullets: null,
  bulletSpeed: 300, // speed of bullet
  fireRate: 200,    // rate of fire
  fireNext: 0,
  input: { w: null, s: null, a: null, d: null },
  create: function() {
    this.sprite = game.add.sprite(0, 0, 'test');
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;

    this.bullets = game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 50; i++) {
      var b = this.bullets.create(0, 0, 'pew');
      b.name = 'bullet' + i;
      b.exists = false;
      b.visible = false;
      b.checkWorldBounds = true;
      b.events.onOutOfBounds.add(this.bulletReset, this);
      b.ourParent = this;
    }
/*
    this.bullets.createMultiple(50, 'pew');
    this.bullets.setAll('checkWorldBounds', true);
    this.bullets.setAll('outOfBoundsKill', true);
*/

    this.input.w = game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.input.s = game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.input.a = game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.input.d = game.input.keyboard.addKey(Phaser.Keyboard.D);
    return;
  },
  update: function() {
    if (this.input.w.isDown) {
      this.sprite.body.velocity.y = -100;
    } else if (this.input.s.isDown) {
      this.sprite.body.velocity.y = 100;
    } else {
      this.sprite.body.velocity.y = 0;
    }

    if (this.input.a.isDown) {
      this.sprite.body.velocity.x = -100;
    } else if (this.input.d.isDown) {
      this.sprite.body.velocity.x = 100;
    } else {
      this.sprite.body.velocity.x = 0;
    }

    if (game.input.activePointer.isDown) {
      this.bulletFire();
    }
  },
  bulletFire: function() {
    if (game.time.now > this.fireNext) {
      var b = this.bullets.getFirstExists(false);
      if (b) {
        b.reset(this.sprite.x + 6, this.sprite.y + 6);
        game.physics.arcade.moveToPointer(b, 300);
        this.fireNext = game.time.now + this.fireRate;
      }
    }
  },
  bulletReset: function(b) {
    b.kill();
  },
  bulletsCollisionBaddies: function(source, victim) {
    console.log(source, victim);
    source.kill();
    victim.ourParent.kill();
  }
}
