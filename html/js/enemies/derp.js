var enemyDerp = {
  name: "Derp",
  sprite: null,
  weapon: null,
  health: 20,

  create: function(x, y) {
    dbg(0, "enemyDerp.create()");
    this.sprite = game.add.sprite(x, y, 'enemyDerp');
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.ourParent = this;
  },

  update: function() { },

  hit: function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.kill();
    }
  },

  kill: function() {
    dbg(0, "enemyDerp.kill()");
    this.sprite.kill();
  }
}
