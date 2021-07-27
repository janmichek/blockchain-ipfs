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

  export default {
    name: 'IPFSForm',
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
        }
      },
      async upload (event) {
        let ipfsResponse
        event.preventDefault()
        if (this.$store.state.buffer) {
          ipfsResponse = await this.ipfsService.add(this.$store.state.buffer)
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
