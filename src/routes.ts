import DisciplineController from "./controller/DisciplineController";

export const Routes = [
  {
    method: "get",
    route: "/discipline",
    controller: DisciplineController,
    action: "all",
  },
  {
    method: "post",
    route: "/discipline/create",
    controller: DisciplineController,
    action: "create",
  },  
  {
    method: "get",
    route: "/discipline/:id",
    controller: DisciplineController,
    action: "one",
  },
  {
    method: "post",
    route: "/discipline/:id/update",
    controller: DisciplineController,
    action: "create",
  },  
  {
    method: "delete",
    route: "/actions/:id/remove",
    controller: DisciplineController,
    action: "remove",
  },
];
