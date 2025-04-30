import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { ProxyComponent } from "./app/concepts/proxy-component/components/proxy/proxy.component";
// import { HomeComponent } from './app/concepts/route-guards';

bootstrapApplication(ProxyComponent, appConfig).catch((err) =>
  console.error(err)
);
