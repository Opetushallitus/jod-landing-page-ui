import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [route(":lng", "routes/home.tsx")] satisfies RouteConfig;
