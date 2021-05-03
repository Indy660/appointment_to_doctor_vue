<template>
    <b-container>
        <b-row class="justify-content-md-center mt-4">
            <b-col col md="8">
                <b-card
                    header="Форма записи к врачу"
                    header-bg-variant="primary"
                    header-text-variant="white"
                >
                    <b-card-text>
                        <b-form @submit.prevent="appointment()">
                            <div v-for="(input, key, index) in inputs" :key="index">
                                <template v-if="input.type === 'seek_city'">
                                    <b-form-group
                                        :description=input.description
                                    >
                                        <DaDataComponent :placeholder="input.tabel" :func="rulesInputCity"/>
                                    </b-form-group>
                                </template>
                                <template v-else>
                                    <b-form-group
                                        :description=input.description
                                        :tabel=input.tabel
                                    >
                                        <b-form-input
                                            :placeholder="input.tabel"
                                            :type=input.type
                                            :state=input.state
                                            v-model="input.input_value"
                                            @update="input.rules(key)"
                                        >
                                        </b-form-input>
                                        <b-form-invalid-feedback>
                                            {{ input.mistake }}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </template>
                            </div>
                            <b-form-group
                                    description="Выерите время записи"
                                    tabel="Время записи"
                            >
                                <b-row class="mb-3">
                                    <b-col md="4">
                                        <b-form-select v-model="timeBegin" :options="timeZone"></b-form-select>
                                    </b-col>
                                    <b-col md="4">
                                        <b-form-select v-model="timeEnd" :options="timeZone"></b-form-select>
                                    </b-col>
                                    <b-button type="submit" :disabled="disableButton" variant="outline-primary">Создать запись</b-button>
                                </b-row>
                            </b-form-group>
                            <b-form-group>
                            </b-form-group>
                        </b-form>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import DaDataComponent from '../components/DaDataComponent'
