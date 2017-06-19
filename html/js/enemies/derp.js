var enemyDerp = {
  name: "Derp",
  sprite: null,
  weapon: null,
  health: 5,
  points: 1,
  id: null, // internal tracking

  create: function(x, y) {
    this.sprite = game.add.sprite(x, y, 'enemyDerp');
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.ourParent = this;
  },

  update: function() {
    game.physics.arcade.moveToXY(this.sprite, player.sprite.body.x, player.sprite.body.y, 120);
  },

  hit: function(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.kill();
    }
  },

  kill: function() {
    player.addPoints(this.points);
    enemies.destroy(this);
    this.sprite.kill();
    enemies.spawn(this, (Math.random() * 1150) + 50, (Math.random() * 550) + 75);
  }
}
