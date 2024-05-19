<script>
 import { goto } from '$app/navigation';

 const setId0 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/0`;
    goto(newPath);
}

 const setId1 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/1`;
    goto(newPath);
}

const setId2 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/2`;
    goto(newPath);
}

const setId3 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/3`;
    goto(newPath);
}

const setId4 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/4`;
    goto(newPath);
}

const setId5 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/5`;
    goto(newPath);
}

const setId6 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/6`;
    goto(newPath);
}

const setId7 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/7`;
    goto(newPath);
}

const setId8 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/8`;
    goto(newPath);
}

const setId9 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/9`;
    goto(newPath);
}

const setId10 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/10`;
    goto(newPath);
}

const setId11 = () => {
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/11`;
    goto(newPath);
}


</script>

<div class="container">
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId0}>Simulazione 0</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId1}>Simulazione 1</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId2}>Simulazione 2</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId3}>Simulazione 3</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId4}>Simulazione 4</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId5}>Simulazione 5</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId6}>Simulazione 6</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId7}>Simulazione 7</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId8}>Simulazione 8</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId9}>Simulazione 9</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId10}>Simulazione 10</button>
<button id="dark-primary" class="btn variant-filled-primary" on:click={setId11}>Simulazione 11</button>
<br>

</div>

<style>

main, html, body {
  height: 100%;
  width: 100% !important;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100% !important;
}

button {
  margin: 5px 0; /* Optional: Add some spacing between buttons */
}


</style>