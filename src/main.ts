import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import metadata from './metadata';
import { ConfigService } from '@nestjs/config';
import { HelperService } from '@common/helpers';
import chalk from 'chalk';
import { SWAGGER_API_ENDPOINT } from '@common/constant';
import { useContainer } from 'class-validator';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      snapshot: true,
    }
  );

  logger.log(`🛠️ Using env ${HelperService.getEnvFile()}\n`);

  const configService = app.get(ConfigService<Configs, true>);

  // ======================================================
  // security and middlewares
  // ======================================================

  app.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`, 'unpkg.com'],
        styleSrc: [
          `'self'`,
          `'unsafe-inline'`,
          'cdn.jsdelivr.net',
          'fonts.googleapis.com',
          'unpkg.com',
        ],
        fontSrc: [`'self'`, 'fonts.gstatic.com', 'data:'],
        imgSrc: [`'self'`, 'data:', 'validator.swagger.io', 'cdn.jsdelivr.net'],
        scriptSrc: [
          `'self'`,
          `https: 'unsafe-inline'`,
          `cdn.jsdelivr.net`,
          `'unsafe-eval'`,
        ],
      },
    },
  });

  if (!HelperService.isProd()) {
    app.enableCors({
      credentials: true,
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
      maxAge: 3600,
      origin: configService.get('app.allowedOrigins', { infer: true }),
    });
  }

  // =====================================================
  // configure global pipes, filters, interceptors
  // =====================================================
  const globalPrefix = configService.get('app.prefix', { infer: true });

  app.setGlobalPrefix(globalPrefix);

  app.useGlobalPipes(new ValidationPipe());

  if (!HelperService.isProd()) {
    const config = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
    await SwaggerModule.loadPluginMetadata(metadata);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(SWAGGER_API_ENDPOINT, app, document);
  }

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port =
    process.env.PORT ?? configService.get('app.port', { infer: true })!;

  await app.listen(port);

  const appUrl = await app.getUrl();

  logger.log(`🚀 Application is running on: ${chalk.greenBright(appUrl)}`);
  logger.log(
    `🚦 Accepting request only from: ${chalk.greenBright(
      `${configService.get('app.allowedOrigins', { infer: true }).toString()}`,
    )}`,
  );

  if (!HelperService.isProd()) {
    const swaggerUrl = `${appUrl}/${SWAGGER_API_ENDPOINT}`;
    logger.log(`📑 Swagger is running on: ${chalk.greenBright(swaggerUrl)}`);
  }
}
bootstrap();
