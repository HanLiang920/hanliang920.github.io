import 'normalize.css';
import { createApp } from 'vue'
import { createPinia, defineStore } from 'pinia'
import { Drawer, Menu } from 'ant-design-vue';
import App from './App.vue'

AFRAME.registerGeometry('electronPair', {
    schema: {
    },

    init: function (data) {
        const curve = new THREE.CubicBezierCurve(
            new THREE.Vector2( 0, 0 ),
            new THREE.Vector2( 1.05, 0.05 ),
            new THREE.Vector2( 0.7, 1.46 ),
            new THREE.Vector2( 0, 1.91 ),
        );
        const points = curve.getPoints( 50 );

        this.geometry = new THREE.LatheGeometry(points,30);
    }
});


const app = createApp(App);
app.use(Drawer).use(Menu).use(createPinia())

app.mount('.chem-3d')

window.addEventListener('camera-init', function () {
    const main = document.getElementsByClassName('main')[0]
    main.parentNode.removeChild( main)
});


