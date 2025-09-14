import { CorsOptions } from "cors";

export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(
        new Error(
          "CORS policy does not allow access from the specified Origin."
        )
      );
    }
  },
};
