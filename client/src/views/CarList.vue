<template>
  <div class="container mt-4">
    <table-component v-if="cars">
      <template v-slot:thead>
        <tr>
          <template v-for="(item, index) in headers" :key="index">
            <th>{{item}}</th>
          </template>
        </tr>
      </template>
      <template v-slot:tbody>
        <tr v-for="(car, index) in cars" :key="index">
          <td>{{car.ID}}</td>
          <td>{{car.CARID}}</td>
          <td>{{ car.INSTOCK }}</td>
          <td>{{ car.HORSEPOWER }}</td>
          <td>{{ car.PRICE  }} {{ car.CURRENCY }}</td>
          <td>
            {{ car.COLOR }}
            <div style="width: 100%; height: 20px" :style="{ 'background-color': car.COLOR }"></div>
          </td>
          <td>
            <button class="action" @click="editCar(car.ID)">Edit</button>
          </td>
        </tr>
      </template>
    </table-component>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, computed, toRefs } from 'vue'
import { useCarsStore } from '../stores/cars'
import tableComponent from '../components/Table.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    tableComponent
  },
  setup() {
    const carsStore = useCarsStore()
    const router = useRouter()

    const state = reactive({
      cars: computed(() => carsStore.cars),
      headers: [
        'ID',
        'CARID',
        'INSTOCK',
        'HP',
        'PRICE',
        'COLOR',
        'EDIT'
      ]
    })

    onMounted(() => {
      carsStore.fetchCars()
    })

    const editCar = (id) => {
      // Navigate to the edit page
      navigateToEdit(id);
    }

    const navigateToEdit = (id) => {
      /// Navigate to the edit page with the car ID as a parameter
      router.push({ name: 'CarEdit', params: { id: id } });
    };

    return {
      ...toRefs(state),
      editCar
    }
  },
})
</script>

<style scoped lang="scss">
  button.action {
    padding: 8px 16px;
    border-radius: 6px;
    background-color: #92c9fc;
    &:hover {
      cursor: pointer;
    }
  }
</style>
