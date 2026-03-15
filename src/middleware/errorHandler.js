import { HttpError } from 'http-errors';
import multer from 'multer';

export const errorHandler = (err, _req, res, _next) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: err.message || err.name,
    });
  }

  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        message: 'File is too large. Max size is 2MB',
      });
    }
  }

  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    message: isProd ? 'Internal server error' : err.message,
  });
};
