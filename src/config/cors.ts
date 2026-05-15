type CorsOptions =
  import('@nestjs/common/interfaces/external/cors-options.interface').CorsOptions;

export function myCustomCors(): CorsOptions {
  const cors: CorsOptions = {
    allowedHeaders: ['Content-Type'],
    origin: ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  };
  return cors;
}