export default {
    name: 'MainForm',
    components: {
        DaDataComponent
    },
    data() {
        return {
            inputs: {
                1: {
                    id: 1,
                    input_value: '',
                    type: 'text',
                    description: 'Введите ваше ФИО',
                    tabel: 'Ваше ФИО',
                    state: null,
                    mistake: 'Заполните форму',
                    rules: ((key) => { this.rulesInputName(key) })
                },
                2: {
                    id: 2,
                    input_value: 0,
                    type: 'number',
                    description: 'Введите ваш возраст',
                    tabel: 'Ваш возраст',
                    state: null,
                    mistake: 'Укажите возраст',
                    rules: ((key) => { this.rulesInputAge(key) })

                },
                3: {
                    id: 3,
                    input_value: '',
                    type: 'date',
                    description: 'Введите дату записи',
                    tabel: 'Ваша дату',
                    state: null,
                    mistake: 'Заполните форму',
                    rules: ((key) => { this.rulesInputDate(key) })
                },
                4: {
                    id: 4,
                    input_value: '',
                    type: 'seek_city',
                    description: 'Введите город проживания',
                    tabel: 'Ваш город',
                    state: null,
                    mistake: 'Заполните форму',
                    // rules: ((key) => { this.rulesInputCity(key) })
                },
            },
            timeBegin: '',
            timeEnd: '',
            disableButton: true,
            timeZone: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
        }
    },
    watch: {
        timeBegin: {
            handler() {
                this.checkForms()
            }
        },
        timeEnd: {
            handler() {
                this.checkForms()
            }
        },
        // Попытки отследить изменения в инпуте городов
        // input_value_city: {
        //     handler() {
        //         console.log(1)
        //         this.checkForms()
        //     }
        // }
    },
    computed: {
        // Попытки отследить изменения в инпуте городов
        // input_value_city() {
        //     return this.inputs[4].input_value
        // }
        // inputs() {
        //     return this.$store.state.inputs
        // },
        // timeBegin: {
        //     get() {
        //         return this.$store.state.timeBegin
        //     },
        //     set(value) {
        //         this.$store.commit('updateTimeBegin', value)
        //     }
        // },
        // timeEnd: {
        //     get() {
        //         return this.$store.state.timeEnd
        //     },
        //     set(value) {
        //         this.$store.commit('updateTimeEnd', value)
        //     }
        // }
    },
    methods: {
        checkForms() {
            // console.log('checkForms')
            for (const key in this.inputs) {
                // console.log(key, this.inputs[key], this.inputs[key].state)
                if (this.inputs[key].state === false || this.inputs[key].state === null) {
                    this.disableButton = true;
                    return
                }
            }
            if (this.checkTime() === true) {
                this.disableButton = false
            } else {
                this.disableButton = true;
            }
        },
        rulesInputName(key) {
            //знаю, что можно сломать инпуты эту регулярку
            // /[^a-zA-ZА-Яа-я ]$/.test(this.inputs[key].input_value)
            if (
                this.inputs[key].input_value.includes(" ") &&
                this.inputs[key].input_value.replace(/[^a-zA-ZА-Яа-я]$/, "").length >= 4 &&
                /^[a-zA-ZА-Яа-я ]+$/.test(this.inputs[key].input_value)
            ) {
                this.$set(this.inputs[key], 'state', true)
            } else if (this.inputs[key].input_value.length === 0) {
                this.$set(this.inputs[key], 'state', null)
            } else {
                this.$set(this.inputs[key], 'state', false)
            }
            this.checkForms()
        },
        // rulesInputName(key) {
        //     console.log('rulesInputName', key)
        //     //знаю, что можно сломать инпуты эту регулярку
        //     if (this.inputs[key].input_value.length > 4 &&
        //         this.inputs[key].input_value.includes(" ") &&
        //         this.inputs[key].input_value.replace(/[^a-zA-ZА-Яа-я]/g, "").length >= 4
        //     ) {
        //         this.$set(this.inputs[key], 'state', true)
        //     } else if (this.inputs[key].input_value.length === 0) {
        //         this.$set(this.inputs[key], 'state', null)
        //     } else {
        //         this.$set(this.inputs[key], 'state', false)
        //     }
        //     this.checkForms()
        // },
        rulesInputAge(key) {
            if (this.inputs[key].input_value) {
                if (this.inputs[key].input_value < 0 || this.inputs[key].input_value > 150) {
                    this.$set(this.inputs[key], 'state', false);
                    this.$set(this.inputs[key], 'mistake', 'Возраст должен быть в пределах от 0 до 150')
                } else {
                    this.$set(this.inputs[key], 'state', true)
                }
            } else {
                this.$set(this.inputs[key], 'state', false);
                this.$set(this.inputs[key], 'mistake', 'Укажите возраст')
            }
            this.checkForms()
        },
        rulesInputDate(key) {
            if (this.inputs[key].input_value.length > 0) {
                this.$set(this.inputs[key], 'state', true)
            } else {
                this.$set(this.inputs[key], 'state', false)
            }
            this.checkForms()
        },
        rulesInputCity(callback) {
            //не совсем понимаю, как отследить удаление выбранного типа
            // console.log(key)
            this.inputs[4].input_value = callback.value;
            this.$set(this.inputs[4], 'state', true);
            this.checkForms()
        },
        checkTime() {
            const timeBegin = this.timeBegin.slice(0, 2);
            const timeEnd = this.timeEnd.slice(0, 2);
            console.log(timeBegin, timeEnd)
            // console.log(parseInt(timeEnd) > parseInt(timeBegin))
            if (parseInt(timeEnd) > parseInt(timeBegin)) {
                return true
            } else {
                return false
            }
        },
        appointment() {
            // как пример неудачного срабатывания
            if (this.inputs[4].input_value === 'г Москва') {
                this.$router.push({ name: 'Error',
                })
                // this.$router.push('/error')
            } else {
                this.$router.push({ name: 'Success',
                    params: {
                        inputs: this.inputs,
                        timeBegin: this.timeBegin,
                        timeEnd: this.timeEnd,
                    }
                })
                // this.$router.push('/success')
            }
        }
    },
}
</script>
