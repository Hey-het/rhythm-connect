import cors from "cors";

const corsOptions = {
  origin: ["http://localhost:3000", "https://rhythm-connect-aaju.vercel.app"], // NO trailing slash
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
