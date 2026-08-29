import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Si quieres, puedes dejar esto vacío
  turbopack: {},
};

export default withNextIntl(nextConfig);