<script>
  import { Button, Modal, Input, Label, Helper } from "flowbite-svelte";
  import axios from "axios";
  let distance = null;
  let volume = null;
  let popupModal = false;
  let containerParameters = {
    radius: 4,
    height: 19,
  };
  let containerFilledParams = {
    height: null,
    volume: null,
    percentage: null
  }

  $:{
    containerFilledParams.height = containerParameters.height - distance;
    containerFilledParams.volume = Math.PI * Math.pow(containerParameters.radius, 2) * containerFilledParams.height;
    containerFilledParams.percentage = (containerFilledParams.volume / (Math.PI * Math.pow(containerParameters.radius, 2) * containerParameters.height)) * 100;
  }

  setInterval(async () => {
    fetch("https://sahel-project.onrender.com/distance")
    .then((res) => {
      res.json()
      .then((res) => {
        distance = res;
      })
    })
  }, 1000);
</script>

<div class="hero min-h-screen" style="">
  <div class="hero-overlay bg-opacity-60" />
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md relative bottom-32 flex flex-col items-center">
      <div class="ring-4 bg-blue-500 rounded-xl w-[250px] h-[300px]">
        <div class={`relative bg-gray-800 rounded-xl z-10 w-[250px] h-[300px]`}>
          <div class="text-2xl text-center relative top-[150px]">
            {parseFloat(Math.abs(containerFilledParams.percentage).toFixed(1))} %
          </div>
        </div>
      </div>
      <Button
        class="relative top-8"
        on:click={() => (popupModal = true)}
        autoclose>Container Parameters</Button
      >
      <Modal
        class="dark bg-gray-800"
        title="Set Parameters"
        bind:open={popupModal}
      >
        <div>
          <Label for="first_name" class="mb-2">Radius</Label>
          <Input
            type="text"
            id="first_name"
            placeholder="4 cm"
            required
            bind:value={containerParameters.radius}
          />
        </div>
        <div>
          <Label for="first_name" class="mb-2">Height</Label>
          <Input
            type="text"
            id="first_name"
            placeholder="19 cm"
            required
            bind:value={containerParameters.height}
          />
        </div>
      </Modal>
    </div>
  </div>
</div>
