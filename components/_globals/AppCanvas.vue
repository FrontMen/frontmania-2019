<template>
  <div ref="sprayCanWrapper" class="spray-can-wrapper" @mousemove="mouseMove">
    <slot />
    <canvas ref="sprayCanCanvas" class="spray-canvas" width="800" height="600" />
  </div>
</template>

<script>
export default {
  name: 'FmSprayCan',
  props: {
    color: {
      type: String,
      default: 'yellow'
    }
  },
  data: function() {
    return {
      ctx: false,
      density: 50,
      clientX: 0,
      clientY: 0
    }
  },
  mounted() {
    const el = this.$refs.sprayCanCanvas
    el.width = window.innerWidth
    el.height = window.innerHeight
    this.ctx = el.getContext('2d')
  },
  methods: {
    getRandomInt: function(max) {
      return Math.floor(Math.random() * Math.floor(max))
    },
    getRandomFloat: function(min, max) {
      return Math.random() * (max - min) + min
    },
    draw: function() {
      for (let i = this.density; i--; ) {
        const angle = this.getRandomFloat(0, Math.PI * 2)
        const radius = this.getRandomFloat(0, 50)
        this.ctx.fillStyle = '#ffed00'
        this.ctx.shadowColor = '#fff78c'
        this.ctx.shadowBlur = 10
        this.ctx.fillRect(
          this.clientX + radius * Math.cos(angle),
          this.clientY + radius * Math.sin(angle),
          this.getRandomInt(3),
          this.getRandomInt(3)
        )
      }
    },
    mouseMove: function(e) {
      this.ctx.lineJoin = this.ctx.lineCap = 'round'
      this.clientX = e.clientX + 60
      this.clientY = e.clientY
      requestAnimationFrame(this.draw)
    }
  }
}
</script>

<style scoped lang="scss">
.spray-can-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  cursor: url(/images/spray-can.svg),
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAMAAAB4HKeYAAAACVBMVEX///8AAAD///9+749PAAAAAXRSTlMAQObYZgAAADRJREFUeAFjwAsYsfMYQYgRLsLICKWhskxMTDAmCEMAwhQmEEDho8szUiqPaR+xfIR7sQMAR6QAjICqvMYAAAAASUVORK5CYII=),
    pointer;
}

.spray-canvas {
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  position: absolute;
  pointer-events: none;
}
</style>
