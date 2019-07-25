<template>
  <section class="canvas-wrapper">
    <canvas class="c" width="800" height="600"></canvas>
  </section>
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
  mounted() {
    const el = document.querySelector('.canvas-wrapper .c')
    const container = document.querySelector('.canvas-wrapper')
    const canvasWidth = window.innerWidth - 1
    const canvasHeight = window.innerHeight - 1
    el.width = canvasWidth
    el.height = canvasHeight
    const ctx = el.getContext('2d')
    let clientX, clientY
    const density = 45

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max))
    }

    function getRandomFloat(min, max) {
      return Math.random() * (max - min) + min
    }

    function draw() {
      for (let i = density; i--; ) {
        const angle = getRandomFloat(0, Math.PI * 2)
        const radius = getRandomFloat(0, 50)
        ctx.fillStyle = '#ffed00'
        ctx.shadowColor = '#fff78c'
        ctx.shadowBlur = 10
        ctx.fillRect(
          clientX + radius * Math.cos(angle),
          clientY + radius * Math.sin(angle),
          getRandomInt(3),
          getRandomInt(3)
        )
      }
    }

    container.onmousemove = function(e) {
      ctx.lineJoin = ctx.lineCap = 'round'
      clientX = e.clientX + 60
      clientY = e.clientY
      requestAnimationFrame(draw)
    }
  }
}
</script>

<style scoped lang="scss">
.canvas-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  cursor: url(/images/spray-can.svg),
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAATCAMAAAB4HKeYAAAACVBMVEX///8AAAD///9+749PAAAAAXRSTlMAQObYZgAAADRJREFUeAFjwAsYsfMYQYgRLsLICKWhskxMTDAmCEMAwhQmEEDho8szUiqPaR+xfIR7sQMAR6QAjICqvMYAAAAASUVORK5CYII=),
    pointer;
}

.c {
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  position: absolute;
}
</style>
