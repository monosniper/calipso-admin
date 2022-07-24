import $api from "../http";
const ADMIN_ROLE = 'admin';

const authProvider = {
    login: ({ email, password }) => {
        return $api.get(`/sanctum/csrf-cookie`).then(response => {
            return $api.post('/login', {email, password}).then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }

                // Set api token in local storage
                return $api.post('/api/sanctum/token', {email, password}).then(response => {
                    const token = response.data;
                    localStorage.setItem('api_token', token);
                    return token;
                }).then((token) => {
                    // Set auth info in local storage
                    return $api.get('/api/me?token=' + token).then(response => {
                        if(!authProvider.checkAdmin(response)) return Promise.reject('Для доступа к Админ панели необходимо быть администратором.');
                        localStorage.setItem('auth', JSON.stringify(response.data.data));
                    }).then(() => {
                        return Promise.resolve();
                    })
                })
            }).catch((e) => {
                return Promise.reject(e);
            });
        });
    },
    checkError: (error) => {
        return Promise.resolve();
    },
    checkAdmin: (response) => {
        return response.data.data.roles.indexOf(ADMIN_ROLE) !== -1
    },
    checkAuth: () => {
        return $api.get('/refresh?token='+localStorage.getItem('api_token')).then(response => {
            return authProvider.checkAdmin(response) ? Promise.resolve() : Promise.reject();
        }).catch(e => {
            return Promise.reject();
        })
    },
    logout: () => {
        return Promise.resolve();
    },
    getIdentity: async () => {
        try {
            const { id, fullname, avatar } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName: fullname, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: (params) => {
        return Promise.resolve();
    },
}

export default authProvider;