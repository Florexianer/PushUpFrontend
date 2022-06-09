import Home from "@/components/Home";
import Upload from "./components/Upload";

export default [
    // Insert additional routes here
    //{ name: 'gallery', path: '/gallery', component: Gallery, props: false },
    { name: 'upload', path: '/upload', component: Upload, props: false },

    { name: 'default', path: '*', component: Home, props: false }]
