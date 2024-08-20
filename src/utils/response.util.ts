export class ResponseUtil {
  static success(
    data: any,
    statusCode: number = 200,
    status: string = 'SUCCESS',
  ) {
    return {
      status,
      statusCode,
      data,
    };
  }

  static error(
    message: string,
    statusCode: number = 400,
    status: string = 'ERROR',
  ) {
    return {
      status,
      statusCode,
      data: {
        message,
      },
    };
  }
}
