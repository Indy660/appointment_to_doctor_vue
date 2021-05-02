<template>
    <div>
        <b-row class="justify-content-md-center mt-4">
            <b-col col md="8">
                <b-card
                    header="Что-то пошло не так. Попробуйте записаться ещё раз"
                    header-bg-variant="danger"
                    header-text-variant="white"
                >
                    <b-button @click="returnToMainForm()">Повторить запись</b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "ErrorForm",
    methods: {
        returnToMainForm() {
            this.$router.push({ name: 'MainForm' })
        }
    }
}
</script>

<style scoped>

</style>