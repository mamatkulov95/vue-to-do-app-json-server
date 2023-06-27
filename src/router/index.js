import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddProject from "../views/AddProject.vue";
import EditProject from "../views/EditProject.vue";
import AboutUs from "../views/AboutUs.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "addProject",
    component: AddProject,
  },
  {
    path: "/about",
    name: "aboutus",
    component: AboutUs,
  },
  {
    path: "/edit/:id",
    name: "editproject",
    component: EditProject,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
