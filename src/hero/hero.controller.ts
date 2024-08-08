import { Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';

@Controller('hero')
export class HeroController {
  @Get('index')
  @HttpCode(200)
  index(@Res() response) {
    response.json({
      title: 'hero index',
    });
  }


  @Get('create')
  create(@Res({ passthrough: true }) response) {
    response.cookie('name', 'tobi');
    return 'hero create';
  }

  @Post('store')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  store(@Req() request, @Res({ passthrough: true }) response) {
    // response.status(201).json(request.body);
    return {
      data: request.body,
    };
  }
}
