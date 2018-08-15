import {initMap} from "./map";
import {getDetailsContentLayout} from "./details";

ymaps.ready(() => {
    initMap(ymaps, "map");
	  getDetailsContentLayout(ymaps);
    console.log("inited");
});
