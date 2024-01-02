import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UserProfile } from './users/entities/user-profile.entity';
import { UserRole } from './users/entities/user-role.entity';
import { OrdersModule } from './orders/orders.module';
import { StoresModule } from './stores/stores.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { PaymentModule } from './payment/payment.module';
import { CartModule } from './cart/cart.module';
import { FeedbackModule } from './feedback/feedback.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SearchModule } from './search/search.module';
import { ShippingModule } from './shipping/shipping.module';
import { SupportModule } from './support/support.module';
import { ReportingModule } from './reporting/reporting.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { WhishlistModule } from './whishlist/whishlist.module';
import { AuthModule } from './auth/auth.module';
import { InventoryModule } from './inventory/inventory.module';
import { RefundModule } from './refund/refund.module';
import { AddressModule } from './address/address.module';
import { Address } from './address/entities/address.entity';
import { Store } from './stores/entities/store.entity';
import { OpeningHours } from './stores/entities/opening-hours.entity';
import { Product } from './products/entities/product.entity';
import { Category } from './categories/entities/category.entity';
import { Order } from './orders/entities/order.entity';
import { OrderItem } from './orders/entities/order-item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'ecommerce',
      entities: [
        User,
        UserProfile,
        UserRole,
        Address,
        Store,
        OpeningHours,
        Category,
        Product,
        Order,
        OrderItem,
      ],
      synchronize: true,
    }),
    UsersModule,
    OrdersModule,
    StoresModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    PaymentModule,
    CartModule,
    FeedbackModule,
    NotificationsModule,
    SearchModule,
    ShippingModule,
    SupportModule,
    ReportingModule,
    DashboardModule,
    WhishlistModule,
    AuthModule,
    InventoryModule,
    RefundModule,
    AddressModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
