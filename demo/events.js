const EveEmitter = require("events")

const emitter = new EveEmitter()




class Dispatcher extends EveEmitter {
    subscribe(eventName, cb) {
        console.log('[Subscribe...]')
        this.on(eventName, cb)
    }

    dispatch(eventName, data) {
      console.log('[Dispatching...]')
      this.emit(eventName, data)
    }
}

const dis = new Dispatcher()



dis.subscribe('aa', data => {
    console.log('ON: aa', data)
})

dis.dispatch('aa', {aa: 22})