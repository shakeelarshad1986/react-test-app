import { init } from "@rematch/core";
import persistPlugin from '@rematch/persist'
import storage from "redux-persist/lib/storage";
import createLoadingPlugin from '@rematch/loading';
import alert from './notifications/alert';
import breed from "./models/breeds/breed";


const persistConfig = {
    key: 'root',
    storage,
    // whitelist:['auth']
}
const store = init({
    models: {alert,breed},
    plugins: [persistPlugin(persistConfig),createLoadingPlugin()]
})

export default store;