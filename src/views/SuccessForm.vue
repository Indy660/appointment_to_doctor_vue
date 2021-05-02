<template>
    <div>
        <b-row class="justify-content-md-center mt-4">
            <b-col col md="8">
                <b-card
                    header="Вы записаны к врачу"
                    header-bg-variant="success"
                    header-text-variant="white"
                >
                    <b-table hover :items="items"></b-table>
                </b-card>
            </b-col>
        </b-row>
        <b-col col md="8">
            <b-button @click="returnToMainForm()">Вернуться в главное меню</b-button>
        </b-col>
    </div>
</template>

<script>
export default {
    name: "SuccessForm",
    data() {
        return {
            items: []
        }
    },
    props: ['inputs', 'timeBegin', 'timeEnd'],
    mounted() {
        // this.$nextTick(function () {
        if (this.inputs) {
            let array = [];
            for (const key in this.inputs) {
                let obj = {};
                obj['Параметр'] = this.inputs[key].tabel;
                obj['Данные'] = this.inputs[key].input_value;
                array.push(obj);
            }
            array.push({'Параметр': 'Время начала записи', 'Данные': this.timeBegin});
            array.push({'Параметр': 'Время конца записи', 'Данные': this.timeEnd});
            // console.log(array)
            this.items = array
        }
        // })
    },
    methods: {
        returnToMainForm() {
            this.$router.push({ name: 'MainForm' })
        }
    }
}
</script>
