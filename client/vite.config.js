import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  resolve: {
    alias: {
      "@services": "/src/services",
      "@components": "/src/Components",
      "@assets": "/public/assets",
      "@hooks": "/src/Hooks",
      "@data": "/src/Data",
      "@utils": "/src/Utils",
      "@pages": "/src/Pages",
    },
  },
};
