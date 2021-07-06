<template>
  <form enctype="multipart/form-data">
    <h2>IPFS Form</h2>
    <input type="file" @change="selectFile" accept="image/*">
    <div>CID: {{ cid }}</div>
    <button id="btnSubmit" @click="upload">
      Upload file to IPFS
    </button>
  </form>
</template>

<script>
  import ipfs from './ipfs'

  import { mapGetters } from 'vuex'

  export default {
    name: 'IPFSForm',
    computed: {
      ...mapGetters('drizzle', ['drizzleInstance']),
    },
    data () {
      return {
        cid: 'Please choose a file to send to IPFS',
        ipfsService: ipfs,
      }
    },
    methods: {
      selectFile (event) {
        event.preventDefault()
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
          this.$store.state.buffer = Buffer.from(reader.result)
          console.log('this.$store.state.buffer', this.$store.state.buffer)
        }
      },
      async upload (event) {
        let ipfsResponse
        event.preventDefault()
        if (this.$store.state.buffer) {
          console.log('this.ipfsService', this.ipfsService)
          console.log('this.drizzleInstance', this.drizzleInstance)
          ipfsResponse = await this.ipfsService.add(this.$store.state.buffer)
          console.log('ipfsResponse', ipfsResponse)
          this.cid = `The file CID in IPFS is: ${ipfsResponse.cid.string}`
          this.drizzleInstance
            .contracts.SimpleIPFSStore
            .methods.set
            .cacheSend(ipfsResponse.cid.string)

          this.$store.state.resourcetimingbufferfull = null
        }
      },
    },
  }
</script>

<style scoped>
  .ipfsform.vue {

  }
</style>
