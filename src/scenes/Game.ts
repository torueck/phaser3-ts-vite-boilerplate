import Phaser from 'phaser';

export default class Demo extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  player = {} as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  cursors = {} as Phaser.Types.Input.Keyboard.CursorKeys;
  stars = {} as Phaser.Physics.Arcade.Group;
  bombs = {} as Phaser.Physics.Arcade.Group;
  score = 0;
  scoreText = {} as Phaser.GameObjects.Text;
  gameOver = false;

  preload(): void {
    this.load.image('logo', 'assets/phaser3-logo.png');
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create(): void {
    // this.add.image(400, 300, 'sky');

    this.add.image(400, 70, 'logo');
    // const logo = this.add.image(400, 70, 'logo');
    // this.tweens.add({
    //   targets: logo,
    //   y: 350,
    //   duration: 1500,
    //   ease: 'Sine.inOut',
    //   yoyo: true,
    //   repeat: -1,
    // });

    this.player = this.physics.add.sprite(100, 450, 'dude');

    this.cursors = this.input.keyboard.createCursorKeys();

    const platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    // const player = this.physics.add.sprite(100, 450, 'dude');

    this.physics.add.collider(this.player, platforms);

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.stars.children.iterate((child) => {
      const sprite = child as Phaser.Physics.Arcade.Sprite;
      sprite?.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.player, platforms);
    this.physics.add.collider(this.stars, platforms);

    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar,
      undefined,
      this
    );

    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      color: '#000',
    });

    this.bombs = this.physics.add.group();

    this.physics.add.collider(this.bombs, platforms);

    this.physics.add.collider(
      this.player,
      this.bombs,
      this.hitBomb,
      undefined,
      this
    );
  }

  update(): void {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  collectStar(
    _: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    star: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ): void {
    const starSprite = star as Phaser.Physics.Arcade.Sprite;
    starSprite?.disableBody(true, true);

    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);

    if (this.stars.countActive(true) === 0) {
      this.stars.children.iterate(function (child) {
        const sprite = child as Phaser.Physics.Arcade.Sprite;
        sprite?.enableBody(true, sprite.x, 0, true, true);
      });

      const x =
        this.player.x < 400
          ? Phaser.Math.Between(400, 800)
          : Phaser.Math.Between(0, 400);

      const bomb = this.bombs.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

  hitBomb(player: Phaser.Types.Physics.Arcade.GameObjectWithBody): void {
    this.physics.pause();

    const playerSprite = player as Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

    playerSprite?.setTint(0xff0000);

    playerSprite?.anims.play('turn');

    this.gameOver = true;
  }
}
