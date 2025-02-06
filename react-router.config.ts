import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/fi", "/sv", "/en"],
} satisfies Config;
