var enemies = {
  ea: [],
  pbody: null,

  create: function() {
    this.pbody = game.add.group();
    this.pbody.enableBody = true;
    this.pbody.physicsBodyType = Phaser.Physics.ARCADE;
  },

  clear: function() {
    this.ea.length = 0;
  },

  spawn: function(e, x, y) {
    // spawn an enemy into the array
    var id = this.ea.length;
    this.ea[id] = jQuery.extend(true, {}, e);
    this.ea[id].id = id;
    this.ea[id].create(x, y);
    this.pbody.add(this.ea[id].sprite);
  },

  destroy: function(e) {
    this.pbody.remove(this.ea[e.id].sprite);
    this.ea[e.id] = null;
  },

  update: function() {
    for (var i = 0; i < this.ea.length; i++) {
      if (this.ea[i] != null) {
        this.ea[i].update();
      }
    }
  }
};
