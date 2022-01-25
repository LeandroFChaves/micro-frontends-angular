import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@exemplo-mfe/navbar",
  app: () => System.import("@exemplo-mfe/navbar"),
  activeWhen: () => true
});

registerApplication({
  name: "@exemplo-mfe/app-angular1",
  app: () => System.import("app-angular1"),
  activeWhen: ["/app-1"],
});

registerApplication({
  name: "@exemplo-mfe/app-angular2",
  app: () => System.import("app-angular2"),
  activeWhen: ["/app-2"],
});

start({
  urlRerouteOnly: true,
});
