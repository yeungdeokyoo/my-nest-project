import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService  {
  getHello(): string {
    return 'Hello World! : ' + this.getServerInfo();
  }

  getServerInfo(): string {
    
    return "";
  }
}
