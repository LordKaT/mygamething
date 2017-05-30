var powerupRapidShot = {
  name: "Rapid Shot",
  sprite: null,

  create: function() {
    dbg(0, "powerupRapidShot.create()");

    if (this.sprite !== null) { return; }

    this.sprite = game.add.sprite(300, 100, 'powerupRapidShot');
  },

  collide: function(self, victim) {
    self.kill();
    victim.ourParent.weaponSwap(weaponRapidShot);
  }
}
