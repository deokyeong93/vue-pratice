import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingInputNumber from "../views/DataBindingInputNumber.vue";
import DataBindingTextarea from "../views/DataBindingTextarea.vue";
import DatabindingSelect from "../views/DatabindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingMultiCheck from "../views/DataBindingMultiCheck.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";
import DataBindingButton from "../views/DataBindingButton.vue";
import DataBindingClass from "../views/DataBindingClass.vue";
import DataBindingClass2 from "../views/DataBindingClass2.vue";
import DataBindingStyle from "../views/DataBindingStyle.vue";
import DataBindingList from "../views/DataBindingList.vue";
import RenderingVif from "../views/RenderingVif.vue";
import EventClick from "../views/EventClick.vue";
import EventChange from "../views/EventChange.vue";
import Watch from "../views/Watch.vue";
import BubbleEvent from "../views/BubbleEvent.vue";
import ChildParent from "../views/ChildParent.vue";
import CompositionAPI from "../views/CompositionAPI.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding,
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: DataBindingHtml,
  },
  {
    path: "/databindinginputtext",
    name: "DataBindingInputText",
    component: DataBindingInputText,
  },
  {
    path: "/databindinginputnumber",
    name: "DataBindingInputNumber",
    component: DataBindingInputNumber,
  },
  {
    path: "/databindingtextarea",
    name: "DataBindingTextarea",
    component: DataBindingTextarea,
  },
  {
    path: "/databindingselect",
    name: "DatabindingSelect",
    component: DatabindingSelect,
  },
  {
    path: "/databindingcheckbox",
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/databindingmulticheck",
    name: "DataBindingMultiCheck",
    component: DataBindingMultiCheck,
  },
  {
    path: "/databindingradio",
    name: "DataBindingRadio",
    component: DataBindingRadio,
  },
  {
    path: "/databindingbutton",
    name: "DataBindingButton",
    component: DataBindingButton,
  },
  {
    path: "/databindingclass",
    name: "DataBindingClass",
    component: DataBindingClass,
  },
  {
    path: "/databindingclass2",
    name: "DataBindingClass2",
    component: DataBindingClass2,
  },
  {
    path: "/databindingstyle",
    name: "DataBindingStyle",
    component: DataBindingStyle,
  },
  {
    path: "/databindinglist",
    name: "DataBindingList",
    component: DataBindingList,
  },
  {
    path: "/renderingvif",
    name: "RenderingVif",
    component: RenderingVif,
  },
  {
    path: "/eventclick",
    name: "EventClick",
    component: EventClick,
  },
  {
    path: "/eventchange",
    name: "EventChange",
    component: EventChange,
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch,
  },
  {
    path: "/bubbleevent",
    name: "BubbleEvent",
    component: BubbleEvent,
  },
  {
    path: "/childparent",
    name: "ChildParent",
    component: ChildParent,
  },
  {
    path: "/compositionapi",
    name: "compositionapi",
    component: CompositionAPI,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
