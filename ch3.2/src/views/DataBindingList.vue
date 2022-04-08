<template>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "table_list",
  components: {},
  data() {
    return {
      productList: [
        {
          product_name: "호랑이",
          price: 10000,
          category: "장난감",
          delivery_price: 2500,
        },
        {
          product_name: "호랑이",
          price: 10000,
          category: "장난감",
          delivery_price: 2500,
        },
        {
          product_name: "호랑이",
          price: 10000,
          category: "장난감",
          delivery_price: 2500,
        },
        {
          product_name: "호랑이",
          price: 10000,
          category: "장난감",
          delivery_price: 2500,
        },
      ],
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  update() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
};
</script>
