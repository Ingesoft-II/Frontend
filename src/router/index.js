import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./../views/Login.vue";
import Signup from "./../views/Signup.vue";
import Profile from "./../views/Profile.vue";
import VehicleRegistration from "./../views/VehicleRegistration.vue";
import Home from "./../views/Home.vue";
import DriverProfile from "@/views/DriverProfile.vue";
import AboutUS from "./../views/AboutUS.vue";
import CreateService from "./../views/CreateService.vue";
import PostService from "./../views/PostService.vue";
import Passenger from "./../views/Passenger.vue";
import Driver from "./../views/Driver.vue";
import RideRegistration from "./../views/RideRegistration.vue";
import viewPassengers from "./../views/ViewPassengers.vue"
import PassengerProfile from "./../views/PassangerProfile.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/profile", name: "profile", component: Profile },
  {
    path: "/ride-registration",
    name: "rideRegistration",
    component: RideRegistration,
  },
  {
    path: "/vehicle-registration",
    name: "vehicleRegistration",
    component: VehicleRegistration,
  },
  { path: "/home", name: "home", component: Home },
  { path: "/driver-profile", name: "driver-profile", component: DriverProfile },
  { path: "/about-us", name: "aboutUs", component: AboutUS },
  { path: "/post-service", name: "postService", component: PostService },
  { path: "/create-service", name: "createService", component: CreateService },
  { path: "/passenger", name: "passenger", component: Passenger },
  { path: "/driver", name: "driver", component: Driver },
  { path: "/view-passengers", name: "viewPassengers", component: viewPassengers },
  {
    path: "/passanger-profile",
    name: "passanger-profile",
    component: PassengerProfile,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {

  if (
    to.name !== "login" &&
    to.name !== "signup" &&
    to.name !== "aboutUs" &&
    !localStorage.getItem("token")
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
