
import HomePage from "../pages/HomePage/HomePage";
import LandingPage from "../pages/LandingPage";
import { MovieDetailPage } from "../pages/MovieDetail";


import TickingPage from "../pages/TickingPage";


export const publicRouter = [
    {path: '/', component: HomePage },
    {path: '/movie/:id', component: MovieDetailPage},
    {path: '/ticking/:id', component: TickingPage},
    {path: '/landing', component: LandingPage}
] 