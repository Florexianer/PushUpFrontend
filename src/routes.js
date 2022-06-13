import Transformation from "./components/Transformation";
import Upload from "./components/Upload";
import Home from "@/components/Home";
import Charts from "./components/Charts";

export default [
    // Insert additional routes here
    //{ name: 'gallery', path: '/gallery', component: Gallery, props: false },
    { name: 'upload', path: '/upload', component: Upload, props: false },
    { name: 'transformation', path: '/transformation', component: Transformation, props: false },
    { name: 'charts', path: '/charts', component: Charts, props: false },
    { name: 'default', path: '*', component: Home, props: false }]
