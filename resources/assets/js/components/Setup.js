module.exports = {
    props: [],
    data () {
        return {
            env: {
                cache_driver: null,
                queue_driver: null,
                session_driver: null,
                mail_driver: null,
            },
            mail: {
                host: null,
                from: {
                    email: null,
                    name: 'status@cachethq.io',
                },
                username: null,
                password: null,

                requiresHost: true,
                requiresUsername: true,
                requiresPassword: true,
            },
            system: {
                name: null,
                domain: null,
                timezone: null,
                language: null
            }
        }
    },
    watch: {
        'env.mail_driver' (driver) {
            if (driver === 'log' || driver === 'mail') {
                this.mail.requiresHost = false
                this.mail.requiresUsername = false
                this.mail.requiresPassword = false
            } else if (driver === 'ses' || driver === 'mandrill') {
                this.mail.requiresHost = false
                this.mail.requiresUsername = true
                this.mail.requiresPassword = true
            } else {
                this.mail.requiresHost = true
                this.mail.requiresUsername = true
                this.mail.requiresPassword = true
            }
        }
    }
}
