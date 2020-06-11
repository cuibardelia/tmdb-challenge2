import {Router} from "wpe-lightning-sdk";
import {getMovies} from './api';

/**
 *  bind a data request to a specific route, before a page load
 *  the router will test for any data-binding. If there is, it will
 *  wait for the promise to resolve and load the correct page.
 *
 * @see docs: https://github.com/rdkcentral/Lightning-SDK/blob/feature/router/docs/plugins/router.md
 *
*/
export default () => {

    Router.boot(async()=> {
        // this will always be called
    });

    Router.before("movies", async ({page})=>{
        const movies = await getMovies();
        page.data = movies;
    }, 10 * 60);


    Router.before('series', async({page}) => {
        const series = await getSeries();
        page.data = series
    }, 600)
    /**
     * @todo:
     * add a data-provider for the new series route
     * and make sure you call grab the series from TMDBl
     * https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}
     */
}