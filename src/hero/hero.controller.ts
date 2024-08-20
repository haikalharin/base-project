import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { ResponseUtil } from '../utils/response.util';

const heroes = [
  {
    id: 1,
    name: 'Aurora',
    type: 'Mage',
    image: 'aurora.jpg',
  },
  {
    id: 2,
    name: 'Zilong',
    type: 'Fighter',
    image: 'zilong.jpg',
  },
  {
    id: 3,
    name: 'Akai',
    type: 'Tank',
    image: 'akai.jpg',
  },
  {
    id: 4,
    name: 'bruno',
    type: 'marksman',
    image: 'bruno.jpg',
  },
];

@Controller('hero')
export class HeroController {
  @Get('index')
  @HttpCode(200)
  index(@Res() response) {
    response.json(heroes);
  }

  @Get('detail/:id')
  findOne(@Param() params: any, @Res({ passthrough: true }) response) {
    // try {
    console.log(params.id);

    const data = heroes.find((object) => object.id === parseInt(params.id, 10));
    console.log(data);
    if (data) {
      response.status(200);
      return ResponseUtil.success({
        id: data.id,
        name: data.name,
        type: data.type,
        image: data.image,
      });
    } else {
      console.log({});
      response.status(200);
      return ResponseUtil.success({});
    }
    // }catch (error){
    //  return  ResponseUtil.error(error);
    // }
  }

  @Get('create')
  create(@Res({ passthrough: true }) response) {
    response.cookie('name', 'tobi');
    return 'hero create';
  }

  @Post('store')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @HttpCode(200)
  store(@Req() request, @Res({ passthrough: true }) response) {
    try {
      // response.status(201).json(request.body);
      const { id, name, type, image } = request.body;

      heroes.push({ id, name, type, image });
      return heroes;

      // return {
      //   code: 201,
      //   statusCode: "Success",
      //   data: request.body
      // };
    } catch (error) {}
  }

  @Get('welcome')
  @Redirect('https://docs.nestjs.com/')
  hello() {
    return 'welcome';
  }
}
