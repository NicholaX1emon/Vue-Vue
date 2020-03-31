<template>
  <div class="home">
    <local :local_greetings="local_greetings">
      我是slot aka children -- local
    </local>
    <!-- custom event bound here -->
    <global 
      :global_greetings="global_greetings" 
      :fontSize="global_fontsize"
      @customEnlargeEvent="customEnlargeEvent" 
    >
      我是slot aka children -- global
    </global>
  </div>
</template>

<script>
import Vue from 'vue'


// tranditional render
const local = Vue.component('local', {
  props: {
    local_greetings: String,
  },
  render(h) { // Attribute 'template' causes extra bundle size, use render() instead
    return h('h1', { // h as alias of createElement by JSX standard
      props: {
        local_greetings: this.local_greetings, // pass props to other components' props
      },
      domProps: {
        innerHTML: this.local_greetings,
      },
      class: ['render-local', {
        'cx-true': true,
        'cx-false': false,
      }],
      on: {
        click: () => alert('local alert')
      }
    }) //  receive props from instance this
  },
})


// JSX render
const global = Vue.component('global', {
  props: {
    global_greetings: String,
    customEnlargeEvent: Function,
    fontSize: Number,
  },
  methods: {
    emitEnlargeEvent() {
      this.$emit('customEnlargeEvent', 5) // emit custom event
    }
  },
  render() { 
    return (
      <div>
        <h1 style={{fontSize: `${this.fontSize}px`}}>
          {this.global_greetings}
        </h1>
        <button onClick={this.emitEnlargeEvent}>加大字号+</button>
      </div>
    )
  },
})

export default {
  name: 'LocalComp',
  components: {
    local,
    global,
  },
   data() {
    return {
      local_greetings: 'hahahahahahahahah im local-comp',
      global_greetings: 'xixixixixixixixix im global-comp',
      global_fontsize: 14,
    }
  },
  mounted() {
  },
  methods: {
    customEnlargeEvent(number)  { // do not use arrow function here!!! else this would not refer to correct context
      this.global_fontsize += number || 1
    }
  }
}
</script>
