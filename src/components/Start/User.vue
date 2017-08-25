<template>
  <div class="bg">
    <transition appear name="bounce"
      enter-active-class="animated bounceInDown"
      mode="out-in">
      <div class="dim">
        <div class="container">
          <div class="background">
            <transition name="slide" appear mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </div>
      </div>
    </transition>
      <div class="shape">
        <transition appear mode="out-in"
          enter-active-class="animated zoomIn">
          <div class="shape1"></div>
        </transition>
        <transition name="fade" appear mode="out-in"
          enter-active-class="animated zoomIn">
          <div class="shape2"></div>
        </transition>
        <transition name="fade" appear mode="out-in"
          enter-active-class="animated zoomIn">
          <div class="shape3"></div>
        </transition>
        <transition name="fade" appear mode="out-in"
          enter-active-class="animated zoomIn">
          <div class="shape4"></div>
        </transition>
        <transition name="scaleX" appear mode="out-in">
          <div class="shape5"></div>
        </transition>
        <transition name="scaleY" appear>
          <div class="shape6"></div>
        </transition>
        <transition name="fade" appear mode="out-in"
          enter-active-class="animated zoomIn">
          <div class="shape7"></div>
        </transition>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="sass" scoped>
  @import "~config"
  .bg
    width: 100%
    height: 100vh
    overflow: hidden
    position: relative
  .shape
    background: #100632
    width: 100%
    height: 100vh
    position: absolute
    top: 0
    left: 0
    z-index: -1
  .shape1
    width: 20%
    height: 20%
    position: absolute
    top: 10%
    left: 10%
    background-image: url('../../assets/images/shape1.svg')
    background-size: contain
    background-repeat: no-repeat
    animation-duration: 0.4s
    animation-delay: 0.8s
    animation-timing-function: ease-in-out
  .shape2
    width: 30%
    height: 30%
    position: absolute
    bottom: 0
    right: 0
    background-image: url('../../assets/images/shape2.svg')
    background-size: contain
    background-repeat: no-repeat
    animation-duration: 0.4s
    animation-delay: 0.5s
    animation-timing-function: ease-in-out
  .shape3
    width: 20%
    height: 20%
    position: absolute
    bottom: -8%
    left: 20%
    background-image: url('../../assets/images/shape3.svg')
    background-size: contain
    background-repeat: no-repeat
    z-index: 1
    animation-duration: 0.3s
    animation-delay: 0.8s
  .shape4
    width: 50%
    height: 50%
    position: absolute
    top: 0
    left: 20%
    background-image: url('../../assets/images/shape4.svg')
    background-size: contain
    background-repeat: no-repeat
    z-index: 2
    animation-duration: 0.2s
    animation-delay: 0.3s
  .shape5
    width: 60%
    height: 60%
    position: absolute
    bottom: 0
    background-image: url('../../assets/images/shape5.svg')
    background-size: contain
    background-repeat: no-repeat
    animation-timing-function: ease-in-out
  .shape6
    width: 90%
    height: 90%
    position: absolute
    top: -15%
    left: 8%
    background-image: url('../../assets/images/shape6.svg')
    background-size: contain
    background-position: top left
    background-repeat: no-repeat
    z-index: 1
    animation-duration: 0.5s
    animation-delay: 0.7s
  .shape7
    width: 65%
    height: 65%
    position: absolute
    top: -25%
    right: -28%
    background-image: url('../../assets/images/shape7.svg')
    background-size: contain
    background-position: top left
    background-repeat: no-repeat
    animation-duration: 0.2s
    animation-delay: 0.5s

  .dim
    width: 100%
    height: 150%
    background: radial-gradient(ellipse at center, #191919, rgba(25,25,25,0)35%, rgba(25,25,25,0.7))
    padding-top: 7%
    animation-duration: 0.8s
    animation-delay: 1.2s
    
    
  .container
    +container(1190px 12)
  .background
    margin: 0 auto
    // background: #3d22a3
    background: url('../../assets/images/b_g.png') no-repeat
    background-size: cover
    width: 420px
    height: leading(24)
    text-align: center
    box-shadow: 0px 3px 59px 0px rgba(0, 0, 0, 0.5)
    z-index: 1000

  .scaleY-enter
    opacity: 0
    // transform: scale(0)
  .scaleY-enter-active
    animation: scaleY-in 0.3s ease-in forwards
  @keyframes scaleY-in
    0%
      transform: translateY(-100%) scale(0.8)
    70%
      transform: scale(1.1)
    100%
      transform: translateY(0) scale(1)

  .scaleX-enter
    // opacity: 0
    transform: scale(0)
  .scaleX-enter-active
    animation: scaleX-in 0.5s ease-in 0.3 forwards
  @keyframes scaleX-in
    0%
      // opacity: 0
      transform: translateX(-100%) scale(0.5)
    70%
      // opacity: 1
      transform: scale(1.1)
    100%
      transform: translateX(0) scale(1)

  .slide-enter
    opacity: 0
  .slide-enter-active
    animation: slide-in 0.3s ease-in forwards
    transition: opacity 0.3s
  .slide-leave-active
    animation: slide-out 0.3s ease-in forwards
    transition: opacity 0.3s
  .slide-leave
    opacity: 0
  @keyframes slide-in
    from
      transform: translateX(100px)
      opacity: 0
    to
      transform: translateX(0)
      opacity: 1
  @keyframes slide-out
    from
      transform: translateX(0)
      opacity: 1
    to
      transform: translateX(-100px)
      opacity: 0
</style>