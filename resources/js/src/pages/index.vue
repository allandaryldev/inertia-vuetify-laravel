<template>
    <AuthLayout>
        <form @submit.prevent="form.post('/')">
            <v-card
                class="p-4 capitalize"
                max-width="900"
                max-height="700"
                shaped
            >
                <!-- <img :src="require('../1assets/logo.png')" alt="EMB - LOGO" class="h-28 object-cover "> -->
                <img src="http://r1.emb.gov.ph/wp-content/uploads/2016/07/logo.png" alt="EMB - LOGO" class="h-24 object-cover ">
                <v-card-title>
                    <div class="text-center">
                        <h3 class="mb-0">Login</h3>
                    </div>
                </v-card-title>
                <div class="p-6">
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="form.username"
                                label="Username"
                                required
                                outlined
                                :error-messages="form.errors.username"
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field
                                v-model="form.password"
                                :append-icon="
                                    showpass ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                outlined
                                :type="showpass ? 'text' : 'password'"
                                name="password"
                                label="Password"
                                @click:append="showpass = !showpass"
                                :error-messages="form.errors.password"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="dark" x-small>Forgot password</v-btn>
                    <v-btn color="light-green darken-4" type="submit"
                        >Log In</v-btn
                    >
                </v-card-actions>
            </v-card>
        </form>
    </AuthLayout>
</template>

<script>
import AuthLayout from "../layouts/auth.vue";
export default {
    components: {
        AuthLayout,
    },

    data() {
        return {
            form: this.$inertia.form({
                username: null,
                password: null,
            }),
            showpass: false,
        };
    },
};
</script>

<style></style>
