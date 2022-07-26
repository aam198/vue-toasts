<template>
  <div class="toast">
    <div class="header">
      <h3>{{ toast.title }}</h3>
    </div>
    <div class="text">
      <p>{{ toast.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleToast',
  props: {
    toast: { required: true, type: Object }
  },
  created () {
   
  }
}
</script>
<style>
:root {
  --cream: #faf8f7;
  --light-grey: #e7e7e7;
  --grey: #cccccc;
  --white: #FFFFFF;
  --green: #1A936F;
  --red: #de3838;
  --blue: #009999;
  --yellow: #ffd400;
}

.success, .info, .warning, .error {
  color: var(--white);
}

.success {
  background-color: var(--green);
}

.info {
  background-color: var(--blue);
}

.warning {
  background-color: var(--yellow);
}

.error {
  background-color: var(--red);
}

.toast {
  width: 500px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--cream);
  justify-content: center;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: .5rem;
  box-shadow: 0 0 0.5rem var(--grey);
}

.toast p {
  font-weight: 100;
}

.toast .sidebar {
  width: .5rem;
}

.toast .content, .toast .header, .toast .text {
  width: 100%;
  display: flex;
}

.toast .content {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  box-sizing: border-box;
}

</style>