import { defineStore } from 'pinia'
import api from '../api'
import Swal from 'sweetalert2'

export const useCarsStore = defineStore('cars', {
  state: () => ({
    cars: [],
  }),
  actions: {
    async fetchCars() {
      try {
        const response = await api.get('/cars')
        this.cars = response.data
      } catch (error) {
        console.error('Failed to fetch cars:', error)
      }
    },
    async fetchCar(id) {
      try {
        const response = await api.get(`/cars/${id}`)
        if (response?.data) {
          this.cars.push(response.data)
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error?.response?.data?.error
        })
        console.error('Failed to fetch cars:', error)
      }
    },
    async updateCar(car) {
      try {
        delete car._id
        delete car.__v
        const response = await api.put(`/cars/${car.ID}`, car)
        if (response && response.status === 200) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response?.data?.message,
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response?.data?.error
          })
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error?.response?.data?.error
        })
        console.error('Failed to update car:', error)
      }
    },
  },
})
