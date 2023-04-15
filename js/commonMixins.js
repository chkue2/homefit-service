export default {
  methods: {
    moveByServiceType(serviceType) {
      if (serviceType === 'group') {
        this.$router.push('/f/group/')
      } else if (this.returnToPaymentStatus(serviceType)) {
        location.href = `/${serviceType}/listings/`
      } else {
        location.href = `/${serviceType}/suggest/`
      }
    },
    moveByServiceTypeForRouter(serviceType) {
      if (this.returnToPaymentStatus(serviceType)) {
        this.$router.push(`/${serviceType}/listings/`)
      } else {
        this.$router.push(`/${serviceType}/suggest/`)
      }
    },
    openByServiceType(serviceType) {
      if (this.returnToPaymentStatus(serviceType)) {
        window.open(`/${serviceType}/listings/`)
      } else {
        window.open(`/${serviceType}/suggest/`)
      }
    },
    returnToPaymentStatus(serviceType) {
      switch (serviceType) {
        case 'workout':
          return window.homefit.user.hasTrialPayCompleted
        case 'meditation':
          return window.homefit.user.meditation.hasPayCompleted
        case 'art':
          return window.homefit.user.art.hasPayCompleted
        case 'music':
          return window.homefit.user.music.hasPayCompleted
        default:
          return false
      }
    },

    changeServiceTypeKorByEng(serviceType) {
      switch (serviceType) {
        case 'all':
          return '전체'
        case 'WORKOUT':
          return '운동'
        case 'MEDITATION':
          return '요가명상'
        case 'ART':
          return '미술'
        case 'MUSIC':
          return '음악'
        default:
          return ''
      }
    },

    returnToServiceTypeEngByClassSimple(classSimple) {
      switch (classSimple) {
        case 'A':
        case 'B':
        case 'C':
          return 'workout'
        case 'D':
          return 'meditation'
        case 'E':
          return 'art'
        case 'F':
        case 'G':
          return 'music'
        default:
          return ''
      }
    },

    returnToPriceCeil(str) {
      const num = String(str).replace(/,/gi, '')
      return Math.round(Number(num) / 100) * 100
    },

    returnToPriceRound(str) {
      const num = String(str).replace(/,/gi, '')
      return Math.floor(Number(num) / 100) * 100
    },

    checkValidateEmail(email) {
      const regex = /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/
      return regex.test(email)
    },

    checkValidatePassword(pw) {
      const regex = /^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{6,}$/
      return regex.test(pw)
    },

    fillZero(width, str) {
      return str.length >= width
        ? str
        : new Array(width - str.length + 1).join('0') + str
    },
  },
}
