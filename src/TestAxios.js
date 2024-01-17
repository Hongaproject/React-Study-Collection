import axios from "axios";
import { getCookie } from "./Main";

export default axios.create({
    headers: {
        accessToken: getCookie('accessToken'),
    },
});