import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // inputs: {
        //     1: {
        //         id: 1,
        //         input_value: '',
        //         type: 'text',
        //         description: 'Введите ваше ФИО',
        //         tabel: 'Ваше ФИО',
        //         state: null,
        //         mistake: 'Заполните форму',
        //         rules: ((key) => { this.rulesInputName(key) })
        //     },
        //     2: {
        //         id: 2,
        //         input_value: 0,
        //         type: 'number',
        //         description: 'Введите ваш возраст',
        //         tabel: 'Ваш возраст',
        //         state: null,
        //         mistake: 'Укажите возраст',
        //         rules: ((key) => { this.rulesInputAge(key) })
        //
        //     },
        //     3: {
        //         id: 3,
        //         input_value: '',
        //         type: 'date',
        //         description: 'Введите дату записи',
        //         tabel: 'Ваша дату',
        //         state: null,
        //         mistake: 'Заполните форму',
        //         rules: ((key) => { this.rulesInputDate(key) })
        //     },
        //     4: {
        //         id: 4,
        //         input_value: '',
        //         type: 'seek_city',
        //         description: 'Введите город проживания',
        //         tabel: 'Ваш город',
        //         state: null,
        //         mistake: 'Заполните форму',
        //         // rules: ((key) => { this.rulesInputCity(key) })
        //     },
        // },
        // timeBegin: '',
        // timeEnd: '',
    },
    actions: {},
    getters: {},
    methods: {
        // updateTimeBegin(e) {
        //     this.$store.commit('timeBegin', e.target.value)
        // }
        // rulesInputName(key) {
        //     console.log('rulesInputName111', key)
        //     //знаю, что можно сломать инпуты эту регулярку
        //     if (this.$store.state.inputs[key].input_value.length > 4 &&
        //         this.$store.state.inputs[key].input_value.includes(" ") &&
        //         this.$store.state.inputs[key].input_value.replace(/[^a-zA-ZА-Яа-я]/g, "").length >= 4
        //     ) {
        //         this.$set(this.$store.state.inputs[key], 'state', true)
        //     } else if (this.$store.state.inputs[key].input_value.length === 0) {
        //         this.$set(this.$store.state.inputs[key], 'state', null)
        //     } else {
        //         this.$set(this.$store.state.inputs[key], 'state', false)
        //     }
        //     this.checkForms()
        // },
        rulesInputName(key) {
            console.log('rulesInputName111', key)
            //знаю, что можно сломать инпуты эту регулярку
            if (this.state.inputs[key].input_value.length > 4 &&
                this.state.inputs[key].input_value.includes(" ") &&
                this.state.inputs[key].input_value.replace(/[^a-zA-ZА-Яа-я]/g, "").length >= 4
            ) {
                this.$set(this.state.inputs[key], 'state', true)
            } else if (this.state.inputs[key].input_value.length === 0) {
                this.$set(this.state.inputs[key], 'state', null)
            } else {
                this.$set(this.state.inputs[key], 'state', false)
            }
            this.checkForms()
        },
    },
    mutations: {
        updateTimeBegin(message) {
            this.state.inputs.timeBegin = message
        },
        updateTimeEnd(message) {
            this.state.inputs.timeEnd = message
        },
    },
})