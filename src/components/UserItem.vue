<template>
  <li class="item">
    <h3 class="name">{{ user.username }}</h3>
    <p class="fullname-p">
      <span class="key">Fullname:</span>
      <span class="value">{{ user.name }}</span>
    </p>
    <p class="email-p">
      <span class="key">Email:</span>
      <span class="value">{{ user.email }}</span>
    </p>
    <p class="address-p">
      <span class="key">Address:</span>
      <span class="value"
        >{{ user.address.city }}, {{ user.address.street }}</span
      >
    </p>
  </li>
</template>

<style lang="scss" scoped>
.item {
  display: block;

  width: 23%;
  min-width: 300px;

  height: 300px;

  border-radius: 1rem;
  border: 2px solid rgb(255, 128, 0);
  background-color: #fff;

  margin-bottom: 1rem;
  margin-right: 1rem;

  padding: 0.5rem;

  display: flex;
  flex-direction: column;

  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0 0 0.5rem #000;
  }

  .name {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;

    margin-bottom: 1rem;
  }

  .key {
    font-weight: 400;

    margin-right: 0.3rem;
  }

  .value {
    font-weight: 300;
  }

  .email-p,
  .address-p,
  .fullname-p {
    font-size: 1.3rem;
  }

  .email-p,
  .fullname-p {
    margin-bottom: 0.5rem;
  }
}
</style>

<script>
export default {
  name: "UserItem",

  props: {
    user: {
      required: true,
      default: {},
    },
  },
};
</script>
