<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-header">
        <h1>Edit Car</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="updateCar" v-if="car">
          <div class="mb-3">
            <label for="id" class="form-label">ID</label>
            <input type="number" id="id" class="form-control" v-model="car.ID" disabled>
          </div>
          <div class="mb-3">
            <label for="carId" class="form-label">Car ID</label>
            <input type="text" id="carId" class="form-control" v-model="car.CARID" disabled>
          </div>
          <div class="mb-3 form-check">
            <label for="inStock" class="form-check-label">In Stock</label>
            <input type="checkbox" id="inStock" class="form-check-input" v-model="car.INSTOCK">
          </div>
          <div class="mb-3">
            <label for="horsepower" class="form-label">Horsepower</label>
            <input type="number" id="horsepower" class="form-control" v-model="car.HORSEPOWER" @input="validateHorsepower">
            <div v-if="horsepowerError" class="text-danger">{{ horsepowerError }}</div>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <div class="input-group">
              <input type="number" id="price" class="form-control" v-model="car.PRICE">
              <span
                v-for="currency in currencies"
                :key="currency"
                :class="['input-group-text', 'currency-select', { 'active': car.CURRENCY === currency }]"
                @click="selectCurrency(currency)"
              >
                {{ currency }}
              </span>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label d-block">Color</label>
            <label v-for="color in colors" :key="color" class="ps-1 pe-1">
              <input type="radio" v-model="car.COLOR" :value="color">
              {{ color }}
            </label>
          </div>
          <div class="mb-3 mt-4 text-end">
            <button type="cancel" class="btn btn-secondary me-2" @click="$router.push('/')">Cancel</button>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>
        <div v-else>Loading car data...</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, reactive, toRefs, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCarsStore } from '../stores/cars'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const carsStore = useCarsStore()
    const id = route.params.id

    const state = reactive({
      car: computed(() => carsStore.cars.find((c) => c.ID == id)),
      horsepowerError: '',
      colors: ['Red', 'Blue', 'Orange', 'Yellow', 'Green', 'Pink'],
      currencies: ['₺', '$', '€', '£', '¥'],
      selectedCurrency: null,
    })

    const validateHorsepower = () => {
      const minHorsepower = 100
      const maxHorsepower = 550
      const enteredHorsepower = state.car.HORSEPOWER

      if (enteredHorsepower < minHorsepower || enteredHorsepower > maxHorsepower) {
        state.horsepowerError = `Horsepower must be between ${minHorsepower} and ${maxHorsepower}`
      } else {
        state.horsepowerError = ''
      }
    }

    const updateCar = () => {
      carsStore.updateCar(state.car)
      router.push('/')
    }

    const selectCurrency = (currency) => {
      state.car.CURRENCY = currency;
    }

    onMounted(() => {
      if (!state.car) {
        carsStore.fetchCar(id)
      }
    })

    return {
      ...toRefs(state),
      updateCar,
      validateHorsepower,
      selectCurrency
    }
  },
})
</script>

<style>
.text-danger {
  color: red;
}
.currency-select.active {
  background-color: #007bff;
  color: #fff;
}
.currency-select.active:hover {
  background-color: #0069d9;
}
.currency-select:hover {
  cursor: pointer;
}
</style>
