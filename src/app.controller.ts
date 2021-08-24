import { Body, Controller, Get, Param, Req, Post, Query, Res, HttpStatus } from '@nestjs/common';
import {Request} from 'express';
import {Response} from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/serverInfo")
  getServerInfo(@Req() request:Request): string {
    var sQueries = '';

    return '  Server URL: ' + request.url
      + '<br> Server Query origin : ' + request.query.origin
      ;
  }

  /*@Get("/serverInfoByDeco")
  getServerInfoByDeco(@Query() query): string {
    var sQueries = '';

    return '  Server Query origin : ' + query.origin
      ;
  }*/

  @Get("/send_vin_list")
  sendVinList(@Query('vin1') vin1:string, @Query('vin2') vin2:string,
  @Res() response: Response  ) {
    var resMessage = "Post vin1 : " + vin1
      + "<br> vin2 : " + vin2
    ;

    response.set('vin1', vin1 );  //res header
    response.set('vin2', vin2 );  //res header
    //response.status(HttpStatus.OK).json([]); 
    response.status(HttpStatus.OK).json( JSON.stringify(resMessage)); 

  }

  @Post("/send_vin_list_hma")
  sendVinListHma(@Body('vin1') vin1:string, @Body('vin2') vin2:string): string {
    return "Post vin1 : " + vin1
      + "<br> vin2 : " + vin2
    ;
  }



}
