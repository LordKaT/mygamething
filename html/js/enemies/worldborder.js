// special enemy that keeps everything in bounds.

var enemyWorldBorder = {
  name: "World Border",
  sprite: null,
  borderTop: null,
  borderBottom: null,
  borderLeft: null,
  borderRight: null,
  border: null,

  create: function() {
    dbg(0, "enemyWorldBorder.create()");

    var g = game.add.graphics(0, 0);
    g.lineStyle(0, 0x00aa00);
    g.beginFill(0x00aa00);
    g.drawRect(25, 50, 1230, 5);  // top
    g.drawRect(25, 670, 1230, 5); // bottom
    g.drawRect(25, 50, 5, 620);   // left
    g.drawRect(1250, 50, 5, 620); // right
    g.endFill();

    this.borderTop = game.add.sprite(25, 0, null);
    game.physics.arcade.enable(this.borderTop);
    this.borderTop.body.setSize(1230, 55, 0, 0);
    this.borderTop.body.immovable = true;
    this.borderTop.ourParent = this;

    this.borderBottom = game.add.sprite(25, 670, null);
    game.physics.arcade.enable(this.borderBottom);
    this.borderBottom.body.setSize(1230, 50, 0, 0);
    this.borderBottom.body.immovable = true;
    this.borderBottom.ourParent = this;

    this.borderLeft = game.add.sprite(0, 50, null);
    game.physics.arcade.enable(this.borderLeft);
    this.borderLeft.body.setSize(30, 620, 0, 0);
    this.borderLeft.body.immovable = true;
    this.borderLeft.ourParent = this;

    this.borderRight = game.add.sprite(1250, 50, null);
    game.physics.arcade.enable(this.borderRight);
    this.borderRight.body.setSize(30, 620, 0, 0);
    this.borderRight.body.immovable = true;
    this.borderRight.ourParent = this;

    this.border = game.add.group();
    this.border.enableBody = true;
    this.border.physicsBodyType = Phaser.Physics.ARCADE;
    this.border.add(this.borderTop);
    this.border.add(this.borderBottom);
    this.border.add(this.borderLeft);
    this.border.add(this.borderRight);
  },

  update: function() { },

  // hit is ignored
  hit: function(damage) { },

  kill: function() {
    dbg(0, "enemyWorldBorder.kill()");
    this.borderTop.kill();
  }
}
