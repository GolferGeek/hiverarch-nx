import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL') ||
          'mongodb+srv://hiverarchyuser:hiverarchyuser01@hiverarchy1.33zl3.mongodb.net/?retryWrites=true&w=majority',
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoModule {}
