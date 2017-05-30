var enemyDerp = {
  name: "Derp",
  sprite: null,
  bullets: null,
  bulletSpeed: 300,
  fireRate: 200,
  fireNext: 0,
  create: function(x, y) {
    this.sprite = game.add.sprite(x, y, 'baddie');
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.ourParent = this;
  },
  update: function() { },
  kill: function() {
    this.sprite.kill();
  }
}
