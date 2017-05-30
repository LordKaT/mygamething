var weaponRapidShot = {
  name: "Rapid Shot",
  bullets: null,
  damage: 1,
  speed: 600,
  rate: 50,
  max: 100,
  next: 0,

  create: function() {
    dbg(0, "weaponRapidShot.create()");

    if (this.bullets !== null) { return; }

    this.bullets = game.add.group();
    this.bullets.enableBody = true;
    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;

    /*
      For the life of me I cannot figure out why I can't just use createMultiple
      to accomplish this. If I don't do it this way the bullets don't have any
      arcade physics attached to them, and I really hate phaser for that.

      Yes, this is even after using setAll.
    */
    for (var i = 0; i < this.max; i++) {
      var b = this.bullets.create(0, 0, 'weaponBasic');
      b.name = this.name + i;
      b.exists = false;
      b.visible = false;
      b.checkWorldBounds = true;
      b.events.onOutOfBounds.add(this.reset, this);
      b.ourParent = this;
    }
  },

  fire: function(x, y) {
    if (game.time.now >= this.next) {
      var b = this.bullets.getFirstExists(false);
      if (b) {
        b.reset(x, y);
        game.physics.arcade.moveToPointer(b, this.speed);
        this.next = game.time.now + this.rate;
      }
    }
  },

  collide: function(self, victim) {
    victim.ourParent.hit(self.ourParent.damage);
    self.kill();
  },

  reset: function(b) {
    b.kill();
  }
}
