import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID abvIIykWJ32MXteDtcd-dPQZyFXp3RLYmQkgSCqdYhg'
    }
});